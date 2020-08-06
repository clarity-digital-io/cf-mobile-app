import React from 'react';
import { InputField, Comment, Dropdown, Lookup, Number, } from '../../Field';

export const getType = (question, disabled) => {

		switch (question.Type) {
        case 'TEXTAREA':
            return <Comment key={question.Id} question={question} disabled={disabled} />
            break;
        case 'PICKLIST':
            return <Dropdown key={question.Id} question={question} disabled={disabled} sType={true} />
            break;
        case 'Number':
        case 'INTEGER':
        case 'DOUBLE':
        case 'LONG':
        case 'CURRENCY':
            return <Number key={question.Id} question={question} disabled={disabled} />
            break;
        case 'REFERENCE':
            return <Lookup key={question.Id} question={question} disabled={disabled} />
            break;
        case 'STRING':
            return <InputField key={question.Id} question={question} disabled={disabled} />
						break;			
    }

}