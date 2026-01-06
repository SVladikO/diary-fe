import {Wrapper, Header, Text} from "./item-output.style";
import {getDateInFormat, getTimeInFormat} from "../date.utils";

const def = {
    time: 1767646652139,
    location: 'Irpin',
    mood: 'Good',
    text: 'Some text default',
    gpt_text: 'Some text default',
}
const ItemOutput = ({day = def}) => {
    return (
        <Wrapper>
            <Header>
                <div>
                    <div>{getDateInFormat(day.time)}</div>
                    <div>{getTimeInFormat(day.time)}</div>
                    <div>Day</div>
                    <div>{day.mood}</div>
                </div>
                <div>{day.location}</div>
            </Header>
            <Text>{day.text}</Text>
        </Wrapper>
    )
}

export default ItemOutput;