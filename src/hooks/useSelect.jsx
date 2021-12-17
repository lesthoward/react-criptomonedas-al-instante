import styled from '@emotion/styled';
import React, { useState } from 'react';

const Label = styled.label`
	color: #fff;
	display: block;
	font-size: 24px;
	margin: 15px 0;
`;

const Select = styled.select`
	width: 100%;
	padding: 14px;
	border-radius: 5px;
`;

const useSelect = (placeholder, options) => {
	const [state, setState] = useState('');

	const selectTag = () => (
		<>
			<Label>{placeholder}</Label>
			<Select name="currency" id="currency" onChange={(e) => setState(e.target.value)}>
				<option value="">-- Seleccione --</option>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</Select>
		</>
	);

	return {
		selectTag,
        state
	};
};

export default useSelect;
