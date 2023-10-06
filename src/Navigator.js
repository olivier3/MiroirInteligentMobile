import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MirroirScreen from './screens/MirroirScreen';
import ConfigPanelScreen from './screens/ConfigPanelScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={styles}>
        <Tab.Screen name="Mirroir" component={ MirroirScreen } />
        <Tab.Screen name="Config" component={ ConfigPanelScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: '#7d0b1a',
    },

};
