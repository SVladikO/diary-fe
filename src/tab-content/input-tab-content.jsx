import {useState} from "react";
import {
    GoodMood,
    BadMood,
    NeutralMood,
} from "../components/mood/mood.style.js";

import {
    Wrapper,
    MoodWrapper,
    Textarea,
    FirstRowInputs,
    InputInline, SuccessWrapper,
} from './input-tab-content.style'
import {MoodType} from '../types.js';
import {PrimaryButton} from '../components/common.style.js';
import {fixText} from "../text.utils";
import {createDateFromDDMMYYYY} from "../date.utils";

const InputTabContent = () => {
    const [responseMessage, setResponseMessage] = useState(false);

    const [secretKey, setSecretKey] = useState('jjVlad');
    const [time, setTime] = useState(undefined);
    const [location, setLocation] = useState('');
    const [mood, setMood] = useState(MoodType.NEUTRAL);
    const [text, setText] = useState('');
    const [gpt_text, setGptText] = useState('');

    const writeToDiary = () => {
        const timeProcessed = (time === undefined || !time.length  ? new Date() : new Date(createDateFromDDMMYYYY(time))).getTime()
        fetch('http://localhost:4000/diary', {
            method: 'POST',
            body: JSON.stringify({
                secretKey: fixText(secretKey),
                time: timeProcessed,
                location: fixText(location),
                mood: fixText(mood),
                text: fixText(text),
                gpt_text: fixText(gpt_text),
            }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((json) => {
                console.log(111111, json)
                setResponseMessage('Error: ' + json.message);

                if (json.affectedRows) {
                    // setTime('')
                    // setLocation('')
                    setMood(MoodType.NEUTRAL);
                    setText('')
                    setGptText('')
                    setResponseMessage('Saved successfully !');
                }
                setTimeout(() => setResponseMessage(''), 3000);
            })
            .catch((err) => console.log(err));
    }
    return (
        <Wrapper>
            <FirstRowInputs>
                <InputInline type="text" value={time} onChange={e => setTime(e.target.value)} placeholder='DD.MM.YYYY'/>
                <InputInline type="text" value={location} onChange={e => setLocation(fixText(e.target.value))}
                             placeholder='Location'/>
                <MoodWrapper>
                    <GoodMood onClick={() => setMood(MoodType.GOOD)} isSelected={mood === MoodType.GOOD}/>
                    <BadMood onClick={() => setMood(MoodType.BAD)} isSelected={mood === MoodType.BAD}/>
                    <NeutralMood onClick={() => setMood(MoodType.NEUTRAL)} isSelected={mood === MoodType.NEUTRAL}/>
                </MoodWrapper>
                <InputInline type="text" value={secretKey} onChange={e => setSecretKey(e.target.value)}
                             placeholder='Secret key'/>
            </FirstRowInputs>
            <Textarea rows={5} value={text} onChange={e => setText(e.target.value)} placeholder='Diary'/>
            <Textarea rows={5} value={gpt_text} onChange={e => setGptText(e.target.value)}
                      placeholder='GPT conclusion'/>
            <PrimaryButton onClick={writeToDiary}>Write</PrimaryButton>
            {responseMessage && <SuccessWrapper>{responseMessage}</SuccessWrapper>}
        </Wrapper>
    )
}

export default InputTabContent;