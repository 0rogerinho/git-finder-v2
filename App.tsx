import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Route } from './src/routes';
import { KeysProvider } from './src/context/key-context';
import { UserProvider } from './src/context/user-context';
import { IsSearchProvider } from './src/context/is-search';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <IsSearchProvider>
          <UserProvider>
            <KeysProvider>
              <Route />
              <StatusBar style={'light'} />
            </KeysProvider>
          </UserProvider>
        </IsSearchProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
