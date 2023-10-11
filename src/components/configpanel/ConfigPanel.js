import { useState } from "react";
import { Switch, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import AppTheme from "../../styles/AppTheme";
import TimeMode from "./TimeMode";
import Timezone from "./Timezones";


export default function ConfigPanel() {

  return (
    <View className="h-full bg-nord_black">
      <TimeMode/>
      <Timezone/>
    </View>
  );
}
