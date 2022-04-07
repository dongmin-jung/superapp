import React from "react";
import { observer } from "mobx-react-lite";
import BasicCheckBoxWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicCheckBoxWidgetComponent";
import BasicIconWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicIconWidgetComponent";
import BasicLabelWidgetComponent from "component/widget-editor/widget/basic-html-ui/BasicLabelWidgetComponent";
import LayoutHorizontalFrameComponent from "component/widget-editor/widget/layout/LayoutHorizontalFrameComponent";
import useStore from "hook/util/useStore";
import { Custom_4 } from "store/logic/Custom_4";
import { Custom_5 } from "store/logic/Custom_5";

const Composite_1: React.FC<{ content: { id: number, status: string, item: String } }> = ({ content }) => {
    const { dataStore, uiStore, businessPresetManager } = useStore();
    return (
        <LayoutHorizontalFrameComponent
            id="14"
            properties={{
                className: ""
            }}
            widgetStyle={{
                alignItems: "center",
            }}
            event={{}}
        >
            <BasicCheckBoxWidgetComponent
                id="15"
                properties={{
                    className: "",
                    checked: content.status === "Done",
                    value: content.id
                }}
                widgetStyle={{
                }}
                event={{
                    onChange: function () {
                        Custom_4(businessPresetManager, dataStore, uiStore, arguments);
                    }
                }}
            />
            <BasicLabelWidgetComponent
                id="16"
                properties={{
                    className: "",
                    text: content.item
                }}
                widgetStyle={{
                    fontSize: "16px",
                    flexGrow: "1",
                    textAlign: "left"
                }}
                event={{}}
            />
            <BasicIconWidgetComponent
                id="17"
                properties={{
                    className: content.id.toString(),
                    src: "icon/ic_gallery_TrashFilled.svg"
                }}
                widgetStyle={{
                }}
                event={{
                    onClick: function () {
                        Custom_5(businessPresetManager, dataStore, uiStore, arguments);
                    }
                }}
            />
        </LayoutHorizontalFrameComponent>
    );
};

export default observer(Composite_1);