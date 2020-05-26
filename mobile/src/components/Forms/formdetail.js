/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect } from 'react';
import {Text, Button, View} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ResponsesList } from '../Responses/list';

export const FormDetail = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

			<ResponsesList route={route} navigation={navigation} />

      <Button title="Create New Form Response" onPress={() => navigation.navigate('Form Response', route.params)} />
    </View>
  );
}