/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { loginStyle } from '../../../../stylesheet';

export const LoginButton = ({text, onPress}) => {

  return (

			<TouchableOpacity onPress={onPress} style={loginStyle.logInButton}>
				<Image
					source={require("../../../../assets/images/salesforce.png")}
					style={loginStyle.logInButtonImage}/>
				<Text style={loginStyle.logInButtonText}>{text}</Text>
			</TouchableOpacity>

  );
};
