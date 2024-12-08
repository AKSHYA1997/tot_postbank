import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const ChallengeScreen = () => {

    const [searchText, setSearchText] = useState(''); // Search filter
    const [sortAscending, setSortAscending] = useState(true); // Sorting flag
  const featuredItems = [
    {
      id: '1',
      title: 'Showcase Your Efforts: Upload Your Certificate Today!',
      meta: 'Upload',
    },
    {
      id: '2',
      title: 'Claim Your Rewards for Volunteer Work',
      meta: 'Redeem',
    }
  ];

  const volunteerOpportunities = [
    {
      id: '1',
      title: 'Female support for learning and homework support',
      organization: 'NACHBARSCHAFTSHEIM BOCKENHEIM - MÄDCHENBÜRO',
      location: 'Frankfurt am Main',
      image: require('../../../../assets/icons/ch1.jpeg'),
    },
    {
      id: '2',
      title: 'Give educational lectures at schools in Frankfurt on the topic of malnutrition',
      organization: 'AKTION GEGEN DEN HUNGER',
      location: 'Frankfurt am Main',
      image: require('../../../../assets/icons/ch2.jpg'),
    },
    {
      id: '3',
      title: 'Support us as youth leaders for children and youth groups',
      organization: 'ARBEITER-SAMARITER-BUND LANDESVERBAND HESSEN E.V.',
      location: 'Frankfurt am Main',
      image: require('../../../../assets/icons/ch3.jpg'),
    },
    {
      id: '4',
      title: 'Become an AckerCoach and get kids excited about vegetables in Mainz',
      organization: 'ACKER E. V.',
      location: 'Frankfurt am Main',
      image: require('../../../../assets/icons/ch4.jpg'),
    },
    {
      id: '5',
      title:
        'Part-time Federal Volunteer Service (bundesfreiwilligendienst) at BUND - New: now possible from the age of 18!',
      organization: 'BUND UMWELT- UND NATURSCHUTZ KREISVERBAND FRANKFURT AM MAIN',
      location: 'Frankfurt am Main',
      image: require('../../../../assets/icons/ch5.png'),
    },
    {
      id: '6',
      title: 'PAPERWORK MADE EASY',
      organization: 'JOHANNITER-UNFALL-HILFE E.V. REGIONALVERBAND RHEIN-MAIN',
      location: 'Frankfurt am Main',
      image: require('../../../../assets/icons/ch6.jpg'),
    },
  ];

  const [filteredData, setFilteredData] = useState(volunteerOpportunities);

  // Handle search
  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredData(volunteerOpportunities);
    } else {
      setFilteredData(
        volunteerOpportunities.filter(
          (item) =>
            item.title.toLowerCase().includes(text.toLowerCase()) ||
            item.organization.toLowerCase().includes(text.toLowerCase()) ||
            item.location.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  // Handle sorting
  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) =>
      sortAscending
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setFilteredData(sortedData);
    setSortAscending(!sortAscending);
  };

  // Handle card press
  const handleCardPress = (item) => {
    alert(`Selected: ${item.title}\nOrganization: ${item.organization}`);
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>Challenges</Text>
      </View>

      {/* Featured Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Opportunities</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={featuredItems}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            // <View style={styles.featuredCard}>
                     <LinearGradient
              colors={['#FFE599', '#FFD300']} // Gradient colors
              style={styles.featuredCard}>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredText}>{item.title}</Text>
              </View>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>{item.meta}</Text>
              </TouchableOpacity>
              </LinearGradient>
            // </View>
          )}
        />
      </View>

      {/* Search and Sort Section */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Find you Organization!"
          placeholderTextColor="#999"
        />
        <FontAwesome style={styles.searchBtn} name="search" size={17} color={'#FFFFFF'} />
      </View>

      {/* Bouquets Section */}
      <View style={{padding: 10}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 400 }}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.volunteerCard}
            onPress={() => handleCardPress(item)}
          >
            <Image source={item.image} style={styles.volunteerImage} />
            <View style={styles.cardContent}>
              <Text style={styles.volunteerTitle}>{item.title}</Text>
              <Text style={styles.volunteerOrganization}>{item.organization}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.locationIcon}>📍</Text>
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
      {/* Bottom Navigation */}
    </View>
  );
};

export default ChallengeScreen;

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
  },
  searchButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 4,
  },
  searchButtonText: {
    color: '#003366',
    fontSize: 16,
  },
  featuredSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 12,
  },
  featuredCard: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 12,
    width: 300,
    boxShadow: '0 20px 20px 0 rgba(0, 0, 0, 0.5), 0 20px 30px 0 rgba(0, 0, 0, 0.19)'
  },
  featuredContent: {
    flex: 1,
  },
  featuredText: {
    fontSize: 16,
    color: '#003366',
  },
  featuredMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#003366',
    marginRight: 12,
  },
  startButton: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 8,
  },
  startButtonText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bouquetsSection: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bouquetsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  filterButton: {
    fontSize: 18,
    color: '#003366',
  },
  bouquetCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bouquetImage: {
    width: '100%',
    height: 120,
  },
  bouquetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    marginVertical: 8,
  },
  bouquetTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  wild: {
    backgroundColor: '#FFD700',
  },
  exotic: {
    backgroundColor: '#003366',
  },
  tagText: {
    fontSize: 12,
    color: '#FFF',
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
    fontSize: 20,
    color: '#FFD700',
  },
  searchSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
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
    elevation: 2
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
    display: 'flex'
  },
searchBtn: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 7,
    width: '10%'
},
  sortButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  sortButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003366',
  },
  volunteerCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  volunteerImage: {
    width: '100%',
    height: 130,
  },
  cardContent: {
    padding: 10,
  },
  volunteerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 6,
  },
  volunteerOrganization: {
    fontSize: 10,
    color: '#555',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: 13,
    color: '#FF0000', // Red icon color for location
    // marginRight: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#777',
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
  organization: {
   
  }
});
