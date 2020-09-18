import { useState, useContext } from 'react';
import { AppContext } from '../components/Context';
import { transform } from '../api/helpers';

export const useResponses = () => {

	const { auth, setErrors, realm, responses, setResponses, loading, setLoading } = useContext(AppContext);

	const getResponses = () => {

		try {
			const response = getResponsesLocal(realm);
			setResponses(response)
		} catch (error) {
			setErrors(error)
		}

	}

	const filtered = (query) => {
			
		try {
			const response = getResponsesFilter(realm, query);
			setResponses(response)
		} catch (error) {
			setErrors(error)
		}

	}

	const findByUUID = (query) => {

		const response = getResponsesFilter(realm, query);

		return response[0];

	}

	const create = (formId, responseId, formName) => {

		try {
			
			let newResponse = null; 

			realm.write(() => {
				newResponse = realm.create('Response', {
					UUID: responseId, 
					Id: responseId,
					Name: `Response - ${formName}`,
					Completion: false,
					Status: 'New', 
					Form: formId,
					OwnerId: auth.user_id.split('|')[1]
				}, 'all');
			});
			return newResponse; 
		
		} catch (error) {
			setErrors(error)
		}
	}

  return { loading, responses, getResponses, filtered, findByUUID, create };

} 

const getResponsesLocal = (realm) => {
	const responses = realm.objects('Response');
	let transformedResponses = transform(responses);
	return transformedResponses;
}

const getResponsesFilter = (realm, filter) => {
	const responses = realm.objects('Response').filtered(filter);
	let transformedResponses = transform(responses); 

	return transformedResponses;
}
