import 'react-native-gesture-handler';

import OTP from './features/authentications/OTP';
import SignIn from './features/authentications/SignIn';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './features/screens/splash/Splash';
import Onboard from './features/screens/onboarding/Onboard';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useEffect, useState} from 'react';
import ForgotPassword from './features/authentications/ForgotPassword';

export default function App() {
  const [statusBarColor, setStatusBarColor] = useState('#5a0ad2');
  const Stack = createStackNavigator();

  const SplashScreen = props => <Splash {...props} />;
  const OnboardScreen = props => <Onboard {...props} />;
  const SignInScreen = props => <SignIn {...props} />;

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={statusBarColor} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="/"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="/"
            component={SplashScreen}
          />
          <Stack.Screen name="Login" component={SignInScreen} />
          <Stack.Screen name="Onboard" component={OnboardScreen} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
