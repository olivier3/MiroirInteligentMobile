import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../../styles/AppTheme";
import { useContext } from "react";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";


export default function Hour(props) {
  const {is12h} = useContext(ConfigContext)
  const hours = is12h ? props.date.getHours() % 12 || 12 : props.date.getHours()
  const minutes=  props.date.getMinutes()
  const seconds=  props.date.getSeconds()

  return (
    <View className='flex-row justify-end'>
      <Text className="text-2xl text-white">
        {hours < 10 ? '0' : ''}
        {hours + ":"}
      </Text>

      <Text className="text-2xl text-white">
        {minutes < 10 ? '0': ''}
        {minutes + ":"}
      </Text>

      <Text className="text-2xl text-white">
        {seconds < 10 ? '0': ''}
        {seconds}
      </Text>
      <Text className="text-2xl ml-2 text-white">{is12h ? hours < 12 ? 'AM' : 'PM' : ''}</Text>
    </View>
  );
}
