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
  responseType: 'token id_token'
});

const Authenticate = () => {
  const {setAuth,setUserInfo} = useContext(AppContext);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
				connection: 'salesforce-sandbox',
				scope: 'openid email profile full'
      });
			const user_info = await auth0.auth.userInfo({token: credentials.accessToken})
			setUserInfo(user_info); 
			setAuth(credentials);
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