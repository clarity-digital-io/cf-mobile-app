/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import {View, Text, Button, Alert} from 'react-native';

import Auth0 from 'react-native-auth0';
import {AppContext} from '../Context';

const auth0 = new Auth0({
  domain: 'dev-gzcou5sg.eu.auth0.com',
	clientId: 'clm2TdSybOc6hM91CsJjTsV6lQaziT3p',
});

const Authenticate = () => {
  const {setAuth} = useContext(AppContext);

  const login = async () => {
    try {

      const credentials = await auth0.webAuth.authorize({
				connection: 'salesforce-sandbox',
				scope: 'openid full'
			});

			const user = await getUser(credentials.idToken);
			const hasPermission = await checkUserPermission(user.url, user.access_token); 

			if(!hasPermission) throw "User doesn't have Clarity Forms permissions."
			setAuth(user);
    } catch (error) {
			alert(error); 
    }
  };

  const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};
  return (
    <View style={style}>
      <Text>Authenticate</Text>
      <Button onPress={login} title="Login" />
    </View>
  );
};

const getUser = async (idToken) => {

	const response = await fetch('http://localhost:3000/credentials', {
		method: 'post',
		body: JSON.stringify({ 'idToken': idToken }),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})

	const user = await response.json();

	return user;

}

const checkUserPermission = async (url, accessToken) => {

	const response = await fetch(`${url}/services/apexrest/forms/MobileSettingsController`, { 
		method: 'get', 
		headers: new Headers({
			'Authorization': `OAuth ${accessToken}`, 
			'Content-Type': 'application/json'
		})
	});

	const permission = await response.json();

	return permission; 
}

const alert = (error) => {

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

export default Authenticate;

