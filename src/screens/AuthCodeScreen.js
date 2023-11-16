import axios from "axios";
import { useContext, useState } from "react";
import { Button, Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import ApiCall from 'miroirPackage/Api/ApiCall';
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";


export default function AuthCodeScreen() {
  const [linked, setLinked] = useState(false);
  const [message, setMessage] = useState(null);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { loginCredentials } = useContext(ConfigContext);

  const CELL_COUNT = 6;

  const handleSubmit = (code) => {
    const url = ApiCall.getUrl();

    const loginCode = {
      "id": code,
    }

    axios.post(`${url}auth/desktopLogin`, loginCode, {
      headers: {
        'Authorization': `Bearer ${loginCredentials.token}`
      }
    }).then(res => {
      if (res.status === 200) {
        setMessage("Le miroir est connecté")
        setLinked(true);
      }
    });
  }

  if (!linked) {
    return (
      <Pressable className="h-full w-full" onPress={Keyboard.dismiss}>
        <View className="bg-nord_black h-full justify-center items-center">
          <Text className="font-bold text-white text-lg">Code d'authentification</Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          {message != null ? <Text className="mt-5 text-red-600">{message}</Text> : null}
          <View className="mt-5 rounded bg-white">
            <Button
              title="Lier au miroir"
              color="#2E3440"
              onPress={() => handleSubmit(value)}
            />
          </View>
        </View>
      </Pressable >
    );
  } else {
    return (
      <View className="bg-nord_black h-full justify-center items-center w-full">
        <Text className="font-bold text-white text-lg">{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    margin: 5,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'white',
    textAlign: 'center',
    color: 'white',
  },
  focusCell: {
    borderColor: '#83EEFF',
  },
});
