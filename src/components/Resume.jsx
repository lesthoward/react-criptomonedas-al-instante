import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
    color: #fff;    
`

const Image = styled.img`
    width: 150px;
    @media screen and (min-width: 468px) {
        max-width: 100%;
    }

`


const TextTag = styled.p`
    font-size: 18px;
    font-family: 'arial', Tahoma, Geneva, Verdana, sans-serif;
    span {
        font-family: 'Bakbak One', 'Segoe UI';
    }
`

const PriceTag = styled.p`
    font-size: 30px;
    font-family: 'arial', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
        display: block;
        font-family: 'Bakbak One', 'Segoe UI'
    }

`

const TopRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 24px;
    place-items: center;
    @media screen and (min-width: 468px) {
        grid-template-columns: 120px 1fr;
        place-items: initial;
    }
`

const Resume = ({cryptoDetail}) => {
    if(Object.keys(cryptoDetail).length === 0) return null

    const {PRICE, HIGHDAY, LOWDAY,  CHANGE24HOUR, LASTUPDATE, IMAGEURL} = cryptoDetail;

    return (  
        <Container>
            <TopRow>
                <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt=""/>
                <PriceTag>Precio actual <span> {PRICE}</span></PriceTag>
            </TopRow>
            <TextTag>Precio más alto del día: <span> {HIGHDAY}</span></TextTag>
            <TextTag>Precio más bajo del día: <span> {LOWDAY}</span></TextTag>
            <TextTag>Variacion de las últimas 24 horas: <span> {CHANGE24HOUR}</span></TextTag>
            <TextTag>Última actualización: <span>{LASTUPDATE.toLowerCase() === 'just now' ? 'Justo ahora' : LASTUPDATE}</span></TextTag>
        </Container>
    );
}
 
export default Resume;