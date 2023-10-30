import Svg, { Circle, Rect, Path } from 'react-native-svg';
import { View } from 'react-native';
import { useContext } from 'react';
import { ConfigContext } from 'miroirPackage/Contexts/ConfigContext';

export default function NoConnection() {

  const {isWsConnected} = useContext(ConfigContext);
  return (
    !isWsConnected ?
    <View className="absolute p-2">
      <Svg className="w-5 h-5"
        fill="none"
        viewBox="0 0 19 19"
        xmlns="http://www.w3.org/2000/svg">
        <Path stroke="#F24E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"/>
      </Svg>
    </View> : ''
  )
}
