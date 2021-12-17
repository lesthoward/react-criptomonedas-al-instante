import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import CryptoImage from './img/criptomonedas.png';
import Resume from './components/Resume';
import Loader from './components/Loader/Loader';

const Container = styled.div`
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto;
    display: block;
`;

const Heading = styled.h1`
	color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;
    text-transform: capitalize;
    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
        margin: 10px auto;
        border-radius: 50px;
    }
`;

const App = () => {
    const [formValues, setFormValues] = useState({})
    const [cryptoDetail, setCryptoDetail] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const {crypto, currency} = formValues;
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
            const res = await fetch(url);
            const data = await res.json();
            setCryptoDetail(data.DISPLAY[crypto][currency]);
            setLoading(false)
        }

        if(Object.keys(formValues).length) {
            getData()
        }
    
    }, [formValues])
	return (
		<Container>
			<Image src={CryptoImage} alt="Imagen criptomonedas"></Image>

			<div>
				<Heading>Cotice criptomonedas al instante</Heading>
				<Form setFormValues={setFormValues} setLoading={setLoading}/>

                {loading ? <Loader/> : <Resume cryptoDetail={cryptoDetail}/>}
			</div>
		</Container>
	);
};

export default App;
