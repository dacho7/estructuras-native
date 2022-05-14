import React from "react";
import { Button, View } from "react-native";

export default function ConectorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Conector")}
        title="Go to notifications"
      />
    </View>
  );
}
