import {Wrapper, Header, Text} from "./item-output.style";

const ItemOutput = () => {
    return (
        <Wrapper>
            <Header>
                <div>
                    <div>12/02/2024</div>
                    <div>10:20</div>
                    <div>Tue</div>
                    <div>GOOD</div>
                </div>
                <div>
                    <div className='City'>Irpin</div>
                </div>
            </Header>
            <Text>
                Согодні гарно відсвяткував ДН. Мен стільки то. Там тадам. То сьо пять шість 7 8. Та й таке. Согодні гар
                но відсвяткував ДН. Мен стільки то. Там тадам. То сьо пять шість 7 8. Та й таке
            </Text>
        </Wrapper>
    )
}

export default ItemOutput;