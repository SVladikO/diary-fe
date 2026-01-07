import {Wrapper, Header, Text, GptText, GptTextButton} from "./item-output.style";
import {getDateInFormat, getTimeInFormat} from "../date.utils";
import {GoodMood, BadMood, NeutralMood} from "../components/mood/mood.style.js";
import {MoodType} from "../types";
import {useState} from "react";

const def = {
    time: 1767646652139,
    location: 'Irpin',
    mood: 'Good',
    text: 'Some text default',
    gpt_text: 'Some text default',
}
const ItemOutput = ({day = def}) => {
    const [showGPT, setShowGPT] = useState(false);
    return (
        <Wrapper>
            <Header>
                <div>
                    <div>{getDateInFormat(day.time)}</div>
                    <div>{getTimeInFormat(day.time)}</div>
                    <div>Day</div>
                    {day.mood === MoodType.GOOD && <GoodMood/>}
                    {day.mood === MoodType.BAD && <BadMood/>}
                    {day.mood === MoodType.NEUTRAL && <NeutralMood/>}
                </div>
                <div>{day.location || 'No location'}</div>
            </Header>
            <Text>{day.text || 'No text. Only mood mark'}</Text>
            {day.gpt_text && (
                <GptTextButton onClick={() => setShowGPT(!showGPT)}>
                    {showGPT ? 'Hide' : 'Show'} GPT text analyse
                </GptTextButton>
            )
            }
            {showGPT && <GptText>{day.gpt_text}</GptText>}
        </Wrapper>
    )
}

export default ItemOutput;