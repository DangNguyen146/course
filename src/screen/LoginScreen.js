import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Hi, Welcome back!</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet</Text>
      <Button title="Sign in with Google" onPress={handleNext} color="purple" />
      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  forgotPassword: {
    marginTop: 16,
    color: 'purple',
    textDecorationLine: 'underline',
  },
});
