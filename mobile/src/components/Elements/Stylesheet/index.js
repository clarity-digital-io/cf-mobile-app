import React from "react";
import { StyleSheet } from "react-native";
import { main } from './theme'; 

//Login
export const loginStyle = StyleSheet.create({
	container: {
		backgroundColor: main.backgroundColor,
		flex: 1,
		alignItems: "center",
	},
	logo: {
		alignItems: 'center',
		alignSelf: "center",
		marginTop: 200,
	},
	loginHeaderText: {
		fontSize: 18,
		lineHeight: 24,
		margin: 50,
		color: main.headerColor,
		fontWeight: '300',
		textAlign: "center",
	},
	logInButton: {
		backgroundColor: main.backgroundColor,
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		justifyContent: 'center',
		padding: 0,
		width: 300,
		height: 60,
		shadowColor: main.shadowColor,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	logInButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	logInButtonText: {
		color: main.highLightColor,
		fontSize: 14,
		fontWeight: '300',
	},
	switchSwitch: {
		width: 40,
		height: 32,
	},
	sandboxView: {
		height: 32,
		marginBottom: 140,
		width: 280,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		alignSelf: 'center',
	},
	sandboxText: {
		color: main.highLightColor,
		fontSize: 14,
		fontWeight: '300',
		textAlign: "left"
	}
})

//Forms
export const formStyle = StyleSheet.create({
	container: {

	},
	item: {
		
	}
})

//Form Detail
export const responseDetailStyle = StyleSheet.create({
	container: {
		backgroundColor: main.backgroundColor,
	},
	createButton: {
		backgroundColor: main.highLightColor,
		alignItems: 'stretch',
		flexDirection: "column",
		alignSelf: "center",
		justifyContent: 'center',
		padding: 0,
		width: '100%',
		height: 60,
		shadowColor: main.shadowColor,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,	
	},
	createButtonText: {
		color: main.backgroundColor,
		fontSize: 16,
		fontWeight: '700',
		alignSelf: 'center'
	}
})

//Responses

//Response

//Fields
export const fieldStyle = StyleSheet.create({
	container: {
		borderColor: main.colorBorderTitle, 
		borderTopWidth:1, 
		borderBottomWidth: 1,
		backgroundColor: main.colorBackgroundTitle,
		justifyContent: 'center', 
		height: main.heightTitle
	},
	title: {
		fontSize: main.fontSizeTitle, 
		color: main.colorTitle, 
		padding: main.paddingTitle
	},
	header: {
		fontSize: 20, 
		color: '#fff',
		backgroundColor: main.headerColor, 
		padding: 10
	},
	field: {
		height: main.heightInput, 
		color: main.colorInput, 
		fontSize: main.fontSizeInput, 
		padding: main.paddingInput, 
		backgroundColor: main.colorBackgroundInput
	},
	slider: {
		flexDirection: 'row', 
		height: main.heightInput, 
		backgroundColor: main.colorBackgroundInput, 
	}
})

//Settings
