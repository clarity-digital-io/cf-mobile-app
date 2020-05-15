/* eslint-disable prettier/prettier */
import Realm from 'realm';

const FormResponseSchema = {
  name: 'Response',
  properties: {
    id: 'string',
    forms: 'Form[]',
    questions: 'Question[]',
  },
};

const FormSchema = {
  name: 'Form',
  properties: {
    id: 'string',
    name: 'string',
  },
};

const QuestionSchema = {
  name: 'Question',
  properties: {
    id: 'string',
    formId: 'string',
    title: 'string',
    order: {type: 'int', default: 0},
    required: 'bool',
    type: 'string',
  },
};

export default new Realm({
	schema: [FormResponseSchema, FormSchema, QuestionSchema],
	schemaVersion: 1
});
