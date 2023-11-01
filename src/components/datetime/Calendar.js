import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../../styles/AppTheme";


export default function Calendar(props) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const date = props.date.getDate();
  const dayOfTheWeek = days[props.date.getDay()];
  const month = props.date.getMonth() + 1;
  const year = props.date.getFullYear();

  return (
    <View style={styles.shadow} className="">
      <View className="pt-2 flex-row items-center">
        <Text className="text-2xl text-white">{dayOfTheWeek + ", "}</Text>
        <Text className="text-2xl text-white">{date + "/"}</Text>
        <Text className="text-2xl text-white">{month + "/"}</Text>
        <Text className="text-2xl text-white">{year}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: AppTheme.backgroundColor,
  },
});
