import {useState} from "react";
import {
    Wrapper,
    MoodWrapper,
    GoodMood,
    BadMood,
    NeutralMood,
    Textarea,
    FirstRowInputs,
    InputInline, SuccessWrapper,
} from './input-tab-content.style'
import {MoodType} from '../types.js';
import {PrimaryButton} from '../components/common.style.js';
import {fixText} from "../text.utils";

const InputTabContent = () => {
    const [wasSaved, setWasSaved] = useState(false);

    const [secretKey, setSecretKey] = useState('jjVlad');
    const [time, setTime] = useState(undefined);
    const [location, setLocation] = useState('');
    const [mood, setMood] = useState(MoodType.NEUTRAL);
    const [text, setText] = useState('');
    const [gpt_text, setGptText] = useState('');

    const writeToDiary = () => {
        fetch('http://localhost:4000/diary', {
            method: 'POST',
            body: JSON.stringify({
                secretKey: fixText(secretKey),
                time: (time === undefined ? new Date() : new Date(time)).getTime(),
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
                console.log(json)

                setTime(undefined)
                setLocation('')
                setMood(MoodType.NEUTRAL);
                setText('')
                setGptText('')
                setWasSaved(true);
                setTimeout(() => setWasSaved(false), 2000);
            })
            .catch((err) => console.log(err));
    }
    return (
        <Wrapper>
            <FirstRowInputs>
                <InputInline type="text" value={time} onChange={e => setTime(e.target.value)} placeholder='10/3/2026'/>
                <InputInline type="text" value={location} onChange={e => setLocation(fixText(e.target.value))}
                             placeholder='Location'/>
                <MoodWrapper>
                    <GoodMood onClick={() => setMood(MoodType.GOOD)}/>
                    <BadMood onClick={() => setMood(MoodType.BAD)}/>
                    <NeutralMood onClick={() => setMood(MoodType.NEUTRAL)}/>
                </MoodWrapper>
                <InputInline type="text" value={secretKey} onChange={e => setSecretKey(e.target.value)}
                             placeholder='Secret key'/>
            </FirstRowInputs>
            <Textarea rows={5} value={text} onChange={e => setText(e.target.value)} placeholder='Diary'/>
            <Textarea rows={5} value={gpt_text} onChange={e => setGptText(e.target.value)}
                      placeholder='GPT conclusion'/>
            <PrimaryButton onClick={writeToDiary}>Write</PrimaryButton>
            {wasSaved && <SuccessWrapper>Success !!!</SuccessWrapper>}
        </Wrapper>
    )
}

export default InputTabContent;