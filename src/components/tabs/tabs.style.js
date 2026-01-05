import styled from 'styled-components';

export const Wrapper = styled.div`
    font-size: 16px;
    display: flex;
`
export const Tab = styled.div`
    border: solid 1px black;
    padding: 2px 4px;
    cursor: pointer;
    background: ${p => p.isSelected ? 'blue' : 'white'};
    color: ${p => p.isSelected ? 'white' : 'black'};
`