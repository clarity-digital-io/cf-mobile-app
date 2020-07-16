import { useContext, useEffect } from 'react';
import { AppContext } from '../components/Context';

export const useSync = () => {

	const { auth, realm, profile, setError } = useContext(AppContext);

	const sync = async (query) => {

		try {
			//set profile in realm to in progress
			console.log('tst')
			const response = await startSync(auth, query);

			if(response.success) {
				console.log('update realm profile to requested', response.success);
			}

		} catch (error) {
			console.log(error);
			setError(error)
		}

	}

  return { sync, profile };

} 

const startSync = async ({url, access_token, user_id}, query) => {

	//direct call to salesforce should only be called for users with salesforce editions above essentials
	/**
	 * 1. Salesforce Enterprise
	 * 2. Salesforce Essentials
	 * 3. Salesforce Clarity Forms Mobile External Authentication
	 */
	console.log('url', url, access_token, user_id, query);
	const pe = await fetch(`${url}/services/apexrest/forms/v1/Records/${user_id.split('|')[1]}`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		})
	});

	const response = await pe.json();
	console.log('response', response);
	return response; 

}