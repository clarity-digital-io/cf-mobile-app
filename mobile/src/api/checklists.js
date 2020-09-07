import { useState, useContext } from 'react';
import { AppContext } from '../components/Context';
import { transform } from './helpers';
import uuid from 'react-native-uuid';

export const useChecklist = (sObject, recordId) => {

	const { auth, setErrors, realm, globalRealm } = useContext(AppContext);

	const [checkListResponses, setChecklistResponses] = useState([]);

	const [checklists, setChecklists] = useState([]);

	const [loading, setLoading] = useState(false); 

	const create = (checklistGroupId) => {

		setLoading(true); 

		setTimeout(function(){

			const forms = getChecklistGroupForms(globalRealm, checklistGroupId);

			let responses = []; 
	
			try {
				realm.write(() => {
	
					let checklistId =  uuid.v1(); 
	
					let checklist = realm.create('Checklist', {
						Id: checklistId,
						ChecklistGroup: checklistGroupId,
						sObject: sObject,
						RecordId: recordId,
						Status: 'New'
					});
	
					forms.forEach(form => {
	
						let responseId =  uuid.v1(); 
	
						let response = realm.create('Response', {
							UUID: responseId, 
							Id: responseId,
							Name: `Response - ${responseId}`,
							Completion: false,
							Status: 'New', 
							Form: form.Id,
							OwnerId: auth.user_id.split('|')[1],
							Checklist: checklist.Id
						});
	
						responses.push(response); 
	
					});
	
				});
	
				setChecklistResponses(responses);
	
			} catch (error) {
				setErrors(error)
			}

			setLoading(false); 

		}, 1000);
		
	}

	const getChecklists = () => {

		try {
			const localChecklists = getChecklistsLocal(realm, sObject, recordId);
			setChecklists(localChecklists)
		} catch (error) {
			setErrors(error)
		}

	}

  return { loading, checkListResponses, getChecklists, checklists, create };

} 

const getChecklistsLocal = (realm, sObject, recordId) => {
	const checklists = realm.objects('Checklist').filtered('RecordId == $0', recordId);
	let transformedChecklists = transform(checklists);
	return transformedChecklists;
}

const getChecklistGroupForms = (realm, checklistGroupId) => {
	const forms = realm.objects('Form').filtered('ChecklistGroup == $0', checklistGroupId);
	let transformedForms = transform(forms);
	return transformedForms;
}
