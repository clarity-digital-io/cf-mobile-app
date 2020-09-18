import { useState, useContext, useEffect } from 'react';
import { AppContext, FormContext } from '../components/Context';
import uuid from 'react-native-uuid';

export const useSubmit = (navigation) => {

	const { realm } = useContext(AppContext);

	const [startSubmit, setStartSubmit] = useState(false); 

	const { response, answers, images, records, allValidations, setErrors } = useContext(FormContext);

	useEffect(() => {

		if(startSubmit) {
			submit(allValidations, answers, response, navigation, setErrors);
		}

	}, [startSubmit])

	const submit = (allValidations, answers, response, navigation, setErrors) => {

		let status = { success: false, errors: [], validations: [] };

		try {

			status = validate(answers, allValidations, status); 

			if(status.success == false) {
				throw "Error"; 
			}

			status = upsert(answers, images, response, realm, status);
			
			if(status.success == false) {
				throw "Error"; 
			}

		} catch (error) {
			status.errors = [error]	
		}

		setStartSubmit(false); 

		status.success ? 
			navigate(navigation, response) : 
			setErrors(errors => { return status }); 

	}

	return { setStartSubmit };

} 

const navigate = (navigation, response) => {
	navigation.navigate('Detail')

}

const validate = (answers, allValidations, status) => {

	let newErrors = Array.from(allValidations.keys()).reduce((accum, questionId) => {

		if(!answers.has(questionId)) {
			accum = accum.concat([questionId])
		}

		return accum; 

	}, []);

	if(newErrors.length == 0) {
		status.success = true; 
	} else {
		status.success = false;
		status.validations = newErrors; 
	}

	return status; 

}

const upsert = (answers, images, response, realm, status) => {
	console.log('prepAnswers');
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
			Question: questionId,
			Response: response.UUID
		}

	});
	console.log('prepAnswers1', [...images.keys()]);

	let prepImages = [...images.keys()].reduce((accum, questionId) => {
		console.log('base64Images', images.get(questionId)); 

		let base64Images = images.get(questionId);

		base64Images.forEach((image, index) => {
			console.log('image 64', image, index)
			const newUUID = uuid.v1();

			accum =	accum.concat([
				{
					UUID: newUUID, 
					IsAttachment: false, 
					Name: '',
					Answer: `Image ${questionId} ${index}`,
					Path: '',
					Base64: image,
					FileLocation: '',
					ContentDocument: '',
					ContentVersion: '',
					Date_Answer: '',
					Record: '',
					Question: questionId,
					Response: response.UUID
				}
			]); 

		})
		console.log('accum', accum); 
		return accum;

	}, []);

	console.log('prepImages', prepImages); 

	try {

		realm.write(() => {
			
			response.Status = 'Submitted';
	
			realm.create('Response', response, 'all');

			let answersList = response.Answers;

			prepAnswers.forEach(answer => {
				
				answersList.push(answer); 
		
			});

			prepImages.forEach(answer => {
				
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