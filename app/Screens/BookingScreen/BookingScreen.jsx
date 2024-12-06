import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width for responsiveness

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      {/* 3D Banner */}
      <View style={styles.bannerWrapper}>
        <ImageBackground
          source={require('../../../assets/icons/banner2.png')} // Replace with your community image
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          {/* Banner Text */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to Our Community</Text>
            <Text style={styles.subtitle}>Join us and make a difference together</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Shadow for 3D effect */}
      <View style={styles.shadow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  bannerWrapper: {
    width: width * 0.9, // 90% of the screen width
    height: 200,
    transform: [
      { perspective: 1000 }, // Adds depth
      { rotateX: '-15deg' }, // 3D tilt
    ],
    overflow: 'hidden',
    borderRadius: 15, // Rounded corners
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    borderRadius: 15, // Match parent for smooth corners
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFD700', // Gold text
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
  },
  shadow: {
    width: width * 0.9,
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginTop: -10,
    borderRadius: 10,
    transform: [
      { scaleX: 0.9 },
      { translateY: 5 },
    ],
  },
});

export default BookingScreen;
