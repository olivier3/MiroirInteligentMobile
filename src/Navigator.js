import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MirroirScreen from './screens/MirroirScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={styles}>
        <Stack.Screen name="Mirroir" component={ MirroirScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: '#7d0b1a',
    },

};
