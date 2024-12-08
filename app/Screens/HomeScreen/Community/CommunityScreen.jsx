import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Heading from '../../../Components/Heading';
import { useNavigation } from '@react-navigation/native';
import { Asset } from 'expo-asset';

const categories = [
  { id: '1', name: 'Challenges', icon: require('../../../../assets/icons/cc1.png'), iconName: "users" },
  { id: '2', name: 'Learnings', icon: require('../../../../assets/icons/cc2.png'), iconName: "book"  },
  { id: '3', name: 'Gamify', icon: require('../../../../assets/icons/cc3.png'), iconName: "gamepad"  },
  { id: '4', name: 'Sustainablity', icon: require('../../../../assets/icons/cc4.png'), iconName: "tree"  },
//   { id: '5', name: 'Others', icon: require('../../../../assets/icons/c5.png') }
];

const generalCleaning = [
    { id: '1', name: '#ThePowerOfMany', image: require('../../../../assets/icons/v2.jpg') },
  { id: '2', name: '#TogetherWeGrow', image: require('../../../../assets/icons/v3.jpg') },
  { id: '3', name: '#SustainableFuturesStartWithUs', image: require('../../../../assets/icons/volunteer.jpg') },
  { id: '4', name: '#ShareSupportSucceed', image: require('../../../../assets/icons/v1.webp') }
];

const CommunityScreen = () => {

    const navigation = useNavigation();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      const preloadImage = async () => {
        // Preload the image before rendering
        await Asset.loadAsync(require('../../../../assets/icons/banner2.png'));
        setImageLoaded(true);
      };
      preloadImage();
    }, []);

  const renderService = ({ item }) => (
    <View style={styles.serviceContainer}>
      <TouchableOpacity>
        <Image source={item.icon} style={styles.serviceIcon} />
        <Text style={styles.serviceName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCleaningService = ({ item }) => (
    <View style={styles.cleaningCard}>
      <Image source={item.image} style={styles.cleaningImage} />
      <View style={styles.textOverlay}>
      <Text style={styles.cleaningText}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>Community</Text>
      </View>

<View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a Service"
          placeholderTextColor="#999"
        />
        <FontAwesome style={styles.searchBtn} name="search" size={17} color={'#FFFFFF'} />
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require('../../../../assets/icons/banner2.png')} // Replace with a banner image
          style={styles.bannerImage}
        />
      </View>

      {/* Service Section */}
      <ScrollView>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesGrid}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem} onPress={() => {
            if (category.name === 'Gamify') {
              navigation.navigate('Gamify'); // Navigate to GameScreen when Gamify is clicked
            }
            if (category.name === 'Challenges') {
              navigation.navigate('PreChallenge'); // Navigate to GameScreen when Gamify is clicked
            }
          }}>
            <View style={styles.iconContainer}>
              {/* <Image source={category.icon} style={styles.icon} /> */}
              <FontAwesome name={category.iconName} size={24} color="#ffffff" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* General Cleaning Section */}
      {/* <View style={styles.cleaningSection}>
        <Text style={styles.sectionTitle}>General Cleaning</Text>
        <FlatList
          data={generalCleaning}
          renderItem={renderCleaningService}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View> */}


   
      <Text style={styles.sectionTitle}>Our Customer Club</Text>
      <View style={styles.cleaningSection}>
        <FlatList
          data={generalCleaning}
          renderItem={renderCleaningService}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  time: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40
  },
searchBar: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
  },
searchBtn: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 7
},
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoBlue: {
    color: '#003366',
  },
  logoOrange: {
    color: '#FFD700',
  },
  subHeader: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 4,
  },
  searchBar: {
    margin: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  banner: {
    alignItems: 'center',
    marginBottom: 16
  },
  bannerImage: {
    width: '92%',
    height: 160,
    borderRadius: 10,
    boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.5), 0 10px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  serviceSection: {
    paddingHorizontal: 16,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16
  },
  viewAll: {
    color: '#003366',
    fontSize: 14,
  },
  serviceList: {
    alignItems: 'center',
  },
  serviceContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 16,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  cleaningSection: {
    paddingHorizontal: 16,
    marginTop: 2,
  },
  cleaningCard: {
    width: 120,
    height: 130,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative'
  },
  cleaningImage: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute', // Position text over the image
    top: 0, // Adjust based on where you want the text
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    backgroundColor: 'rgba(0, 51, 102, 0.4)', // Optional: Add a semi-transparent background for better readability
    height: '30%',
    marginTop: 90
  },
  cleaningText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    color: '#FFF',
    zIndex: 10
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#003366',
    paddingVertical: 12,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
    color: '#FFD700',
  },
  navText: {
    fontSize: 12,
    color: '#FFF',
    marginTop: 4,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  categoryItem: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 10
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FFD700',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#FFD700',
  },
  categoryName: {
    fontSize: 10,
    color: '#02155a', // Dark blue text
    marginTop: 6,
    textAlign: 'center',
  }
});

export default CommunityScreen;
