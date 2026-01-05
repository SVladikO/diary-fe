import {TabType} from "../../types";
import {Wrapper, Tab} from "./tabs.style.js";

const Tabs = ({
                  selectedTab,
                  setSelectedTab
              }) => {
    return (
        <Wrapper>
            <Tab onClick={() => setSelectedTab(TabType.INPUT)} isSelected={selectedTab === TabType.INPUT}>Input</Tab>
            <Tab onClick={() => setSelectedTab(TabType.OUTPUT)} isSelected={selectedTab === TabType.OUTPUT}>Output</Tab>
        </Wrapper>
    )
}

export default Tabs;