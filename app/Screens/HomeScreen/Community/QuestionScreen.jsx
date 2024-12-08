import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from './ProgessBar';
import DropDownPicker from 'react-native-dropdown-picker';

const QuestionScreen = ({ navigation }) => {
    const [open, setOpen] = useState(false); // State to toggle dropdown
    const [value, setValue] = useState(null); // State to store selected value
    const [items, setItems] = useState([
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' },
      { label: 'Cologne', value: 'Cologne' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Stuttgart', value: 'Stuttgart' },
      { label: 'Düsseldorf', value: 'Düsseldorf' },
      { label: 'Leipzig', value: 'Leipzig' },
      { label: 'Dortmund', value: 'Dortmund' },
      { label: 'Essen', value: 'Essen' },
      { label: 'Bremen', value: 'Bremen' },
      { label: 'Dresden', value: 'Dresden' },
      { label: 'Hanover', value: 'Hanover' },
      { label: 'Nuremberg', value: 'Nuremberg' },
      { label: 'Duisburg', value: 'Duisburg' },
    ]);

  return (
    <View style={styles.container}>
         <ProgressBar progress={33} />
      <Text style={styles.title}>Which city or region would you like to volunteer in?</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a City"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.dropdownText}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Questions2')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionScreen;

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
    backgroundColor: '#E0E0E0',
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
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 16
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
});
