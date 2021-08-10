import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
      }}
    >
      <Auth.Screen name="SignIn" component={Dashboard} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;