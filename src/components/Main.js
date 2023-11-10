import { SafeAreaView, View } from "react-native";
import Navigator from '../Navigator'
import { useContext } from "react";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import LogInScreen from "../screens/LogInScreen";

export default function Main() {
  const { isLogged } = useContext(ConfigContext);

  if (isLogged) {
    return (
      <Navigator />
    );
  } else {
    return (
      <LogInScreen />
    );
  }

}
