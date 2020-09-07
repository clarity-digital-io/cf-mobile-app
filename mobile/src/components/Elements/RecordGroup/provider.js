/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';
import { RecordGroupContext, FormContext } from '../../Context';

export const RecordGroupProvider = ({ children, rgId }) => {

	const { recordGroupQuestions } = useContext(FormContext);

	const [fields] = useState(recordGroupQuestions.has(rgId) ? recordGroupQuestions.get(rgId) : []); 

	const [index, setIndex] = useState(0); 

	const [headers] = useState(getHeaders(fields)); 

	const [answers, setAnswers] = useState(new Map()); 

	const [table, setTable] = useState(new Map()); 

	return (
		<RecordGroupContext.Provider
			value={{
				index, 
				setIndex,
				rgId,
				fields,
				headers,
				answers,
				setAnswers,
				table, 
				setTable
			}}
		>
			{ children }
		</RecordGroupContext.Provider>
	)
}

const getHeaders = (fields) => {

	return fields.map(field => field.Title);

}