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
import Navigation from './components/Navigation';
import {NavigationContainer} from '@react-navigation/native';
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
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

	const [forms, setForms] = useState([]);
	const [responses, setResponses] = useState([]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        auth,
				setAuth,
				userInfo,
				setUserInfo,
				forms, 
				setForms,
				responses, 
				setResponses
      }}>
      {children}
    </AppContext.Provider>
  );
};

function Init() {
  const {auth} = useContext(AppContext);

  return (
    <NavigationContainer>
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

export default App;
