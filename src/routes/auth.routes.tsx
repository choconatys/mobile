import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#ffaaba',
        },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
