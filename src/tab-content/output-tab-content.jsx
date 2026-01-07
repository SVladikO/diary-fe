import {Wrapper} from './output-tab-content.style';


import Search from "../components/search/search";
import ItemOutput from './item-output';
import {useState} from "react";

const OutputTabContent = () => {
    const [history, setHistory] = useState([]);

    return (
        <Wrapper>
            <Search setHistory={setHistory}/>
            {!!history.length ?
                history
                    .sort((a, b) => b.time - a.time)
                    .map(day => <ItemOutput day={day}/>)
            : 'Try to search your diary by secret key.'
            }
            {/*<ItemOutput/>*/}
        </Wrapper>
    )
}


export default OutputTabContent;