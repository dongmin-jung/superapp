import React from "react";
import { observer } from "mobx-react-lite";
import PageWidgetComponent from "component/widget-editor/widget/PageWidgetComponent"
import BasicLabelWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicLabelWidgetComponent";
import BasicTextBoxWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicTextBoxWidgetComponent";
import LayoutVerticalFrameComponent from "component/widget-editor/widget/layout/LayoutVerticalFrameComponent";
import LayoutHorizontalFrameComponent from "component/widget-editor/widget/layout/LayoutHorizontalFrameComponent";
import BasicCheckBoxWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicCheckBoxWidgetComponent";
import BasicToggleButtonGroupWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicToggleButtonGroupWidgetComponent";
import BasicToggleButtonWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicToggleButtonWidgetComponent";
import Composite_1 from "component/composite/Composite_1";
import RepeatableLayoutComponent from "component/widget-editor/widget/layout/RepeatableLayoutComponent";
import useStore from "hook/util/useStore";
import { Custom_1 } from "store/logic/Custom_1";
import { Custom_3 } from "store/logic/Custom_3";
import { Custom_7 } from "store/logic/Custom_7";

const Page_1: React.FC = () => {
    const { dataStore, uiStore, businessPresetManager } = useStore();
    return (
        <PageWidgetComponent
            id="1"
            widgetStyle={{
                width: "100%",
                height: "100%"
            }}
            properties={{ className: "" }}
        >
            <LayoutVerticalFrameComponent
                id="2"
                properties={{
                    className: ""
                }}
                widgetStyle={{
                    left: "calc(50% - 400px)",
                    position: "absolute",
                    width: "800px"
                }}
                event={{}}
            >
                <BasicLabelWidgetComponent
                    id="3"
                    properties={{
                        className: "",
                        text: "todos"
                    }}
                    widgetStyle={{
                        fontSize: "100px"
                    }}
                    event={{}}
                />
                <LayoutHorizontalFrameComponent
                    id="4"
                    properties={{
                        className: ""
                    }}
                    widgetStyle={{
                    }}
                    event={{}}
                >
                    <BasicCheckBoxWidgetComponent
                        id="5"
                        properties={{
                            className: "",
                            checked: dataStore.getArgumentData().get('isChecked')?.dataValue
                        }}
                        widgetStyle={{
                        }}
                        event={{
                            onChange: function () {
                                Custom_7(businessPresetManager, dataStore, uiStore, arguments);
                            }
                        }}
                    />
                    <BasicTextBoxWidgetComponent
                        id="6"
                        properties={{
                            className: "",
                            fullWidth: true,
                            placeholder: "What nees to be done?"
                        }}
                        widgetStyle={{
                        }}
                        event={{
                            onKeyPress: function () {
                                Custom_3(businessPresetManager, dataStore, uiStore, arguments);
                            }
                        }}
                        />
                </LayoutHorizontalFrameComponent>
                <RepeatableLayoutComponent
                    id="14"
                    properties={{
                        className: "",
                        data: dataStore.getArgumentData().get('filteredData')?.dataValue,
                        onRender: (data: any) => {
                            return (<Composite_1 content={data} />);
                        }
                    }}
                    widgetStyle={{
                    }}
                    event={{}}
                >
                </RepeatableLayoutComponent>
                <LayoutHorizontalFrameComponent
                    id="7"
                    properties={{
                        className: ""
                    }}
                    widgetStyle={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    event={{}}
                >
                    <BasicLabelWidgetComponent
                        id="8"
                        properties={{
                            className: "",
                            text: dataStore.getArgumentData().get('left')?.dataValue,
                        }}
                        widgetStyle={{
                            fontSize: "14px"
                        }}
                        event={{}}
                    />
                    <BasicLabelWidgetComponent
                        id="9"
                        properties={{
                            className: "",
                            text: " items left"
                        }}
                        widgetStyle={{
                            fontSize: "14px"
                        }}
                        event={{}}
                    />
                    <BasicToggleButtonGroupWidgetComponent
                        id="10"
                        properties={{
                            className: "",
                            value: dataStore.getArgumentData().get('state')?.dataValue,
                            exclusive: true
                        }}
                        widgetStyle={{
                            margin: "0px 20px",
                        }}
                        event={{
                            onGroupChange: function () {
                                Custom_1(businessPresetManager, dataStore, uiStore, arguments);
                            },
                        }}
                    >
                        {/* ToggleButtonGroup 하위에는 바로 ToggleButton이 render되어야함 */}
                        {BasicToggleButtonWidgetComponent({
                            id: "11",
                            properties:{
                                className: "",
                                value:"all",
                                text:"All"
                            },
                            widgetStyle:{
                            },
                            event:{}
                        })}
                        {BasicToggleButtonWidgetComponent({
                            id: "12",
                            properties:{
                                className: "",
                                value:"Active",
                                text:"Active"
                            },
                            widgetStyle:{
                            },
                            event:{}
                        })}
                        {BasicToggleButtonWidgetComponent({
                            id: "13",
                            properties:{
                                className: "",
                                value:"Done",
                                text:"Completed"
                            },
                            widgetStyle:{
                            },
                            event:{}
                        })}
                    </BasicToggleButtonGroupWidgetComponent>
                </LayoutHorizontalFrameComponent>
            </LayoutVerticalFrameComponent>
        </PageWidgetComponent>
    );
};

export default observer(Page_1);