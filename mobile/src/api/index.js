/***
 * Used to connect first to Salesforce and in future iterations to Realm Cloud Instance
 */

import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../components/Context';

//useFormsAPI Async - used for forms lists
export const useFormsAPI = (request, routeName) => {
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

	const response = await fetch(`${url}/services/apexrest/forms/MobileFormController`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		})
	});

	const forms = await response.json();

	const transformed = transformFormsList(forms);

	return transformed; 

}

const transformFormsList = (forms) => {

	return Object.entries(forms).reduce((accum, form) => {

		console.log('accum', accum, form); 
		let formId = form[0];
		let formValues = form[1];
		let transform = { id: formId, form: formValues['Form'][0], questions: formValues['Questions'] };	
		accum = accum.concat([transform]);
		return accum; 

	}, []); 

}

 //Get Form (Detail) and Save to state

 //Get Responses and Save to state

 //Get Response and Save to state

 //Create Response and Save to state

 //Get Settings and Save to state