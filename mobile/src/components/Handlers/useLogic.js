export const calculateLogic = ( question, answers, controlledQuestions ) => {

	if(!controlledQuestions.has(question.Id)) {
		return true; 
	}

	if(answers.size == 0){
		return false; 
	}

	let logicType = question.forms__Logic__c; 

	let criteria = controlledQuestions.get(question.Id);

	if(logicType == 'OR') {
		
		return criteria.reduce((accum, crit) => {

				let check = answers.has(crit.forms__Field__c) ? answerCheck(answers.get(crit.forms__Field__c), crit) : false;

				return accum || check;

		}, false); 

	}

	if(logicType == 'AND') {

		return criteria.reduce((accum, crit) => {

				let check = answerCheck(answers.get(crit.forms__Field__c), crit);

				return accum && check;

		}, true); 

	}

}
//currently only string checks
const answerCheck = (field, criteria) => {

	let criteriaValue = convertType(criteria);

	switch (criteria.forms__Operator__c) {
			case 'Is Not Null':
					return field != undefined && field.forms__Answer__c != null && field.forms__Answer__c != '' ? true : false
					break;
			case 'Equals':
					return field != undefined && field.forms__Answer__c == criteriaValue ? true : false
					break;
			case 'Not Equal':
					return field == undefined || field.forms__Answer__c != criteriaValue ? true : false
					break;
			case 'Is Greater than or equal to':
					return field != undefined && field.forms__Answer__c >= criteriaValue ? true : false
					break;
			case 'Is Less than or equal to':
					return field == undefined || field.forms__Answer__c <= criteriaValue ? true : false
					break;
			default:
					break;
	}

}

const convertType = ({ forms__Value__c, forms__Type__c}) => {

	switch (forms__Type__c) {
			case 'Boolean':
					return forms__Value__c.toLowerCase() == 'true';
					break;
			case 'Number':
							return parseInt(forms__Value__c);
							break;
			default:
					return forms__Value__c;
					break;
	}

}