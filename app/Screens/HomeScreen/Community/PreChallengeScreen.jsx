import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome, AntDesign, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const PreChallengeScreen = () => {
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
        source={require('../../../../assets/icons/vb2.png')} // Replace with your image URL
        style={styles.mainImage}
      />

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
          <Text style={styles.subheading}>How It Works:</Text>

         
          <Text style={{fontWeight: 'bold', color: '#666',}}>Step 1: <FontAwesome name="sign-in" size={17} color="#004aad" /> Customer Sign-Up </Text>
          <Text style={styles.description}>Participants will need to sign up for the challenge by clicking "Join" below in the Postbank app. Upon signing up, participants will gain access to a list of local registered community organizations where they can volunteer.</Text>
<Text style={{fontWeight: 'bold', color: '#666',}}>Step 2: <MaterialIcons name="volunteer-activism" size={17} color="#004aad" /> Volunteering </Text>
          <Text style={styles.description}>Participants are encouraged to volunteer their time and skills at a community organization of their choice.</Text>


          <Text style={{fontWeight: 'bold', color: '#666',}}>Step 3: <Entypo name="upload-to-cloud" size={17} color="#004aad" /> Upload Volunteer Certificate </Text>
          <Text style={styles.description}>Once a participant completes their volunteering experience, a Volunteer Certificate is required to be uploaded to the Postbank app to confirm participation. </Text>


          <Text style={{fontWeight: 'bold', color: '#666',}}>Step 4: <Entypo name="share" size={17} color="#004aad" /> Share on Social media </Text>
          <Text style={styles.description}>The final step to the challenge is for the participants to share their progress with their communities on a social media platform of their choice using the #PostbankCommunity. </Text>
          <Text style={styles.readMore}>Once all step are complete and participation is verified, access is granted to the reward selection portal. </Text>
        </View>


        <View style={styles.aboutSection}>
          <Text style={styles.subheading}>Rewards:
          </Text>
          <Text style={styles.description}><FontAwesome5 name="gift" size={17} color="#004aad" /> Exclusive experiences, such as tickets to Eintracht games, concerts, and other events</Text>
          <Text style={styles.description}><FontAwesome5 name="gift" size={17} color="#004aad" /> Reduced lending rates for mortgages and loans</Text>
          <Text style={styles.description}><FontAwesome5 name="gift" size={17} color="#004aad" /> Boosted interest rates on savings accounts</Text>
          <Text style={styles.description}><FontAwesome5 name="gift" size={17} color="#004aad" /> Account fee waivers for a specified period</Text>
          <Text style={styles.description}><FontAwesome5 name="gift" size={17} color="#004aad" /> €50 donations to community initiatives of the customer’s choice</Text>
          <Text style={styles.description}><FontAwesome5 name="gift" size={17} color="#004aad" /> 50 discount on the next purchase at the Rewe store</Text>
        </View>


      <View style={styles.joinBtn}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Join</Text>
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
    fontSize: 14,
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
});

export default PreChallengeScreen;
