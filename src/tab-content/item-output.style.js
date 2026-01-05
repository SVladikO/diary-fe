import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
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
export const Text = styled.div``;
