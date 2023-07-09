import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './src/screen/IntroScreen';
import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import ForgetPassword from './src/screen/ForgetPassword';
import EmailWillSend from './src/screen/EmailWillSend';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseScreen from "./src/screen/HomeScreen/CourseScreen"
import SettingScreen from "./src/screen/HomeScreen/SettingScreen"

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  );
}

function TopicScreen() {
  return (
    <View style={styles.container}>
      <Text>Topic Screen</Text>
    </View>
  );
}

function NotifyScreen() {
  return (
    <View style={styles.container}>
      <Text>Notify Screen</Text>
    </View>
  );
}


export default function App() {
  const createTab = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Course') {
              iconName = 'book-outline';
            } else if (route.name === 'Chat') {
              iconName = 'chatbubbles-outline';
            } else if (route.name === 'Topic') {
              iconName = 'bulb-outline';
            } else if (route.name === 'Notify') {
              iconName = 'notifications-outline';
            } else if (route.name === 'Setting') {
              iconName = 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Course" component={CourseScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Topic" component={TopicScreen} />
        <Tab.Screen name="Notify" component={NotifyScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
        <Stack.Screen name="EmailWillSend" component={EmailWillSend} />
        <Stack.Screen name="Home" children={createTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
