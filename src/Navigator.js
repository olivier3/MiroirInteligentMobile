import { NavigationContainer } from '@react-navigation/native';
import MirroirScreen from './screens/MirroirScreen';
import ConfigPanelScreen from './screens/ConfigPanelScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppTheme from './styles/AppTheme';
import { StatusBar, View } from 'react-native';
import useBrightness from './hooks/useBrightness';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {

  const { handleTouchStart, opacity } = useBrightness();

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: 'black' }} onTouchStart={handleTouchStart}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Mirroir"
            component={MirroirScreen}
            options={{
              tabBarIcon: () => (<MaterialCommunityIcons name='mirror' color={AppTheme.textColor} size={25} />)
            }}
          />
          <Tab.Screen
            name="Config"
            component={ConfigPanelScreen}
            options={{
              tabBarIcon: () => (<Ionicons name='options' color={AppTheme.textColor} size={25} />)
            }}
          />
        </Tab.Navigator>
      </View>
      <View style={[screenOptions.absoluteView, { opacity: opacity }]}>
      </View>
      <StatusBar barStyle='light-content' />
    </NavigationContainer>
  );
};


let screenOptions = {
  absoluteView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    pointerEvents: "box-none",
  },
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
