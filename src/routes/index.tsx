// React Navigate
import { createStackNavigator } from '@react-navigation/stack';
// Expo SafeAreaView
import { SafeAreaView } from 'react-native-safe-area-context';
// Utils
import { color } from '../utils';
// Screen
import { Files, Home, Profile } from '../screens';

const Stack = createStackNavigator();

const dataRoutes = [
  {
    id: 1,
    name: 'Home',
    component: Home,
  },
  {
    id: 2,
    name: 'Files',
    component: Files,
  },
  {
    id: 3,
    name: 'Profile',
    component: Profile,
  },
];

export const Route = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: color['background-primary'] }}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {dataRoutes.map(({ id, name, component }) => (
          <Stack.Screen key={id} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </SafeAreaView>
  );
};
