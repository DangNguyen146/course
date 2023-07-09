import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Perform logout logic here
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo/logo.png')} style={styles.avatar} />
      <Text style={styles.title}>Account Settings</Text>
      <View style={styles.option}>
        <Ionicons name="person-circle-outline" size={24} color="purple" style={styles.optionIcon} />
        <Text style={styles.optionText}>Edit Profile</Text>
      </View>
      <View style={styles.option}>
        <Ionicons name="lock-closed-outline" size={24} color="purple" style={styles.optionIcon} />
        <Text style={styles.optionText}>Change Password</Text>
      </View>
      <View style={styles.option}>
        <Ionicons name="notifications-outline" size={24} color="purple" style={styles.optionIcon} />
        <Text style={styles.optionText}>Notification Settings</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} color="purple" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionIcon: {
    marginRight: 8,
  },
  optionText: {
    fontSize: 16,
  },
});
