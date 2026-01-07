import styled, {css} from "styled-components";

const MoodCircle = css`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    ${p => p.isSelected && 'border: solid 3px black'};
    box-sizing: border-box;
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
