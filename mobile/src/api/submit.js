import { useState, useContext, useEffect } from 'react';
import { AppContext, FormContext } from '../components/Context';

export const useSubmit = (navigation) => {

	const { realm, setError } = useContext(AppContext);

	const { response, responseId, answers, images, records, allValidations, setErrorValidations, setLoading } = useContext(FormContext);

	const [startSubmit, setStartSubmit] = useState(false); 

	const handleProcess = (index) => {

		switch (index) {
			case 0:
				break;
			case 1:
				submit(); 
				break;
			case 2:
				break;
			default:
				break;
		}
	
	}

	const handleCancel = (index) => {

		switch (index) {
			case 0:
				break;
			case 1:
				navigation.reset({
					index: 0,
					routes: [{ name: 'Home' }],
				});
				break;
			case 2:
				break;
			default:
				navigation.goBack(); 
				break;
		}
	}

	const submit = () => {

		try {

			validate(answers, allValidations, setErrorValidations); 

			upsert(answers, response, realm);


			//create(realm, preparedAnswers, )
			//response prepare + pending
			//submit to realm
			//setLoading(false);

		} catch (error) {
			setError(error)
		}

	}

	return { handleProcess, handleCancel };

} 

const validate = (answers, allValidations, setErrorValidations) => {

	let newErrors = Array.from(allValidations.keys()).reduce((accum, questionId) => {

		if(!answers.has(questionId)) {
			accum = accum.concat([questionId])
		}

		return accum; 
	}, []);

	setErrorValidations(newErrors);

}

const upsert = (answers, response, realm) => {
	console.log('answers1', answers, response); 

	let prepAnswers = [...answers.keys()].map(questionId => {

		let answer = answers.get(questionId);
		console.log('answer', answer); 

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

	console.log('prepAnswers', prepAnswers); 

	try {
		realm.write(() => {

			prepAnswers.forEach(answer => {
				
				realm.create('Answer', answer, 'all');
		
			});
	
			response.Status = 'Submitted';
	
			//realm.create('Response', response, 'all');
	
		});
			
	} catch (error) {
		console.log('error', error);		
	}

}