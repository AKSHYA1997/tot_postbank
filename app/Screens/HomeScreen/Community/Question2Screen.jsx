import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from './ProgessBar';

const Question2Screen = ({ navigation }) => {
  const causes = ['Education', 'Environment', 'Health', 'Animal Welfare', 'Others'];
  const [selectedOption, setSelectedOption] = useState(null); 
  return (
    <View style={styles.container}>
         <ProgressBar progress={66} />
      <Text style={styles.title}>What causes are you most passionate about?</Text>
      {causes.map((cause, index) => (
        <TouchableOpacity key={index} style={[styles.optionButton, selectedOption === cause && styles.selectedButton]}
        onPress={() => setSelectedOption(cause)}>
          <Text style={[styles.optionText, selectedOption === cause && styles.selectedText]}>{cause}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Questions3')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#003366',
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    marginTop: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#003366',
     fontWeight: 'bold'
  },
  selectedButton: {
    backgroundColor: '#003366', // Blue color for selected button
    borderColor: '#0056B3',
  },
  selectedText: {
    color: '#FFF', // White text for selected button
  },
});

