import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['rgba(197, 54, 52, 1)', 'rgba(255, 255, 255, 1)']}
      style={styles.gradientContainer}
    >
      <SafeAreaView>
        <Image source={require('../assets/ambulance.png')} style={{ marginTop: 87, marginLeft: 21, width: 262, height: 249 }}></Image>
        <Image source={require('../assets/grey.png')} style={{ width: 185, height: 25, marginLeft: 62, marginTop: -60 }}></Image>
        <View style={styles.text}>
          <Text style={styles.topic}>Ambulance and responders are on the way</Text>
          <Text style={styles.details}>Speak calmly to the person until the first aider arrives. First responders are on the way, and the Rescue service is alarmed</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.textbutton}>See responders on map</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  text: {
    marginTop: 50,
    marginLeft: 40,
    marginRight: 35,
    marginBottom:50,
  },
  topic: {
    fontSize: 30,
    fontWeight: '800',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 35,
  },
  details: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  button: {
    backgroundColor: 'white',
    width:336,
    height:72,
    borderRadius:30,
    marginLeft:49,
    marginTop:20,
  },
  textbutton:{
    fontSize: 23,
    flex:1,
    fontWeight:'bold',
    color: 'rgba(221, 79, 75, 1)',
    textAlign:'center',
    marginTop:20,
  },
});
