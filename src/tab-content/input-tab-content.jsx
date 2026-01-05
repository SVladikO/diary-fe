import {
    Wrapper,
    MoodWrapper,
    GoodMood,
    BadMood,
    NeutralMood,
    Textarea,
    FirstRowInputs,
    InputInline,
    PrimaryButton
} from './input-tab-content.style'

const InputTabContent = () => {
    return (
        <Wrapper>
            <FirstRowInputs>
                <InputInline type="text" placeholder='10/03/2026'/>
                <InputInline type="text" placeholder='Location'/>
                <MoodWrapper>
                    <GoodMood/>
                    <BadMood/>
                    <NeutralMood/>
                </MoodWrapper>
                <InputInline type="text" placeholder='Key'/>
            </FirstRowInputs>
            <Textarea rows={5} placeholder='Diary'/>
            <Textarea rows={5} placeholder='GPT conclusion'/>
            <PrimaryButton>Write</PrimaryButton>
        </Wrapper>
    )
}

export default InputTabContent;