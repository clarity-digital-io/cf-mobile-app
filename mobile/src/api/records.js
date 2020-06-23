import { useContext, useState } from 'react';
import { AppContext, FormContext } from '../components/Context';
import { transform } from './helpers';

export const useRecords = (question) => {

	const [records, setRecords] = useState([]);

	const { setError, realm } = useContext(AppContext);

	const {} = useContext(FormContext); 

	const searchRecords = (type, search) => {

		try {
			const records = getRecordsLocal(realm, type, search);
			setRecords(records)
		} catch (error) {
			setError(error)
		}

	}

	return { searchRecords, records };

} 

const getRecordsLocal = (realm, type, search) => {
	const records = realm.objects('sObject').filtered(`Type = "${type}" AND Name BEGINSWITH "${search}"`);
	let transformedRecords = transform(records);
	return transformedRecords;
}