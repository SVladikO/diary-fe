import {useState} from "react";
import {TabType} from "./types.js";

import Tabs from "./components/tabs/tabs.jsx";

import InputTabContent from "./tab-content/input-tab-content";
import OutputTabContent from "./tab-content/output-tab-content";
import {Wrapper} from "./App.style";

function App() {
    const [selectedTab, setSelectedTab] = useState(TabType.INPUT)

    return (
        <Wrapper>
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            {selectedTab === TabType.INPUT && <InputTabContent/>}
            {selectedTab === TabType.OUTPUT && <OutputTabContent/>}
        </Wrapper>
    );
}

export default App;
