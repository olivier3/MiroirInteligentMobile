import { Button, Text, TextInput, View } from "react-native";
import useLogin from "../hooks/useLogIn";


export default function LoginScreen() {
  const { isValid, setEmail, setPwd, handleSubmit } = useLogin();
  return (
    <View className="bg-nord_black h-full justify-center items-center">
      <Text className="w-1/2 text-center text-lg text-white font-bold">Connexion</Text>
      <TextInput
        className="rounded bg-white mt-5 p-3 w-1/2 text-center"
        placeholder="Adresse courriel"
        onChangeText={value => setEmail(value)}
        autoCapitalize={'none'}
      />
      <TextInput
        className="rounded bg-white p-3 mt-5 w-1/2 text-center"
        placeholder="Mot de passe"
        onChangeText={value => setPwd(value)}
        autoCapitalize={'none'}
        secureTextEntry={true}
      />
      {!isValid ? <Text className="mt-5 text-red-600">Courriel ou mot de passe invalide</Text> : null}
      <View className=" rounded mt-5 bg-nord_white">
        <Button
          color="#2E3440"
          title="Connect"
          onPress={() => handleSubmit()}
        />
      </View>
    </View>
  );
}
