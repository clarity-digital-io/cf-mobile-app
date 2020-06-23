/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useContext} from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import Navigation from './components/Screens/Navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Authenticate from './components/Auth';

import {AppContext} from './components/Context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <Init />
    </AppProvider>
  );
};

const AppProvider = ({children}) => {
	const [error, setError] = useState(true);
	const [isSandbox, setSandbox] = useState(true);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(null);
  const [profile, setProfile] = useState(null);
  const [realm, setRealm] = useState(null);
  const [globalRealm, setGlobalRealm] = useState(null);

	//main
	const [forms, setForms] = useState([]);
	const [responses, setResponses] = useState([]);

	//active
	const [activeForm, setActiveForm] = useState(null);

  return (
    <AppContext.Provider
      value={{
				error, 
				setError,
				isSandbox,
				setSandbox,
        loading,
        setLoading,
        auth,
				setAuth,
				profile, 
				setProfile,
				forms, 
				setForms,
				activeForm,
				setActiveForm,
				responses, 
				setResponses,
				realm, 
				setRealm,
				globalRealm, 
				setGlobalRealm
      }}>
      {children}
    </AppContext.Provider>
  );
};

function Init() {
	const {auth} = useContext(AppContext);
	
	return (
    <NavigationContainer theme={ClarityTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
				{
					auth ? 
					<Stack.Screen name="Home" component={Navigation} />
					: 
					<Stack.Screen
            name="Log In With Salesforce"
            component={Authenticate}
          />
				}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ClarityTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

export default App;
