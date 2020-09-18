import { useContext } from 'react';
import { AppContext } from '../components/Context';
import { transform } from './helpers';

export const useProfile = () => {

	const { setError, setProfile, profile, realm, auth } = useContext(AppContext);

	const getProfile = () => {

		try {
			const profiles = getProfileAPI(realm);
			setProfile(profiles[0])
		} catch (error) {
			setError(error)
		}

	}

	const sync = async () => {

		try {
			
			//set profile in realm to in progress
			const response = await startSync(auth);

			if(response.success) {

				updateProfile(realm, 'In Progress');

			}

		} catch (error) {

			updateProfile(realm, 'Error');

			setError(error)
		}

	}

	return { sync, getProfile, profile };

}  

const updateProfile = (realm, status) => {
	
	let profile = getProfileAPI(realm); 

	realm.write(() => {

		profile[0].SyncStatus = status; 

		realm.create('Profile', profile, 'all');

	})

}

const getProfileAPI = (realm) => {
	const profile = realm.objects('Profile');
	let transformedProfile = transform(profile);
	return transformedProfile;
}

const startSync = async ({url, access_token, user_id}) => {
	//direct call to salesforce should only be called for users with salesforce editions above essentials
	/**
	 * 1. Salesforce Enterprise
	 * 2. Salesforce Essentials
	 * 3. Salesforce Clarity Forms Mobile External Authentication
	 */
	const pe = await fetch(`${url}/services/apexrest/forms/v1/Records/${user_id.split('|')[1]}`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		})
	});

	const data = await pe.json();
	console.log('data', data); 
	if(data[0] != null & data[0].errorCode != null) {
		throw data[0].message;
	}

	return data; 


}