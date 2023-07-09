import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default function IntroScreen({ navigation }) {
  const slides = [
    {
      key: 'slide1',
      title: 'Slide 1',
      text: 'Lorem ipsum dolor sit amet consectetur. Sed quis diam augue in sit nisl. Mi enim cursus egestas consectetur nulla arcu leo sodales consectetur. Ac magna est lectus.',
      image: require('../assets/images/intro/asset_1.png'),
    },
    {
      key: 'slide2',
      title: 'Slide 2',
      text: 'Lorem ipsum dolor sit amet consectetur. Sed quis diam augue in sit nisl. Mi enim cursus egestas consectetur nulla arcu leo sodales consectetur. Ac magna est lectus.',
      image: require('../assets/images/intro/asset_3.png'),
    },
    {
      key: 'slide3',
      title: 'Slide 3',
      text: 'Lorem ipsum dolor sit amet consectetur. Sed quis diam augue in sit nisl. Mi enim cursus egestas consectetur nulla arcu leo sodales consectetur. Ac magna est lectus.',
      image: require('../assets/images/intro/asset_9.png'),
    },
    // Add more slides as needed
  ];

  const renderSlides = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const handleDone = () => {
    navigation.navigate('Login');
  };
  
  const renderSkipButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text style={styles.buttonText}>Skip</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSlides}
      onDone={handleDone}
      activeDotStyle={styles.activeDot}
      nextLabel={<Text style={styles.buttonText}>Next</Text>}
      skipLabel={<Text style={styles.buttonText}>Skip</Text>}
      renderSkipButton={renderSkipButton}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#0000',
    marginLeft: 20,
    marginRight: 20
  },
  activeDot: {
    backgroundColor: 'green', // Màu nền của chấm tròn hiển thị trạng thái hoạt động
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
  buttonText: {
    color: 'green', // Màu chữ của nút "Skip" và "Next"
    fontSize: 18,
  },
  skipButton: {
    color: 'green', // Màu chữ của nút "Skip" và "Next"
    fontSize: 18,
  },
});
