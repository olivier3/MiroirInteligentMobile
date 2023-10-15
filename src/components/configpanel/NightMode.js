import { useState, useContext } from "react";
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import useModal from "../../hooks/useModal";
import { ConfigContext } from "../../contexts/ConfigContext";

export default function NightMode() {
  const {brightnessTimeStart,setBrightnessTimeStart, brightnessTimeEnd, setBrightnessTimeEnd} = useContext(ConfigContext);
  const {updateValueSliderStart, updateValueSliderEnd} = useModal();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text className="text-lg text-light_blue m-5">Heure mode nuit &#40; Kiosk seulement &#41;</Text>
        <View className="flex-row justify-between items-center mx-5 mb-5">
          <Text className="text-lg text-light_blue">Début:</Text>
          <TextInput
            className="bg-white p-3 w-1/3 rounded-lg border-light_blue border-2"
            onChangeText={updateValueSliderStart}
            value={brightnessTimeStart}
            placeholder="Start time"
            keyboardType="numeric"
          />
        </View>
        <View className="flex-row justify-between items-center m-5">
          <Text className="text-lg text-light_blue">Fin:</Text>
          <TextInput
            className="bg-white p-3 w-1/3 rounded-lg border-light_blue border-2"
            onChangeText={updateValueSliderEnd}
            value={brightnessTimeEnd}
            placeholder="End time"
            keyboardType="numeric"
          />
        </View>
      </View >
    </TouchableWithoutFeedback>
  );
}