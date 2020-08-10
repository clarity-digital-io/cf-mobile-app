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
