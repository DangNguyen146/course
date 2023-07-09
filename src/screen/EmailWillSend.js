import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPassword() {
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.reset({
            index: 0, routes: [{ name: 'Login' }],
        });
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Please check your email!</Text>
            <Text style={styles.description}>Email has been sent</Text>
            <Button title="Back login screen!" onPress={handleNext} color="purple" />
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 8,
    },
});
