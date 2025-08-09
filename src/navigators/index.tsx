// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './onboard';
import TabStack from './tab';
import { useAuth, User } from '../hooks';

function RootStack() {
  const token: User = useAuth((state: any) => state.token);
  return token.accessToken === '' ? <Onboarding /> : <TabStack />;
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
