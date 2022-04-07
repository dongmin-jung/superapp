import React from "react";
import Page_1 from "component/page/Page_1";

const pageComponentMap = new Map<number, JSX.Element>();
pageComponentMap.set(1, <Page_1 />);
const mainPageID = 1;

export { mainPageID };

export default pageComponentMap;