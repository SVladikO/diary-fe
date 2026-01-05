import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 400px;
    border: 1px solid black;
    align-items: end;
    justify-content: end;
`;

export const FirstRowInputs = styled.div`
    display: flex;
    gap: 10px;
`;

export const InputInline = styled.input`
    display: block;
    width: 20%;
`;

export const MoodWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;
const MoodCircle = css`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;
export const GoodMood = styled.div`
    ${MoodCircle};    
    background: green;
`;
export const BadMood = styled.div`
    ${MoodCircle}; 
    background: red;
`;
export const NeutralMood = styled.div`
    background: darkgrey;
    ${MoodCircle};
`;
export const Textarea = styled.textarea`
    display: block;
    width: 100%;
`;
export const PrimaryButton = styled.button`
    display: block;
    background: blue;
    height: 30px;
    width: 60px;
    color: white;
`;