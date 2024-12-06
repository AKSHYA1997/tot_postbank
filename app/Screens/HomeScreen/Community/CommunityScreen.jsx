import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const services = [
  { id: '1', name: 'General Cleaning', icon: require('../../../../assets/icons/help.png') },
  { id: '2', name: 'Healthcare at Home', icon: require('../../../../assets/icons/help.png') },
  { id: '3', name: 'Moving & Storage', icon: require('../../../../assets/icons/help.png') },
  { id: '4', name: 'AC Services', icon: require('../../../../assets/icons/help.png') },
  { id: '5', name: 'Pest Control and Gardening', icon: require('../../../../assets/icons/help.png') },
  { id: '6', name: 'Maintenance & Handyman', icon: require('../../../../assets/icons/help.png') },
];

const generalCleaning = [
  { id: '1', name: 'Home Cleaning', image: require('../../../../assets/icons/volunteer.jpg') },
  { id: '2', name: 'Carpet Cleaning', image: require('../../../../assets/icons/volunteer.jpg') },
  { id: '3', name: 'Deep Cleaning', image: require('../../../../assets/icons/volunteer.jpg') },
];

const CommunityScreen = () => {
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
      <Text style={styles.cleaningText}>{item.name}</Text>
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
      <View style={styles.serviceSection}>
        <View style={styles.serviceHeader}>
          <Text style={styles.sectionTitle}>Choose a service</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all services</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={services}
          renderItem={renderService}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.serviceList}
        />
      </View>

      {/* General Cleaning Section */}
      <View style={styles.cleaningSection}>
        <Text style={styles.sectionTitle}>General Cleaning</Text>
        <FlatList
          data={generalCleaning}
          renderItem={renderCleaningService}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
    width: '90%',
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
    marginTop: 16,
  },
  cleaningCard: {
    width: 120,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cleaningImage: {
    width: '100%',
    height: '70%',
  },
  cleaningText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
    color: '#333',
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
});

export default CommunityScreen;
