import { useContext } from 'react';
import { AppContext } from '../components/Context';
import { transform } from '../api/helpers';

export const useForms = (routeName) => {

	const {setError, globalRealm, auth, forms, setForms, setActiveForm } = useContext(AppContext);

	const getForms = async () => {

		try {
			const response = await getFormsLocal(globalRealm, auth);
			setForms(response)
		} catch (error) {
			setError(error)
		}

	}

  return { forms, getForms, setActiveForm };

} 

const getFormsLocal = async(globalRealm) => {
	const forms = globalRealm.objects('Form');
	let transformedForms = transform(forms);
	return transformedForms; 
}

const getFormsAPI = async (realm, {url, access_token}) => {

	const response = await fetch(`${url}/services/apexrest/forms/Forms`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		})
	});

	const forms = await response.json();

	return forms; 

}
