export const calculateLogic = ( question, answers, controlledQuestions ) => {

	if(!controlledQuestions.has(question.Id)) {
		return true; 
	}

	if(answers.size == 0){
		return false; 
	}

	let logicType = question.forms__Logic; 

	let criteria = controlledQuestions.get(question.Id);

	if(logicType == 'OR') {
		
		return criteria.reduce((accum, crit) => {

				let check = answers.has(crit.forms__Field) ? answerCheck(answers.get(crit.forms__Field), crit) : false;

				return accum || check;

		}, false); 

	}

	if(logicType == 'AND') {

		return criteria.reduce((accum, crit) => {

				let check = answerCheck(answers.get(crit.forms__Field), crit);

				return accum && check;

		}, true); 

	}

}
//currently only string checks
const answerCheck = (field, criteria) => {

	let criteriaValue = convertType(criteria);

	switch (criteria.forms__Operator) {
			case 'Is Not Null':
					return field != undefined && field.forms__Answer != null && field.forms__Answer != '' ? true : false
					break;
			case 'Equals':
					return field != undefined && field.forms__Answer == criteriaValue ? true : false
					break;
			case 'Not Equal':
					return field == undefined || field.forms__Answer != criteriaValue ? true : false
					break;
			case 'Is Greater than or equal to':
					return field != undefined && field.forms__Answer >= criteriaValue ? true : false
					break;
			case 'Is Less than or equal to':
					return field == undefined || field.forms__Answer <= criteriaValue ? true : false
					break;
			default:
					break;
	}

}

const convertType = ({ forms__Value, forms__Type}) => {

	switch (forms__Type) {
			case 'Boolean':
					return forms__Value.toLowerCase() == 'true';
					break;
			case 'Number':
							return parseInt(forms__Value);
							break;
			default:
					return forms__Value;
					break;
	}

}