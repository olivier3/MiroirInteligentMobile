import { useState } from "react";
import { Button, Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";


export default function AuthCodeScreen() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 6;

  return (
    <Pressable className="h-full w-full" onPress={Keyboard.dismiss}>
      <View className="bg-nord_black h-full justify-center items-center">
        <Text >Verification</Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
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
        <Button
          title="Lier au miroir"
        />
      </View>
    </Pressable>
  );
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
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
