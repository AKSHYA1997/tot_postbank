import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from './ProgessBar';

const Question3Screen = ({ navigation }) => {
  const timePreferences = ['Weekdays', 'Weekends', 'Any Day'];
  const [selectedOption, setSelectedOption] = useState(null); 

  return (
    <View style={styles.container}>
         <ProgressBar progress={100} />
      <Text style={styles.title}>
        Do you have any restrictions or preferences regarding the time of day you can volunteer?
      </Text>
      {timePreferences.map((time, index) => (
        <TouchableOpacity key={index} style={[styles.optionButton, selectedOption === time && styles.selectedButton]}
        onPress={() => setSelectedOption(time)}>
          <Text style={[styles.optionText, selectedOption === time && styles.selectedText]}>{time}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
            navigation.navigate('Challenge'); // Navigate to GameScreen when Gamify is clicked
          }
        }
      >
        <Text style={styles.nextButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question3Screen;

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
