import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../../styles/AppTheme";


export default function Hour() {
  return (
    <View style={styles.shadow}>
      <Text className="text-2xl text-light_blue">Hour</Text>
      <Text className="text-2xl text-light_blue">Minute</Text>
      <Text className="text-2xl text-light_blue">Secondes</Text>
      <Text className="text-1xl text-light_blue">AM</Text>
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
