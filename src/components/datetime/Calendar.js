import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../../styles/AppTheme";


export default function Calendar() {
  return (
    <View style={styles.shadow} className="border-light_blue border-2">
      <View className="p-4 flex flex-col items-center">
        <Text className="text-3xl text-light_blue">Day of week</Text>
        <Text className="text-2xl text-light_blue">Date</Text>
        <Text className="text-2xl text-light_blue">Month</Text>
        <Text className="text-1xl text-light_blue">Year</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: AppTheme.textColor,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
