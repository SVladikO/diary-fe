import {Wrapper} from './output-tab-content.style';

import Search from "../components/search/search";
import ItemOutput from './item-output';
import {useState} from "react";

const OutputTabContent = () => {
    const [history, setHistory] = useState([]);

    return (
        <Wrapper>
            <Search setHistory={setHistory}/>
            {history.map(day => <ItemOutput day={day} />)}
            <ItemOutput/>
        </Wrapper>
    )
}


export default OutputTabContent;