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

	const [recordGroupId] = useState(rgId); 

	return (
		<RecordGroupContext.Provider
			value={{
				recordGroupId,
				fields
			}}
		>
			{ children }
		</RecordGroupContext.Provider>
	)
}