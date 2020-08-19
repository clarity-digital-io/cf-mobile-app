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
import { NavigationContainer, DefaultTheme, getStateFromPath } from '@react-navigation/native';
import {AppContext} from './components/Context';

import Main from './components/Screens/Main';
import Authenticate from './components/Auth';

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
	
	const [forms, setForms] = useState([]);
	const [responses, setResponses] = useState([]);
	const [activeForm, setActiveForm] = useState(null);
	const [apps, setApps] = useState([]);
	const [groups, setGroups] = useState([]);

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
				setGlobalRealm,
				apps, 
				setApps,
				groups, 
				setGroups
      }}>
      {children}
    </AppContext.Provider>
  );
};

function Init() {

	const {auth} = useContext(AppContext);
	
	return (
    <NavigationContainer linking={linking} theme={ClarityTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
				{
					auth ? 
					<Stack.Screen name="Main" component={Main} />
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

const linking = {
  prefixes: ['https//clarityforms.app', 'clarityforms://'],
  config: {
		Main: {
			path: 'main'
		},
		Settings: {
			path: 'settings'
		},
		InitResponse: {
			path: 'response/:formId'
		},
	},
	getStateFromPath(path, config) {
		return getStateFromPath(path, config);		
  },
};

const ClarityTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

export default App;
