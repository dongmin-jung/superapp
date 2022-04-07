import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { boundMethod } from 'autobind-decorator';

/**
 * 서버와 통신하는 API 클래스입니다.
 * axios 라이브러리를 사용하여 통신합니다.
 * 싱글톤으로 구현되어 있는 클래스입니다. Axios 인스턴스를 하나만 두기 위함입니다. 추후 repository class 별로 상속하는 구조로 갈 수 있습니다.
 * 아직 공사가 많이 필요한 라이브러리입니다 [여기](https://medium.com/@enetoOlveda/how-to-use-axios-typescript-like-a-pro-7c882f71e34a) 와 [여기](https://github.com/EnetoJara/axios-typescript/blob/master/types/api/api.d.ts) 를 참고하여 구현할 예정입니다.
 */
class API {
    /**
     * 통신에 사용되는 base URL 주소입니다.
     */
    private baseUrl: string;

    /**
     * 생성자 입니다.
     */
    public constructor() {
        this.baseUrl = 'http://127.0.0.1:4000';
        axios.defaults.baseURL = this.baseUrl;
    }

    /**
     * Base URL 주소를 반환합니다.
     *
     * @returns 해당 object 의 base URL
     */
    @boundMethod
    public getBaseUrl(): string {
        return this.baseUrl;
    }

    /**
     * URI를 반환합니다.
     *
     * @param config Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns String 형태의 URI입니다.
     */
    public getUri(config?: AxiosRequestConfig): string {
        return axios.getUri(config);
    }

    /**
     * REQUEST 통신을 수행합니다.
     *
     * @param config REQUEST 통신을 위한 Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns Promise 형태의 axios response
     * @example
     * axios.request({
     *   method: "GET|POST|DELETE|PUT|PATCH"
     *   baseUrl: "http://www.domain.com",
     *   url: "/api/v1/users",
     *   headers: {
     *     "Content-Type": "application/json"
     *  }
     * }).then((response: AxiosResponse) => response.data)
     */
    public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.request(config);
    }

    /**
     * GET 통신을 수행합니다.
     *
     * @param url GET 통신을 위한 url 입니다. Base url 은 생략합니다.
     * @param config GET 통신을 위한 Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns Promise 형태의 axios response
     */
    public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.get(url, config);
    }

    /**
     * DELETE 통신을 수행합니다.
     *
     * @param url DELETE 통신을 위한 url 입니다. Base url 은 생략합니다.
     * @param config DELETE 통신을 위한 Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns Promise 형태의 axios response
     */
    public delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.delete(url, config);
    }

    /**
     * HEAD 통신을 수행합니다.
     *
     * @param url HEAD 통신을 위한 url 입니다. Base url 은 생략합니다.
     * @param config HEAD 통신을 위한 Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns Promise 형태의 axios response
     */
    public head(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.head(url, config);
    }

    /**
     * POST 통신을 수행합니다.
     *
     * @param url POST 통신을 위한 url 입니다. Base url 은 생략합니다.
     * @param data POST 요청으로 보내질 body의 payload 입니다. (B: body request object)
     * @param config POST 통신을 위한 Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns Promise 형태의 axios response
     */
    public post<B>(url: string, data: B, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.post(url, data, config);
    }

    /**
     * PUT 통신을 수행합니다.
     *
     * @param url PUT 통신을 위한 url 입니다. Base url 은 생략합니다.
     * @param data PUT 요청으로 보내질 body의 payload 입니다. (B: body request object)
     * @param config PUT 통신을 위한 Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns Promise 형태의 axios response
     */
    public put<B>(url: string, data: B, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.put(url, data, config);
    }

    /**
     * PATCH 통신을 수행합니다.
     *
     * @param url PATCH 통신을 위한 url 입니다. Base url 은 생략합니다.
     * @param data PATCH 요청으로 보내질 body의 payload 입니다. (B: body request object)
     * @param config PATCH 통신을 위한 Axios 설정입니다. 입력하지 않으면 기본 설정으로 동작합니다.
     * @returns Promise 형태의 axios response
     */
    public patch<B>(url: string, data: B, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.patch(url, data, config);
    }

    /**
     * 요청이 성공적으로 수행되면 response.data 를 반환합니다.
     *
     * @param response 요청에 의해 얻어진 axios response 입니다.
     * @returns response의 data
     */
    public success(response: AxiosResponse) {
        return response.data;
    }

    /**
     * 요청이 실패하면 error 객체를 반환합니다.
     *
     * @param error axios error 객체입니다.
     * @throws axios error 객체
     */
    public error(error: AxiosError) {
        throw error;
    }
}
export default new API();
