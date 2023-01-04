import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    AppHome,
    RentFlicker,
    SocialApp,
    DesignedLogin,
    LoginHome,
    MiniLogin,
    RoundLogin,
    PlainProfile,
    ProfileHome,
    PurpleProfile
} from '../Screens';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;