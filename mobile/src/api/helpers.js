export const transform = (objects) => {
	let transformedObjects = [];

	for (const obj in objects) {
		transformedObjects.push(objects[obj]); 
	}

	return transformedObjects; 
}