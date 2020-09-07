import { useContext } from 'react';
import { AppContext } from '../components/Context';
import { transform } from '../api/helpers';

export const useApps = () => {

	const {setErrors, globalRealm, auth, apps, setApps, groups, setGroups } = useContext(AppContext);

	const getApps = async () => {

		try {
			const response = await getAppsAPI(globalRealm, auth);
			setApps(response)
		} catch (error) {
			setApps([]);
			setErrors(error);
		}

	}

	const getGroups = async () => {

		try {
			const response = getGroupsLocal(globalRealm, auth);
			setGroups(response)
		} catch (error) {
			setErrors(error)
		}

	}

  return { apps, getApps, groups, getGroups };

} 

const getAppsAPI = async (realm, {url, access_token}) => {

	const response = await fetch(`${url}/services/apexrest/forms/v1/Apps`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		})
	});

	const data = await response.json();

	if(data[0] != null & data[0].errorCode != null) {
		throw data[0].message;
	}

	return data; 

}

const getGroupsLocal = (realm) => {
	const groups = realm.objects('ChecklistGroup');
	let transformedGroups = transform(groups);
	return transformedGroups;
}
