import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";


export default function IdleMode() {
  const [number, onChangeNumber] = useState('');

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-row justify-between items-center m-5">
          <Text className="text-lg text-light_blue">Temps mode inactif:</Text>
          <TextInput
            className="bg-white p-3 w-1/3 rounded-lg border-light_blue border-2"
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Idle timer"
            keyboardType="numeric"
          />
        </View>
    </TouchableWithoutFeedback>
  );
}
