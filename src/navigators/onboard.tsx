import { createStackNavigator } from '@react-navigation/stack';
import OnboardScreen from '../screens/onboard';
const Stack = createStackNavigator();

export default function Onboarding() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={OnboardScreen} />
    </Stack.Navigator>
  );
}
