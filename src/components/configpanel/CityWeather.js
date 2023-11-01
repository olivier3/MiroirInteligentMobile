import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import useModal from 'miroirPackage/Hooks/UseModal'
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import { cityList } from "../../utils/cityList";

export default function CityWeather() {
  const [open, setOpen] = useState(false);

  const { updateCityWeather } = useModal();
  const { cityWeather, setCityWeather } = useContext(ConfigContext);

  useEffect(() => {
    updateCityWeather(cityWeather);
  }, [cityWeather]);

  return (
    <View className="flex-row justify-between items-center m-5 z-10">
      <Text className="text-lg text-white">Météo</Text>
      <View className="w-1/2">
        <DropDownPicker
          className="border-light_blue"
          searchable={true}
          open={open}
          value={cityWeather}
          items={cityList}
          setOpen={setOpen}
          setValue={setCityWeather}
        />
      </View>
    </View>
  );
}
