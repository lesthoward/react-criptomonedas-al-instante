import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useSelect from '../hooks/useSelect';
import currencies from './data/currencies';
import Error from './Error';

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	border-radius: 5px;
	font-size: 20px;
	cursor: pointer;
	transition: background-color 0.3s ease;
    margin-top: 20px;
	&:hover {
		background-color: #7a7dfe;
	}
`;

const Form = ({setFormValues}) => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

	const { selectTag: selectCurrency, state: currency } = useSelect('Elige una moneda', currencies); 
	const { selectTag: selectCrypto, state: crypto } = useSelect('Elige una criptomoneda', cryptos); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (crypto === '' || currency === '') return setError(true);
            
        setError(false);
        setFormValues({
            crypto,
            currency
        })
    }

    useEffect(() => {

        const cryptoLetter = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const res = await fetch(url);
            const data = await res.json();

            const mappedData = data.Data.map(crypto =>  ({
                id: crypto.CoinInfo.Name,
                name: crypto.CoinInfo.FullName
                
            }));

            setCryptos(mappedData);
        }
        
        cryptoLetter();
    }, [])
	return (
		<form onSubmit={handleSubmit}>
            {error && <Error setError={setError}>Complete los campos para continuar</Error>}
			{selectCurrency()}
            {selectCrypto()}
			<InputSubmit type="submit" value="Cotizar" />
		</form>
	);
};

export default Form;
