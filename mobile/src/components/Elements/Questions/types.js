import React from 'react';
import { GeoLocation, InputField, FreeText, Attachments, Checkbox, Comment, ClarityDate, Dropdown, Email, Lookup, MultipleChoice, Number, RecordGroup, ClaritySlider, PictureChoice } from '../Field';

export const getType = (question, disabled) => {

	const isRecordGroup = question.Record_Group; 

	switch (question.Type) {
			case 'PictureChoice':
					return <PictureChoice key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'MultipleChoice':
					return <MultipleChoice key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Comment':
			case 'TEXTAREA':
					return <Comment key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Dropdown':
					return <Dropdown key={question.Id} question={question} disabled={disabled} sType={false} isRecordGroup={isRecordGroup} />
					break;
			case 'PICKLIST':
					return <Dropdown key={question.Id} question={question} disabled={disabled} sType={true} isRecordGroup={isRecordGroup} />
					break;
			case 'Slider':
					return <ClaritySlider key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Date':
					return <ClarityDate key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Email':
					return <Email key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Number':
			case 'INTEGER':
			case 'DOUBLE':
			case 'LONG':
			case 'CURRENCY':
					return <Number key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Lookup':
					return <Lookup key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'REFERENCE':
					return <Lookup key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'RecordGroup':
					return <RecordGroup key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Checkbox':
					return <Checkbox key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'Attachments':
					return <Attachments key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'FreeText':
					return <FreeText key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;
			case 'InputField':
			case 'STRING':
					return <InputField key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
					break;	
			case 'GeoLocation':
				return <GeoLocation key={question.Id} question={question} disabled={disabled} isRecordGroup={isRecordGroup} />
				break;				
	}

}