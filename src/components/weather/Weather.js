import { Image, Text, View } from "react-native";
import useWeather from 'miroirPackage/Hooks/UseWeather'


export default function Weather() {
  const { weather } = useWeather();

  return (
    <View>
      {weather.temperature != null ? <Text>{weather.temperature} °C</Text> : <Text>MÉTÉO NON DISPONIBLE</Text>}
      {weather.iconID != null ?
        <Image
          className="h-20 w-20"
          source={{ uri: `https://openweathermap.org/img/wn/${weather.iconID}@2x.png` }}
        /> : null
      }
    </View>
  )
}
