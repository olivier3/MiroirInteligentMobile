import { View } from "react-native";
import TimeMode from "./TimeMode";
import Timezone from "./Timezones";
import NightMode from "./NightMode";


export default function ConfigPanel() {

  return (
    <View className="h-full bg-nord_black">
      <TimeMode/>
      <Timezone/>
      <NightMode/>
    </View>
  );
}
