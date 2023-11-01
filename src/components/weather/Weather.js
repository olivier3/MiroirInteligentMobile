import { Image, Text, View } from "react-native";
import useWeather from 'miroirPackage/Hooks/UseWeather'


export default function Weather() {
  const { weather } = useWeather();

  return (
    <View className='flex-row items-center'>
      {weather.temperature != null ? <Text className="text-white">{weather.temperature} °C</Text> : <Text className="text-white">MÉTÉO NON DISPONIBLE</Text>}
      {weather.iconID != null ?
        <Image
          className="h-14 w-14"
          source={{ uri: `https://openweathermap.org/img/wn/${weather.iconID}@2x.png` }}
        /> : null
      }
    </View>
  )
}
