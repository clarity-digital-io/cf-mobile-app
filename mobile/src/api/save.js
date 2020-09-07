import { useState, useContext, useEffect } from 'react';
import { AppContext, FormContext } from '../components/Context';

export const useSave = (navigation) => {

	const { realm } = useContext(AppContext);

	const [startSave, setStartSave] = useState(false); 

	const { response, answers, images, records, setErrors } = useContext(FormContext);

	useEffect(() => {

		if(startSave) {
			save(answers, response, navigation, setErrors);
		}

	}, [startSave])

	const save = (answers, response, navigation, setErrors) => {

		let status = { success: false, errors: [], validations: [] };

		try {

			status = upsert(answers, response, realm, status);

			if(status.success == false) {
				throw "Error"; 
			}

		} catch (error) {
			status.errors = [error]	
		}

		setStartSave(false); 

		status.success ? 
			navigate(navigation, response) : 
			setErrors(errors => { return status }); 

	}

	return { setStartSave };

} 

const navigate = (navigation, response) => {

	navigation.navigate('Detail')

	navigation.navigate('InitResponse', { formId: response.Form, new: true })

}

const upsert = (answers, response, realm, status) => {

	let prepAnswers = [...answers.keys()].map(questionId => {

		let answer = answers.get(questionId);

		return {
			UUID: answer.uuid, 
			IsAttachment: false, 
			Name: '',
			Answer: answer.answer,
			Path: '',
			Base64: '',
			FileLocation: '',
			ContentDocument: '',
			ContentVersion: '',
			Date_Answer: '',
			Record: '',
			Question: answer.questionId,
			Response: response.UUID
		}

	});

	try {

		realm.write(() => {
			
			response.Status = 'In Progress';
	
			realm.create('Response', response, 'all');

			let answersList = response.Answers;

			prepAnswers.forEach(answer => {
				
				answersList.push(answer); 
		
			});

			status.success = true; 

		});
			
	} catch (error) {

		status.success = false; 
		status.errors = error; 

	}

	return status; 

}