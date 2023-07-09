import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CourseScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Hello,</Text>
                    <Image source={require('../../assets/images/logo/logo.png')} style={styles.avatar} />
                </View>
                <Text style={styles.greetings}>Dang Nguyen 👋</Text>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                        <Ionicons name="search" size={24} color="#259CC0" style={styles.searchIcon} />
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>
                <Text style={styles.heading}>Recently accessed courses</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.courseCard}>
                        <Image source={require('../../assets/images/logo/nhap-mon-mang-may-tinh.png')} style={styles.courseImage} />
                        <Text style={styles.courseTitle}>NT131.N11.MMCL</Text>
                        <Text style={styles.courseDescription}>Hệ thống nhúng Mạng không dây</Text>
                    </View>
                    <View style={styles.courseCard}>
                        <Image source={require('../../assets/images/logo/nhap-mon-mang-may-tinh.png')} style={styles.courseImage} />
                        <Text style={styles.courseTitle}>NT131.N11.MMCL</Text>
                        <Text style={styles.courseDescription}>Hệ thống nhúng Mạng không dây</Text>
                    </View>
                    <View style={styles.courseCard}>
                        <Image source={require('../../assets/images/logo/nhap-mon-mang-may-tinh.png')} style={styles.courseImage} />
                        <Text style={styles.courseTitle}>NT131.N11.MMCL</Text>
                        <Text style={styles.courseDescription}>Hệ thống nhúng Mạng không dây</Text>
                    </View>
                    <View style={styles.courseCard}>
                        <Image source={require('../../assets/images/logo/nhap-mon-mang-may-tinh.png')} style={styles.courseImage} />
                        <Text style={styles.courseTitle}>NT131.N11.MMCL</Text>
                        <Text style={styles.courseDescription}>Hệ thống nhúng Mạng không dây</Text>
                    </View>
                    {/* Add more course cards as needed */}
                </ScrollView>
                <Text style={styles.heading}>Course overview</Text>
                <Text style={styles.filter}>Currently filtering by year</Text>
                {/* Add options for sorting here */}

                <View style={styles.courseCardVertical}>
                    <Image source={require('../../assets/images/logo/nhap-mon-mang-may-tinh.png')} style={styles.courseImageVertical} />
                    <Text style={styles.courseTitleVertical}>NT131.N11.MMCL</Text>
                    <Text style={styles.courseDescriptionVertical}>Hệ thống nhúng Mạng không dây</Text>
                </View>
                <View style={styles.courseCardVertical}>
                    <Image source={require('../../assets/images/logo/nhap-mon-mang-may-tinh.png')} style={styles.courseImageVertical} />
                    <Text style={styles.courseTitleVertical}>NT131.N11.MMCL</Text>
                    <Text style={styles.courseDescriptionVertical}>Hệ thống nhúng Mạng không dây</Text>
                </View>
                {/* Add more course cards as needed */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFCFE',
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 16,
        marginBottom: 8,
    },
    greetings: {
        fontSize: 24,
        marginBottom: 8,
        color: '#259CC0',
        fontWeight: 700
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    searchContainer: {
        marginTop: 16,
        marginBottom: 24,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#259CC0',
        borderRadius: 8,
        padding: 8,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchText: {
        color: '#259CC0',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    courseCard: {
        width: 180,
        marginRight: 16,
    },
    courseImage: {
        width: 180,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    courseDescription: {
        fontSize: 14,
        color: '#777',
    },
    courseCardVertical: {
        marginBottom: 16,
    },
    courseImageVertical: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        marginBottom: 8,
    },
    courseTitleVertical: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    courseDescriptionVertical: {
        fontSize: 14,
        color: '#777',
    },
    filter: {
        fontSize: 16,
        marginBottom: 8,
        fontStyle: 'italic',
    },
});
