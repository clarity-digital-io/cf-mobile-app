import { useContext } from 'react';
import { AppContext } from '../components/Context';
import { transform } from '../api/helpers';

export const useApps = () => {

	const {setError, globalRealm, auth, apps, setApps, groups, setGroups } = useContext(AppContext);

	const getApps = async () => {

		try {
			const response = await getAppsAPI(globalRealm, auth);
			setApps(response)
		} catch (error) {
			setError(error)
		}

	}

	const getGroups = async () => {

		try {
			const response = getGroupsLocal(globalRealm, auth);
			setGroups(response)
		} catch (error) {
			setError(error)
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

	const apps = await response.json();

	return apps; 

}

const getGroupsLocal = (realm) => {
	const groups = realm.objects('ChecklistGroup');
	let transformedGroups = transform(groups);
	return transformedGroups;
}
