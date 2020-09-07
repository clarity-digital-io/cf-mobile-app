export const transform = (objects) => {
	let transformedObjects = [];

	for (const obj in objects) {
		transformedObjects.push(objects[obj]); 
	}

	return transformedObjects; 
}

export const getOptions = (question) => {

	if(question.Record_Group) {
		return getPicklist(question);
	} else {
		return transform(question.Question_Options);
	}

}
