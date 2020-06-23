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
	main: {
		backgroundColor: '#fff',
	},
	mainError: {
	},
	error: {
		padding: 8,
		marginBottom: 4,
		color: '#fff',
		fontWeight: '700',
		fontSize: 12
	},
	fieldError: {
		backgroundColor: '#fc5c65',
		padding: 4,
	},
	field: {
		padding: 4,
	},
	titleContainer: {
		backgroundColor: '#f2f5f9', 
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderLeftColor: '#f2f5f9',
		borderLeftWidth: 2
	},
	titleContainerRequired: {
		backgroundColor: '#f2f5f9', 
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderLeftColor: '#fc5c65',
		borderLeftWidth: 2
	},
	title: {
		fontSize: 12, 
		color: '#16325c', 
		padding: 10,
		paddingLeft: 6,
		fontWeight: '300',
		borderBottomWidth: 0,
		borderTopWidth: 0
	},
	headerContainer: {
		backgroundColor: '#16325c', 
		padding: 14,
		paddingLeft: 6,
		borderBottomWidth: 0,
		borderTopWidth: 0,
		marginBottom: 0
	}, 
	header: {
		fontSize: 14,
		color: '#f5f5f5',
		fontWeight: '300'
	},
	input: {
		height: main.heightInput, 
		backgroundColor: '#fff',
		color: main.headerColor,
		lineHeight: main.lineHeight, 
		fontSize: 16,
		fontWeight: '300',
		padding: 10
	},
	slider: {
		flexDirection: 'row', 
		height: main.heightInput, 
		backgroundColor: main.colorBackgroundInput, 
	},
	link: {

		color: main.headerColor, 
		padding: main.paddingTitle,
	}
})

//Settings
