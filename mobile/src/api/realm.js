import Realm from 'realm';
import { ResponseSchema, FormSchema, QuestionSchema, AnswerSchema, QuestionOptionSchema, QuestionCriteriaSchema, sObjectSchema, FormConnectionSchema, FormConnectionFieldSchema } from '../schema';

const SERVER_URL = 'https://forms-dev.us1a.cloud.realm.io';
const REALM_URL = 'realms://forms-dev.us1a.cloud.realm.io';

export const registerWithRealm = async ({ organization_id }, { idToken }) => {
	console.log('idToken', idToken); 
	try {
		const user = await Realm.Sync.User.login(SERVER_URL, 	Realm.Sync.Credentials.custom('jwt', idToken));
		const realm = await onAuthRealm(user); 
		const globalRealm = await onGlobalAuthRealm(user, organization_id); 
		return { realm, globalRealm }; 
	} catch (error) {
		console.log('registerWithRealm err', error);
	}	
}

const onAuthRealm = async (user) => {

	try {

		const config = { 	sync: { user: user, url: `${REALM_URL}/~/user`, fullSynchronization: true, validate_ssl: false },  schema: [ResponseSchema, AnswerSchema, sObjectSchema], deleteRealmIfMigrationNeeded: true };

		return Realm.open(config)
			.progress((transferred, transferable) => {})
			.then(realm => { return realm; })
			.catch((e) => console.log('trying to open realm user', e));
			
	} catch (error) {
		console.log('error', error);
	}

}

const onGlobalAuthRealm = async (user, organization_id) => {

	try {

		const config = { 	sync: { user: user, url: `${REALM_URL}/${organization_id}/forms`, fullSynchronization: true, validate_ssl: false },  schema: [FormSchema, QuestionSchema, QuestionOptionSchema, QuestionCriteriaSchema, FormConnectionSchema, FormConnectionFieldSchema] };

		return Realm.open(config)
			.progress((transferred, transferable) => {})
			.then(realm => { return realm; })
			.catch((e) => console.log('trying to open', e));
			
	} catch (error) {
		console.log('error', error);
	}

}
