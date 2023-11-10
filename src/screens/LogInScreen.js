import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import useLogin from "../hooks/useLogIn";


export default function LogInScreen() {
  const {isValid, setEmail, setPwd, handleSubmit} = useLogin();
  return (
    <SafeAreaView>
      <View className="h-full justify-center items-center">
        <TextInput
          className=""
          placeholder="Adresse courriel"
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          className=""
          placeholder="Mot de passe"
          onChangeText={value => setPwd(value)}
        />
        {!isValid ? <Text>Courriel ou mot de passe invalide</Text> : null}
        <Button
          title="Connect"
          onPress={() => handleSubmit()}
        />
      </View>
    </SafeAreaView>
  );
}
