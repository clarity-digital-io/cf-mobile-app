import React from 'react';
import { DigitalSignature, InputField, FreeText, Attachments, Checkbox, Comment, Date, Dropdown, Email, Lookup, MultipleChoice, NetPromoterScore, Number, RecordGroup, Slider, PictureChoice } from '../Elements/Field';
export const getType = (question, disabled) => {

    switch (question.forms__Type__c) {
				case 'PictureChoice':
						return <PictureChoice key={question.Id} question={question} disabled={disabled} />
						break;
        case 'MultipleChoice':
            return <MultipleChoice key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Comment':
        case 'TEXTAREA':
            return <Comment key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Dropdown':
            return <Dropdown key={question.Id} question={question} disabled={disabled} sType={false} />
            break;
        case 'PICKLIST':
            return <Dropdown key={question.Id} question={question} disabled={disabled} sType={true} />
            break;
        case 'NetPromoterScore':
            return <NetPromoterScore key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Slider':
            return <Slider key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Date':
            return <Date key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Email':
            return <Email key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Number':
        case 'INTEGER':
        case 'DOUBLE':
        case 'LONG':
        case 'CURRENCY':
            return <Number key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Lookup':
            return <Lookup key={question.Id} question={question} disabled={disabled} />
            break;
        case 'REFERENCE':
            return <Lookup key={question.Id} question={question} disabled={disabled} />
            break;
        case 'RecordGroup':
            return <RecordGroup key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Checkbox':
            return <Checkbox key={question.Id} question={question} disabled={disabled} />
            break;
        case 'Attachments':
            return <Attachments key={question.Id} question={question} disabled={disabled} />
            break;
        case 'FreeText':
            return <FreeText key={question.Id} question={question} disabled={disabled} />
            break;
        case 'InputField':
        case 'STRING':
            return <InputField key={question.Id} question={question} disabled={disabled} />
						break;				
    }

}