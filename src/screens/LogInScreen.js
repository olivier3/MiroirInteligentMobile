import { Button, SafeAreaView, TextInput, View } from "react-native";


export default function LogInScreen({ setIsLogged }) {
  return (
    <SafeAreaView>
      <View className="h-full justify-center items-center">
        <TextInput
          className=""
          placeholder="Adresse courriel"
        />
        <TextInput
          className=""
          placeholder="Mot de passe"
        />
        <Button
          title="Connect"
          onPress={() => setIsLogged(true)}
        />
      </View>
    </SafeAreaView>
  );
}
