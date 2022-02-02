import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./screens/ProfileScreen";
import DetailScreen from "./screens/DetailScreen";
import SettingScreen from "./screens/SettingScreen";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="DetailScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3B9C9C",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: "Home Page" }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: "Setting Page" }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile Page" }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3B9C9C",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: "Home Page" }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: "Setting Page" }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile Page" }}
      />
    </Stack.Navigator>
  );
}


function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {({route})=>({
            tabBarIcon:({focused, color})=>{
              let iconName;
              if(route.name === 'HomeScreen'){
                iconName = focused
                  ?logo1
                  :logo2
              }else if(route.name === 'SettingScreen'){
                  iconName = focused
                    ?logo1
                    :logo3
              }
              return <Image source={iconName} color={color} style={{width:20,height:20}}/>
            },
          })}
          tabBarOptions = {{
            activeTintColor: '#F67280',
            inactiveTinrColor: '#cccccc'
          }}
        > 
          <Tab.Screen name="HomeScreen" component={firstScreenStack} options={{ title: 'Home'}}/>
          <Tab.Screen name="SettingScreen" component={secondScreenStack} options={{ title: 'Setting'}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
