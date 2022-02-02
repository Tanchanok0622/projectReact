import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import { styles } from "../components/styles";

const SettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>Setting Screen</Text>
          <View style={{ width: "75%" }}>
            <View style={{ margin: 5 }}>
              <Button
                title="Go to Home Tab"
                onPress={() => navigation.navigate("DetailScreen")}
                color="#3C565B"
              />
            </View>
            <View style={{ margin: 5 }}>
              <Button title="Open News Screen" color="#3C565B" />
            </View>
            <View style={{ margin: 5 }}>
              <Button
                title="Open Profile Screen"
                onPress={() => navigation.navigate("ProfileScreen")}
                color="#3C565B"
              />
            </View>
          </View>
        </View>
        <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
