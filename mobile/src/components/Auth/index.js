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
import {View, Image, Alert, ActivityIndicator, Text, Switch} from 'react-native';

import { registerWithRealm } from '../../api/realm';
import Auth0 from 'react-native-auth0';
import {AppContext} from '../Context';
import { LoginButton } from '../Elements/Controls/Buttons';
import { loginStyle } from '../Elements/Stylesheet';
import { main } from '../Elements/Stylesheet/theme';

const auth0 = new Auth0({
  domain: 'dev-gzcou5sg.eu.auth0.com',
	clientId: 'clm2TdSybOc6hM91CsJjTsV6lQaziT3p',
});

const Authenticate = () => {
  const {setAuth, setRealm, setGlobalRealm, setLoading, loading, isSandbox, setSandbox } = useContext(AppContext);

  const login = async () => {

    try {

      const credentials = await auth0.webAuth.authorize({
				connection: isSandbox ? 'salesforce-sandbox' : 'salesforce',
				scope: 'openid full'
			});

			setLoading(true);
			console.log('testing');
			const user = await getUser(credentials);
			const {realm, globalRealm} = await registerWithRealm(user, credentials);

			// let profile = realm.objects('Profile');
			// setProfile(profile[0]); 

			setRealm(realm);
			setGlobalRealm(globalRealm);
			setAuth(user);
			setLoading(false);

    } catch (error) {
			alert(error);
			setLoading(false); 
    }
  };

	return (
		<View style={loginStyle.container}>

				<Image style={loginStyle.logo} source={require('../../assets/clarity-logo.png')} />

				<Text style={loginStyle.loginHeaderText}>
					Sign in and connect using your Salesforce Account for easy mobile form management.
				</Text>

				{
					loading ? 
					<ActivityIndicator size="small" color="#f5f5f5" /> : 
					[
						<View style={{ flex: 1, 	}}/>,
						<LoginButton text={'Continue with Salesforce'} onPress={() => login()} />,
						<View
							style={loginStyle.sandboxView}>
							<Text
								style={loginStyle.sandboxText}>Log in to a Sandbox</Text>
							<View style={{ flex: 1 }}/>
							<Switch
								trackColor={{
									true: main.highLightColor,
									false: main.shadowColor,
								}}
								thumbColor="white"
								value={isSandbox}
								onValueChange={(value) => setSandbox(value)}
								style={loginStyle.switchSwitch}/>
						</View>
					]
				}


		</View>
	)

};

const getUser = async ({idToken}) => {

	const response = await fetch('https://clarity-api-auth.herokuapp.com/credentials', {
		method: 'post',
		body: JSON.stringify({ 'idToken': idToken }),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})

	const user = await response.json();
	console.log('/***********USER***********/', user); 
	return user;

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

