import { useContext } from 'react';
import { AppContext } from '../components/Context';

export const useApps = (routeName) => {

	const {setError, globalRealm, auth, apps, setApps } = useContext(AppContext);

	const getApps = async () => {

		try {
			const response = await getAppsAPI(globalRealm, auth);
			setApps(response)
		} catch (error) {
			setError(error)
		}

	}

  return { apps, getApps };

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