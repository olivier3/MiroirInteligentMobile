import { useState } from "react";
import { Switch, Text, View } from "react-native";


export default function ConfigPanel() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <View className="flex-row justify-between items-center m-5">
        <Text className="text-lg text-light_blue">Affichage de l'heure: 12h</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled} />
      </View>
      <View className="flex-row justify-between items-center m-5">
        <Text className="text-lg text-light_blue">Fuseau horaire:</Text>

      </View>
    </View>
  );
}
