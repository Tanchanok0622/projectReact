import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import { styles } from "../components/styles";

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 15 }}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>This is the Second Page</Text>
          <Button
            title="Go to First Page"
            onPress={() => navigation.push("FirstPage")}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.push("ThirdPage")}
          />
        </View>
        <Text style={styles.textBottomStyle}>
          Thai-Nichi Institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
