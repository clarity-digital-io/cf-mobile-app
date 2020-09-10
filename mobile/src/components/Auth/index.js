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
import Auth0 from 'react-native-auth0';
import {View, Image, ActivityIndicator, Text, Switch} from 'react-native';

import { registerWithRealm } from '../../api/realm';

import {AppContext} from '../Context';
import { LoginButton } from '../Elements/Controls/Buttons';
import { loginStyle } from '../../stylesheet';
import { main } from '../../stylesheet/theme';
import { errorAlert } from '../Elements/Notification';
import { body } from '../../localization';

const auth0 = new Auth0({
  domain: 'dev-gzcou5sg.eu.auth0.com',
	clientId: 'clm2TdSybOc6hM91CsJjTsV6lQaziT3p',
});

const Authenticate = () => {

  const {setAuth, setRealm, setGlobalRealm, setLoading, loading, isSandbox, setSandbox } = useContext(AppContext);

  const login = async () => {

    try {

			setLoading(true);

      const credentials = await auth0.webAuth.authorize({
				connection: isSandbox ? 'salesforce-sandbox' : 'salesforce',
				scope: 'openid full'
			});

			const user = await getUser(credentials);

			const {realm, globalRealm} = await registerWithRealm(user, credentials);

			setRealm(realm);
			setGlobalRealm(globalRealm);
			setAuth(user);
			setLoading(false);

    } catch (error) {
			errorAlert(error)
			setLoading(false); 
    }
  };

	return (
		<View style={loginStyle.container}>

				<Image style={loginStyle.logo} source={require('../../assets/images/clarity-forms.jpg')} />


				{
					loading ? 
					<ActivityIndicator size="large" color={main.highLightColor} /> : 
					[
						<Text style={loginStyle.loginHeaderText}>
							{ body.login.title }
						</Text>,
						<View style={{ flex: 1 }}/>,
						<LoginButton text={body.login.signin} onPress={() => login()} />,
						<View style={loginStyle.sandboxView}>
							<Text
								style={loginStyle.sandboxText}>{ body.login.sandbox }</Text>
							<View style={{ flex: 1 }}/>
							<Switch
								trackColor={{
									true: main.highLightColor,
									false: main.shadowColor,
								}}
								thumbColor="white"
								value={isSandbox}
								onValueChange={(value) => setSandbox(value)}
								style={loginStyle.switchSwitch}
							/>
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

	return user;

}

export default Authenticate;

