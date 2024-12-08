import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

const VolunteerScreen = () => {
  const galleryImages = [
    require('../../../../assets/icons/vv5.jpg'),
    require('../../../../assets/icons/v1.jpg'),
    require('../../../../assets/icons/vv2.jpg'),
    require('../../../../assets/icons/vv4.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>

      {/* Image */}
      <Image
        source={require('../../../../assets/icons/ch1.jpeg')} // Replace with your image URL
        style={styles.mainImage}
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Female support for learning and homework support</Text>
        </View>

        {/* Rating and Location */}
        <View style={styles.detailsSection}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Register</Text>
        </TouchableOpacity>
          <Text style={styles.location}>📍20.6 km - Frankfurt am Main</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.subheading}>About the volunteering opportunity</Text>
          <Text style={styles.description}>
          We are looking for committed people in the field of learning and homework support. It is not decisive whether you have a perfect command of the school material of the different class levels of different school types and always have the right solution at hand. Much more important for the girls is the imparting of motivation, staying power and continuity by reference persons, so that they don't throw in the towel.{' '}
            <Text style={styles.readMore}>Read More</Text>
          </Text>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.subheading}>Your Tasks</Text>
          <Text style={styles.description}>
          Learning and homework assistance, providing motivation, persistence and continuity of caregivers.
          </Text>
        </View>
        

        <View style={styles.aboutSection}>
          <Text style={styles.subheading}>What's needed</Text>
          <Text style={styles.description}>
          <AntDesign name="message1" size={17} color="#007AFF" /> For this volunteering opportunity, advanced German skills are required.
          Fun and enjoyment in working with children and young people as well as openness and tolerance towards cultural diversity, a balance between closeness and distance, patience
          </Text>
        </View>


        <View style={styles.aboutSection}>
          <Text style={styles.subheading}>Time required
          </Text>
          <Text style={styles.description}><Entypo name="circular-graph" size={17} color="#007AFF" /> Regularly</Text>
          <Text style={styles.description}><Entypo name="back-in-time" size={17} color="#007AFF" /> Discussed individually</Text>
          <Text style={styles.description}><AntDesign name="calendar" size={17} color="#007AFF" /> On weekdays, during the day</Text>
        </View>


        {/* Gallery Section */}
        <View style={styles.gallerySection}>
          <Text style={styles.subheading}>Gallery</Text>
          <FlatList
            data={galleryImages}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={item} style={styles.galleryImage} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  backButton: {
    fontSize: 20,
    color: '#000',
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2BAE66',
  },
  perPerson: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rating: {
    fontSize: 16,
    color: '#FFA500',
  },
  location: {
    fontSize: 14,
    color: '#999',
    marginTop: 9
  },
  aboutSection: {
    marginTop: 15
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#003366'
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  readMore: {
    color: '#003366',
    fontWeight: 'bold',
  },
  gallerySection: {
    marginTop: 15,
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  smallButton: {
    backgroundColor: '#FFD700', // Yellow background
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  smallButtonText: {
    fontSize: 18,
    color: '#00008B', // Dark blue text
    fontWeight: 'bold',
  },
});

export default VolunteerScreen;
