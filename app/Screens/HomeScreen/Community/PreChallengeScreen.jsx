import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome, AntDesign, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Asset } from 'expo-asset';

const PreChallengeScreen = () => {

    const navigation = useNavigation();
    const [imageLoaded, setImageLoaded] = useState(false);
  const galleryImages = [
    require('../../../../assets/icons/vv5.jpg'),
    require('../../../../assets/icons/v1.jpg'),
    require('../../../../assets/icons/vv2.jpg'),
    require('../../../../assets/icons/vv4.jpg'),
  ];

  useEffect(() => {
    const preloadImage = async () => {
      // Preload the image before rendering
      await Asset.loadAsync(require('../../../../assets/icons/vb2.png'));
      setImageLoaded(true);
    };
    preloadImage();
  }, []);

  return (
    <ScrollView style={styles.container}>

      {/* Image */}
      {imageLoaded ? ( <Image
        source={require('../../../../assets/icons/vb2.png')} // Replace with your image URL
        style={styles.mainImage}
      />
    ) : (
        <View style={styles.imagePlaceholder} /> // Placeholder while loading
      )}

      {/* Content */}
      <View style={styles.content}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>JOIN THE</Text>
          <Text style={styles.title}>CHALLENGE</Text>
          <Text style={styles.title}>NOW!</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.subheading}><FontAwesome name="sign-in" size={20} color="#004aad" /> How It Works:</Text>

         
          
          <Text style={styles.description}><Text style={{fontWeight: 'bold', color: '#666',}}>Step 1:</Text> Sign up and access organizations</Text>
          <Text style={styles.description}><Text style={{fontWeight: 'bold', color: '#666',}}>Step 2:</Text> Volunteer your time</Text>
          <Text style={styles.description}><Text style={{fontWeight: 'bold', color: '#666',}}>Step 3:</Text> Upload Volunteer Certificate</Text>
          <Text style={styles.description}><Text style={{fontWeight: 'bold', color: '#666',}}>Step 4:</Text> Share on social media</Text>
          <Text style={styles.readMore}>Once all step are complete and participation is verified, access is granted to the reward selection portal. </Text>
        </View>


        <View style={styles.aboutSection}>
          <Text style={styles.subheading}><FontAwesome5 name="gift" size={20} color="#004aad" /> Rewards:
          </Text>
          <Text style={styles.description}>● Discount on exclusive experiences (e.g., Eintracht tickets)</Text>
          <Text style={styles.description}>● Discount on loans rates</Text>
          <Text style={styles.description}>● Boosted interest rates on savings</Text>
          <Text style={styles.description}>● Account fee waivers</Text>
          <Text style={styles.description}>● €50 donations to community initiatives</Text>
          <Text style={styles.description}>● €50 discount at Rewe store</Text>
        </View>


      <View style={styles.joinBtn}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText} onPress={() => {
              navigation.navigate('Questions'); // Navigate to GameScreen when Gamify is clicked
            }
          }>Join</Text>
        </TouchableOpacity>
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
    // flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
    letterSpacing: 5,
    marginBottom: 10,
    color: '#02155a'
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
    marginBottom: 10,
    color: '#003366'
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
  },
  readMore: {
    color: '#003366',
    fontWeight: 'ultralight',
    fontSize: 12,
    marginTop: 10
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
  joinBtn: { 
    width: '95%',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  smallButton: {
    backgroundColor: '#FFD700', // Yellow background
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  smallButtonText: {
    fontSize: 20,
    color: '#02155a', // Dark blue text
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0', // Placeholder background color
  },
});

export default PreChallengeScreen;
