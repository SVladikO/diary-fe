import {PrimaryButton} from "../common.style";
import {Wrapper} from "./search.style"
import {useState} from "react";

const Search = ({setHistory}) => {

    const [secretKey, setSecretKey] = useState('jjVlad');

    const getDiary = () => {
        fetch('http://localhost:4000/get-diary', {
            method: 'POST',
            body: JSON.stringify({secretKey}),
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then((json) => setHistory(json))
            .catch((err) => console.log(err));
    }

    return (
        <Wrapper>
            <input value={secretKey} onChange={e => setSecretKey(e.value)} type='text' />
            <PrimaryButton onClick={getDiary}>Find</PrimaryButton>
        </Wrapper>
    )
}
export default Search;