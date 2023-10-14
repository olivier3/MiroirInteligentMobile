import { NavigationContainer } from '@react-navigation/native';
import MirroirScreen from './screens/MirroirScreen';
import ConfigPanelScreen from './screens/ConfigPanelScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppTheme from './styles/AppTheme';
import { StatusBar } from 'react-native';
import ConfigProvider from './contexts/ConfigContext';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <ConfigProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Mirroir" component={MirroirScreen} />
          <Tab.Screen name="Config" component={ConfigPanelScreen} />
        </Tab.Navigator>
        <StatusBar barStyle='light-content' />
      </NavigationContainer>
    </ConfigProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: AppTheme.backColor,
  },
  headerTitleStyle: {
    color: AppTheme.textColor,
  },
  tabBarStyle: {
    backgroundColor: AppTheme.backColor,
    color: AppTheme.textColor
  }
};
