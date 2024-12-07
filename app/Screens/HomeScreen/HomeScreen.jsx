import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './Community/HomeNavigation';
import BookingScreen from '../BookingScreen/BookingScreen';
import { FontAwesome } from '@expo/vector-icons';
import CommunityScreen from './Community/CommunityScreen';

const accounts = [
  {
    id: '1',
    type: 'Accounts & Cards',
    accounts: [
      { name: 'Giro plus', balance: '3.076,99 €', details: 'DEXX...8201 01' },
    ],
  },
  {
    id: '2',
    type: 'Savings & Investments',
    accounts: [
      { name: 'SparCard direkt', balance: '9.500,00 €', details: 'DEXX...8203 05' },
    ],
  },
];

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const renderAccountSection = ({ item }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{item.type}</Text>
      {item.accounts.map((account, index) => (
        <TouchableOpacity key={index} style={styles.accountContainer}>
          <Image
            source={require('../../../assets/icons/icons8-bank-50.png')}
            style={styles.accountIcon}
          />
          <View style={styles.accountDetails}>
            <Text style={styles.accountName}>{account.name}</Text>
            <Text style={styles.accountDetailText}>{account.details}</Text>
          </View>
          <Text style={styles.accountBalance}>{account.balance}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>Overview</Text>
      </View>

      {/* Total Balance */}
      <View style={styles.balanceCard}>
        <View>
        <Text style={styles.balanceText}>12.576,99 €</Text>
        <Text style={styles.balanceLabel}>Total balance</Text>
        </View>
<View>
  
<Image
            source={require('../../../assets/icons/menu.png')}
            style={styles.balanceCardIcon}
          />
</View>
      </View>



      {/* Account Sections */}
      <FlatList
        data={accounts}
        renderItem={renderAccountSection}
        keyExtractor={(item) => item.id}
      />

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        {['Overview', 'Transfer', 'Invest', 'Products', 'Services', 'Community'].map((tab, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Text>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View> */}

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#eeeeee',
    opacity: 1,
    borderWidth: 1,
    background: " linearGradient((WHITE-WHITE): `gradient-code complet x` `gradienteditor)"
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
  mailIcon: {
    padding: 8,
  },
  exitText: {
    color: '#007AFF',
    fontSize: 16,
  },
  balanceCard: {
    backgroundColor: '#FFD700',
    padding: 20,
    margin: 16,
    borderRadius: 10,
    alignItems: 'left',
    display: 'flex',
    flexDirection: 'row',
    gap: 100
  },
  balanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#000',
  },
  sectionContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  accountIcon: {
    width: 40,
    height: 40,
    marginRight: 16
  },
  balanceCardIcon: {
    width: 20,
    height: 20,
    marginTop: 3
  },
  accountDetails: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountDetailText: {
    fontSize: 14,
    color: '#888',
  },
  accountBalance: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;
