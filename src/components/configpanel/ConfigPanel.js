import {
  Keyboard,Pressable,
} from 'react-native';
import TimeMode from "./TimeMode";
import Timezone from "./Timezones";
import NightMode from "./NightMode";
import IdleMode from "./IdleMode";
import CityWeather from "./CityWeather";


export default function ConfigPanel() {
  return (
    <Pressable className="h-full bg-nord_black" onPressIn={Keyboard.dismiss}>
      <TimeMode/>
      <Timezone/>
      <CityWeather/>
      <NightMode/>
      <IdleMode/>
    </Pressable>
  );
}
