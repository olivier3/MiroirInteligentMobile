import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import useModal from "../../hooks/useModal";
import { ConfigContext } from "../../contexts/ConfigContext";


export default function Timezone() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'us', value: 'US/Central' }
  ]);

  const {updateTimezone} = useModal();
  const {timezone, setTimezone} = useContext(ConfigContext);

  useEffect(() => {
    updateTimezone(timezone);
  }, [timezone]);

  return (
    <View className="flex-row justify-between items-center m-5 z-10">
      <Text className="text-lg text-light_blue">Fuseau horaire:</Text>
      <View className="w-1/2">
        <DropDownPicker
          className="border-light_blue"
          searchable={true}
          open={open}
          value={timezone}
          items={items}
          setOpen={setOpen}
          setValue={setTimezone}
          setItems={setItems} />
      </View>
    </View>
  );
}
