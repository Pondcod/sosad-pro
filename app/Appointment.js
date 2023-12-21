import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';

export default function LoginPage() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
  
    const handleDayPress = (day) => {
      setSelectedDay(day);
    };
  
    const handleTimePress = (time) => {
      setSelectedTime(time);
    };
  
  return (
    <LinearGradient
      colors={['rgba(250, 224, 225, 1)', 'rgba(250, 224, 225, 0)']}
      style={styles.gradientContainer}
    >
      <SafeAreaView>
      <TouchableOpacity style={{ backgroundColor: '', width: 42, height: 42, marginLeft: 40, marginTop: 20, marginBottom: -40 }} onPress={() => router.back('Home')}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      <Text style={styles.header}>Doctor details</Text>
        <View style={styles.doctor}>
            <View style={styles.frame}>
                <Image source={require('../assets/doctor.png')} style={styles.image}></Image>
            </View>
        </View>
        <View style={styles.details}>
                <Text style={styles.doctorName}>Dr. Baifern</Text>
                <Text style={styles.profession}>Veterinarian</Text>
                <Text style={styles.rating}>★ 4.7</Text>
        </View>
        <View style={styles.dateWrapper}>
          <View style={styles.boxesContainer}>
            {['Fri', 'Sat', 'Sun', 'Mon'].map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.box, selectedDay === day && { backgroundColor: '#D42866' }]}
                onPress={() => handleDayPress(day)}
              >
                <Text style={[styles.daytext, selectedDay === day && { color: 'white' }]}>{day}</Text>
                <Text style={[styles.datetext, selectedDay === day && { color: 'white' }]}>22</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.details}>
          <Text style={styles.Time}>Select Time</Text>
        </View>

        <View style={styles.boxesContainer2}>
  {['09:00 AM', '10:00 AM', '11:00 AM'].map((time, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.boxtime, selectedTime === time && { backgroundColor: '#D42866' }]}
      onPress={() => handleTimePress(time)}
    >
      <Text style={[styles.timetext, selectedTime === time && { color: 'white' }]}>{time}</Text>
    </TouchableOpacity>
  ))}
</View>

<View style={styles.boxesContainer2}>
  {['01:00 PM', '02:00 PM', '03:00 PM'].map((time, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.boxtime, selectedTime === time && { backgroundColor: '#D42866' }]}
      onPress={() => handleTimePress(time)}
    >
      <Text style={[styles.timetext, selectedTime === time && { color: 'white' }]}>{time}</Text>
    </TouchableOpacity>
  ))}
</View>

<View style={styles.boxesContainer2}>
  {['04:00 PM', '05:00 PM', '06:00 PM'].map((time, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.boxtime, selectedTime === time && { backgroundColor: '#D42866' }]}
      onPress={() => handleTimePress(time)}
    >
      <Text style={[styles.timetext, selectedTime === time && { color: 'white' }]}>{time}</Text>
    </TouchableOpacity>
  ))}
</View>

<View style={styles.booked}>
<TouchableOpacity style={{width:180,height:60,}} onPress={() => router.back('Home')}>
    <Text style={styles.textbook}>Booked</Text>
  </TouchableOpacity>
</View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  header:{
    fontSize:35,
    fontWeight:'700',
    color:'#61485E',
    marginTop: 60,
    marginLeft:40,
    marginBottom: 30,
  },
  doctor:{
    flex: 1,
    marginLeft:40,
  },
  frame:{
    width:150,
    height:150,
    position:'absolute',
    borderRadius:30,
    backgroundColor:'white',
    overflow: 'hidden',
  },
  image: {
    width: '95%',
    height: '120%',
    borderRadius: 30,
    marginLeft: 3.8,
    
  },
  details: {
    marginLeft: 210,
  },
  doctorName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#61485E',
  },
  profession: {
    fontSize: 20,
    fontWeight:'700',
    color: '#61485E',
    marginTop:10,
  },
  rating: {
    fontSize: 20,
    fontWeight:'800',
    color: 'rgba(224, 96, 71, 1)',
    marginTop: 15,
  },

  boxesContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 90,
    marginLeft:15,
    marginRight:15,
  },
  box:{
    width:70,
    height:70,
    backgroundColor:'white',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  
  boxesContainer2:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginLeft:15,
    marginRight:15,
  },
  boxtime:{
    width:110,
    height:60,
    backgroundColor:'white',
    borderRadius:20,
  },
  Time:{
    fontSize:27,
    fontWeight:'700',
    color:'#61485E',
    marginTop: 30,
    marginLeft:-170,
    marginBottom: 10,
  },
  timetext:{
    fontSize:18,
    fontWeight:'700',
    textAlign:'center',
    marginTop:20,
    color:'#61485E',
  },
  booked:{
    width:180,
    height:60,
    backgroundColor:'#D42866',
    borderRadius:30,
    marginTop: 30,
    marginLeft:120,
  },
  textbook:{
    fontSize:30,
    fontWeight:'800',
    color:'#ffffff',
    marginTop:10,
    marginLeft:35,
  },
  daytext:{
    fontSize:15,
    fontWeight:'400',
    color:'grey',
  },
  datetext:{
    fontSize:20,
    fontWeight:'600',
  },
});
