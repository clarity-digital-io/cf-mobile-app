import { Alert } from 'react-native';

export const errorAlert = (error) => {

	Alert.alert(
		"Unable to Login",
		error != null ? error.error_description : '',
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			},
			{ text: "OK", onPress: () => console.log("OK Pressed") }
		],
		{ cancelable: false }
	);
	
}

export const alert = (mssg, description, onConfirm) => {

	Alert.alert(
		mssg,
		description,
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			},
			{ text: "Start Sync", onPress: () => onConfirm() }
		],
		{ cancelable: false }
	);
	
}