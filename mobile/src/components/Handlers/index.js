import { useOnChange } from '../Handlers/Fields';
import { useOnChangeRG } from '../Handlers/RecordGroups';

export const useOnFieldChange = (question, isRecordGroup, uuid) => {

	const { value, update } = isRecordGroup ? useOnChangeRG(question) : useOnChange(question, uuid);

	return { value, update }

}