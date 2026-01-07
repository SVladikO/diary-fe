import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    border-bottom: 1px solid grey;
    padding: 10px 0;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: grey;

    & > div {
        display: flex;
        flex-direction: row;
        gap: 6px;
    }
`;
export const Text = styled.div`
    white-space: pre-wrap;
`;

const GPT = css`
    border: solid 1px green;
    background: greenyellow;
    padding: 10px;
    border-radius: 5px;

`

export const GptTextButton = styled.div`
    ${GPT};
    cursor: pointer;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* Internet Explorer/Edge */
    user-select: none;         /* Stand
`;

export const GptText = styled.div`
    ${GPT};
    white-space: pre-wrap;

`;
