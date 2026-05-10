import { StatusBar } from 'expo-status-bar';

import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator }
  from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import Toast from 'react-native-toast-message';
import { iosToastConfig } from './configs/iosToastConfig';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='home'
          component={HomeScreen}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />

      <Toast config={iosToastConfig} />

    </NavigationContainer>

  );
}