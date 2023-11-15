import { SafeAreaView, View } from "react-native";
import Navigator from '../Navigator'
import { useContext, useEffect } from "react";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import LoginScreen from "../screens/LoginScreen";
import WebSocket from 'miroirPackage/WebSocket/WebSocket';
import ApiCall from 'miroirPackage/Api/ApiCall';
import {defaultLink} from '../defaultLink'


export default function Main() {
  const { isLogged } = useContext(ConfigContext);

  useEffect(() => {
    ApiCall.setUrl(defaultLink.api);
    WebSocket.setUrl(defaultLink.api);
  }, []);

  if (isLogged) {
    return (
      <Navigator />
    );
  } else {
    return (
      <LoginScreen />
    );
  }

}
