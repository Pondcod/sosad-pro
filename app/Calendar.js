import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { Link, router } from 'expo-router';
import { Calendar, LocaleConfig } from 'react-native-calendars'; // Import the Calendar component

LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    // Handle the selected date here, e.g., show events for that date
  };

  return (
    <LinearGradient
      colors={['#FAE0E1', '#FAE0E1', '#FAE0E1', 'white', '#FAE0E1']}
      style={styles.gradientContainer}
    >
      
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: '', width: 42, height: 42, marginLeft: 40, marginTop: 73 }} onPress={() => router.back('Home')}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.LoginText}>2023 </Text>
        <View style={styles.passwordContainer}>
          <Text style={styles.password}>Add Event</Text>
          <TextInput
            style={styles.passwordInput}
            placeholder=""
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {/* Calendar component */}
        <Calendar styles
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: 'blue' },
          }}
          style={calendarStyles}
          
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  arrow: {
    marginLeft:-20,
    marginTop:-60,
  },
  LoginText: {
    width: 262,
    height: 80,
    fontSize: 48,
    color: '#61485E',
    fontWeight: 'bold',
    marginTop:-50,
    marginLeft:70,
    
  },
  passwordContainer: {

    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:80,
    marginLeft:20,
    marginTop:0,
  },
  passwordInput: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginTop:-25,
    marginLeft:-40,
  },
  password: {
    width: 261,
    height: 60,
    color: '#A6A6A6',
    fontSize: 24,
    marginLeft:20,
    fontWeight: 'bold',
    marginBottom:-5,
  }
  

});
const calendarStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent', // Set the background color to transparent
    borderWidth: 1,
    borderColor: 'gray',
    height: 350,
  },
  
    calendarContainer: {
      backgroundColor: 'transparent', // Set the background color to transparent
    },
    dayContainer: {
      backgroundColor: 'transparent', // Set the background color to transparent
    },
    dayText: {
      color: 'black', // Set the text color for the days
    },
  
});