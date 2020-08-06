import { StyleSheet } from "react-native";
import { main } from './theme'; 

export const loginStyle = StyleSheet.create({
	container: {
		backgroundColor: main.backgroundColor,
		flex: 1,
		alignItems: "center",
	},
	logo: {
		alignItems: 'center',
		alignSelf: "center",
		width: 100,
		resizeMode: 'contain',
		marginTop: 100,
	},
	loginHeaderText: {
		fontSize: 18,
		lineHeight: 24,
		margin: 50,
		color: main.headerColor,
		fontWeight: '500',
		textAlign: "center",
	},
	logInButton: {
		backgroundColor: main.backgroundColor,
		borderRadius: 2,
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		justifyContent: 'center',
		padding: 0,
		width: 300,
		height: 60,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: .5,
		shadowRadius: 3.84,
		elevation: 1,
	},
	logInButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	logInButtonText: {
		color: main.headerColor,
		fontSize: 14,
		fontWeight: '500',
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
		color: main.headerColor,
		fontSize: 14,
		fontWeight: '500',
		textAlign: "left"
	}
})
