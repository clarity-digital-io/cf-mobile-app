/***
 * Used to connect first to Salesforce and in future iterations to Realm Cloud Instance
 */

import { useState, useEffect, useContext } from 'react';
import { AppContext, FormContext } from '../components/Context';

//useFormsAPI Async - used to get forms lists
export const useFormsAPI = (routeName) => {
	const [error, setError] = useState(null);
	const [navState, setNavState] = useState(routeName);

	const { auth, forms, setForms, loading, setLoading } = useContext(AppContext);

	const execute = async () => {

		try {
			setLoading(true);
			const response = await getFormsAPI(auth);
			setForms(response)
			setLoading(false);
		} catch (error) {
			setError(error)
		}

	}

	useEffect(() => {
    execute()
  }, [navState]);

  return { loading, error, forms };

} 

//Get Forms and Save to state
export const getFormsAPI = async ({url, access_token}) => {

	const response = await fetch(`${url}/services/apexrest/forms/Forms`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		})
	});

	const forms = await response.json();
	console.log('form111s', forms); 

	//const transformed = transformFormsList(forms);
	return forms; 

}

const transformFormsList = (forms) => {

	return Object.entries(forms).reduce((accum, form) => {

		let formId = form[0];
		let formValues = form[1];
		let transform = { id: formId, form: formValues['Form'][0], questions: formValues['Questions'] };	
		accum = accum.concat([transform]);
		return accum; 

	}, []); 

}

//Get Form (Detail) and Save to state

//Get Responses and Save to state
export const useResponsesAPI = (routeName) => {
	const [error, setError] = useState(null);
	const [navState, setNavState] = useState(routeName);

	const { auth, responses, setResponses, loading, setLoading } = useContext(AppContext);

	const execute = async () => {

		try {
			setLoading(true);
			const response = await getResponsesAPI(auth);
			setResponses(response)
			setLoading(false);
		} catch (error) {
			setError(error)
		}

	}

	useEffect(() => {
    execute()
  }, [navState]);

  return { loading, error, responses };

} 

export const getResponsesAPI = async ({url, access_token}) => {

	const response = await fetch(`${url}/services/apexrest/forms/Responses`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		})
	});

	const responses = await response.json();
	console.log('responses', responses); 

	//const transformed = transformFormsList(forms);
	return responses; 

}

//Create Response and Save to state
export const useSubmitAPI = () => {

	const [error, setError] = useState(null);

	const { auth } = useContext(AppContext);

	const { form, answers, setLoading } = useContext(FormContext);

	const execute = async () => {

		try {
			setLoading(true);
			const response = await postResponseAPI(auth, answers);
			setLoading(false);
		} catch (error) {
			setError(error)
		}

	}

	return { execute };

} 

// Save Response API
export const postResponseAPI = async ({url, access_token}, answers) => {

	let cleanAnswers = prepareAnswers(answers);

	const response = await fetch(`${url}/services/apexrest/forms/MobileResponseController`, { 
		method: 'post', 
		body: JSON.stringify(cleanAnswers),
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		}), 
	});

	const formResponse = await response.json();
	console.log('formResponse', formResponse); 
	//const transformed = transformFormsList(forms);

	return formResponse; 

}


const prepareAnswers = (answers) => {

	return Array.from(answers.values());

}

//Get Settings and Save to state