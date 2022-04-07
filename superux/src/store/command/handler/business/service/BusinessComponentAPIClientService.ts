import BusinessComponentClientService from 'store/command/handler/business/service/BusinessComponentClientService';
import API from 'repository/API';
import { BusinessLogicEnum, ExecuteBusinessComponentProps } from 'model/business/BusinessPresetManager';
import { isDefined } from 'util/TypeUtils';

const EARTH_RADIUS = 6371.00877; // 지구 반경(km)
const GRID_SPACING = 5.0; // 격자 간격(km)
const PROJECTED_LATITUDE = 30.0; // 투영 위도(degree)
const POINT_LONGITUDE = 126.0; // 기준점 경도(degree)
const POINT_LATITUDE = 38.0; // 기준점 위도(degree)
const POINT_X = 43; // 기준점 X좌표(GRID)
const POINT_Y = 136; // 기준점 Y좌표(GRID)

/**
 * 추후 x,y에서 위도 경도 변환 필요시 사용할 인터페이스
 */
interface convertData {
    x: number;
    y: number;
    lat: number;
    lng: number;
}

/**
 * 위도와 경도를 입력받아 x,y좌표로 만들어주는 함수
 * 기상청 공공 api자체 converter가 내장되어 있지 않아 따로 만들어 두어야 함
 *
 * @param latitude 위도
 * @param longitude 경도
 * @returns latitude,longitude 를 x,y (좌표)값으로 변환한 정보
 */
export function converterXY(latitude: number, longitude: number) {
    const DEGRAD = Math.PI / 180.0;

    const re = EARTH_RADIUS / GRID_SPACING;
    const slat1 = PROJECTED_LATITUDE * DEGRAD;
    const slat2 = PROJECTED_LATITUDE * 2 * DEGRAD;
    const olon = POINT_LONGITUDE * DEGRAD;
    const olat = POINT_LATITUDE * DEGRAD;

    let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = (sf ** sn * Math.cos(slat1)) / sn;
    let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = (re * sf) / ro ** sn;
    const convertData: convertData = { lat: latitude, lng: longitude, x: 0, y: 0 };
    let ra = Math.tan(Math.PI * 0.25 + latitude * DEGRAD * 0.5);
    ra = (re * sf) / ra ** sn;
    let theta = longitude * DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;
    convertData.x = Math.floor(ra * Math.sin(theta) + POINT_X + 0.5);
    convertData.y = Math.floor(ro - ra * Math.cos(theta) + POINT_Y + 0.5);

    return convertData;
}

/**
 * BusinessComponent의 API 호출이 필요한 서비스 모음입니다.
 * 각 서비스를 구현하는 곳에서 구현할 예정인 api들이 시연을 위해 필요할 때가 있어
 * 분리해둔 상태
 */
class BusinessComponentAPIClientService extends BusinessComponentClientService {
    /**
     * BusinessComponentAPIClientService 비즈니스 로직 excute
     */
    public execute(props: ExecuteBusinessComponentProps): void {
        switch (props.businessType) {
            case BusinessLogicEnum.WEATHER:
                this.openTodayWeatherAlert();
                break;
            case BusinessLogicEnum.SHOW_GPS:
                this.openGPSInfoAlert();
                break;
            case BusinessLogicEnum.CALL:
                this.call();
                break;
            default:
                break;
        }
    }

    /**
     * 오늘 날시 정보를 알려주는 window Alert
     * 기상청 공공 api를 사용했고, 원래는 key를 사용자 별로 받아야 하나 현재 이런 서비스는 super-ux에서 개발하는 것이 아니라
     * 추후, 각 필요한 서비스를 개발하는 곳에서 개발하기에 시현을 위한 개인 키가 들어가 있음
     * 원래는 client에서가 아닌, 사용자의 키를 받아 서버에서 데이터를 요청하고 받아온 data를 가지고
     * client에선 처리만 하도록 함
     * 사용하고 있는 api: https://www.data.go.kr/data/15084084/openapi.do
     */
    private async openTodayWeatherAlert(): Promise<void> {
        // 현재 currentPosition을 기반으로 날씨컴포넌트를 하지만
        // geolocation api가 chrome 기반이라, electron에선 별도의 키 인증과정이 필요함 따라서 현재 `정자일로 45`를 기준으로
        // 임의로 위도와 경도를 세팅하였음

        const lat = 37.354089343664;
        const lng = 127.1053305555;

        // 위도와 경도를 가지고 기상청 api는 제공하지 않기 때문에 반드시 x,y 좌표로 변환하는 과정이 필요함
        const convertedData: convertData = converterXY(lat, lng);
        // 기상청은 예보마다 다르지만 정각 의 시간과 오늘 날짜를 기반으로 요청해야한다. 이전의 데이터 같은 경우
        // 존재하지 않을 수 있기 때문에, 현재 시간과 날짜에 대한 데이터를 받아와야함
        const currentDate = new Date();
        const dateInfo =
            currentDate.getFullYear() +
            `0${currentDate.getMonth() + 1}`.slice(-2) +
            `0${currentDate.getDate()}`.slice(-2);

        // const timeInfo = `${`0${currentDate.getHours()}`.slice(-2)}00`;

        const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /* URL */

        // 쿼리안에 들어가는 요청변수들은 필수 항목들이라서 적어두어야 함
        let queryString = `?${encodeURIComponent(
            'serviceKey'
        )}=R7KdZkBSNOJbKa8tClMLKDaUhSByJ2oOPKQWW%2F1lkbT7P3DZNIb62XUPAnBZ7G1zpVZpK53nS0dWzvOwRN06Xg%3D%3D`; /* Service Key */
        queryString += `&${encodeURIComponent('pageNo')}=${encodeURIComponent('1')}`; /* 페이지 번호 */
        queryString += `&${encodeURIComponent('numOfRows')}=${encodeURIComponent('1000')}`; /* 한페이지 결과 수 */
        queryString += `&${encodeURIComponent('dataType')}=${encodeURIComponent(
            'JSON'
        )}`; /* 요청 자료 형식 (JSON/XML) */
        queryString += `&${encodeURIComponent('base_date')}=${encodeURIComponent(`${dateInfo}`)}`; /* 발표일자 */
        /**
         * 기상청에서 발표하는 시간대가 존재함 그 시간대에 해당하는 자료 예를들어 오후 2시 예보는 2시 10분에 발표
         * 매 시간마다 발표하는 것이 아니라서 현재시간에서 볼 수 있는 가장 최신의 시간대를 넣어야 하는데
         * 현재는 그냥 매일 오전 0600 시에 발표되는 자료를 넣으려고 함
         *  참고
         * Base_time : 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 (1일 8회)
         * API 제공 시간(~이후) : 02:10, 05:10, 08:10, 11:10, 14:10, 17:10, 20:10, 23:10
         */
        queryString += `&${encodeURIComponent('base_time')}=${encodeURIComponent('0500')}`; /* 발표시각 */
        queryString += `&${encodeURIComponent('nx')}=${encodeURIComponent(
            `${convertedData.x}`
        )}`; /* 위도를 x 좌표값으로 변환 후 넣음 */
        queryString += `&${encodeURIComponent('ny')}=${encodeURIComponent(
            `${convertedData.y}`
        )}`; /* 경도를 y 좌표값으로 변환 후 넣음 */
        const responseWeatherData = await API.get(url + queryString);
        if (isDefined(responseWeatherData)) {
            const currentTemperature = responseWeatherData.data.response.body.items.item[0].fcstValue;
            const precipitationProbability = responseWeatherData.data.response.body.items.item[7].fcstValue;
            const humidity = responseWeatherData.data.response.body.items.item[10].fcstValue;
            window.alert(
                `현재온도: ${currentTemperature}\n현재습도: ${humidity}%\n강수확률: ${precipitationProbability}%`
            );
        } else {
            window.alert('오늘 하루 트래픽 사용량이 초과되었습니다.');
        }
    }

    /**
     * GPS 정보를 알려주는 alert
     * electron에선 geolocation을 사용할 땐 key가 필요하다, 따라서 위치정보를 동의했다고 해도
     * 별도의 키를 인증하지 않으면 electron에선 사용할 수 없다.
     * 모바일 앱의 경우 내장 GPS를 사용, 웹앱의 경우엔 현재 IP를 기반으로 기지국과의 거리계산을 통해
     * 오차범위가 큰 현재 위치를 제공하는 방식이다. 여러가지 api가 있지만 현재 이것도 결정된 것이 없어
     * 임의로 Chrome에서 사용하는 현재 위치 api를 사용함
     */
    private async openGPSInfoAlert(): Promise<void> {
        const result = await navigator.permissions.query({ name: 'geolocation' });
        if (result.state === 'denied') {
            window.alert(`${result.state} 위치 정보 허용을 허용해주세요`);
        } else {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const message = position.coords.latitude
                        .toString()
                        .concat(', ', position.coords.longitude.toString());
                    window.alert(message);
                },
                (error: GeolocationPositionError) => {
                    window.alert(`error code: ${error.code}`);
                }
            );
        }
    }

    /**
     * 현재 나온 가이드가 없어 비어둠
     */
    private call(): void {
        //
    }
}

export default BusinessComponentAPIClientService;
