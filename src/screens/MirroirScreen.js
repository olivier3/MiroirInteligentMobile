import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppTheme from '../styles/AppTheme';

export default function MirroirScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>This is a tailwind test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.backColor,
  },
});
