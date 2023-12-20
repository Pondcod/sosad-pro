import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { Link, router } from 'expo-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#fff', '#fff', 'white', 'white', 'white']}
      style={styles.gradientContainer}
    >
    <SafeAreaView>
      <TouchableOpacity style={{ backgroundColor: '', width: 42, height: 42, marginLeft: 40, marginTop: 40, marginBottom: -60 }} onPress={() => router.back('Home')}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      <View style={styles.questionContainer}>
        <Text style={styles.Question}>Are you in</Text>
        <Text style={styles.Question}>Emergency?</Text>
        <Text style={styles.Explanation}>Press the button below help will reach you soon.</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.red3}></View>
        <View style={styles.red2}></View>
        <LinearGradient
          colors={['#DC4E4A', '#DC4E4A']}
          style={styles.circularGradient}
          >
        </LinearGradient>
        <Text style={styles.sos}>SOS</Text>
      </View>
      <View style={styles.roundedBox}>
        <Text style={styles.topic}>Your current address</Text>
        <Text style={styles.details}>17/4 Village No.5 Bamroongrat Road, Pibulsongkram Sub-district, Muang District, Bangkok, 10400</Text>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  questionContainer:{
    marginTop: 90,
  },
  Question:{
    fontSize:35,
    color: "rgba(102, 77, 98, 1)",
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  Explanation:{
    fontSize: 20,
    color: "rgba(102, 77, 98, 1)",
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 42,
    marginRight: 42,
  },
  button:{
    alignItems:'center',
    marginTop:20,
  },
  sos:{
    fontWeight:'800',
    color:'#fff',
    fontSize:48,
    position:'absolute',
    marginTop:150,
  },
  circularGradient: {
    width: 222,
    height: 222,
    borderRadius: 111,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    marginTop:70,
  },
  red2:{
    width: 291,
    height:291,
    backgroundColor:'rgba(246, 195, 196, 1)',
    borderRadius:145.5,
    position:'absolute',
    marginTop:35,
  },
  red3:{
    width:362,
    height:362,
    backgroundColor:'rgba(249, 232, 238, 1)',
    borderRadius:181,
    position:'absolute',
    justifyContent:'center',
  },
  roundedBox:{
    width: 339,
    height: 134,
    borderRadius: 28,
    backgroundColor: 'rgba(97, 72, 94, 0.11)',
    marginTop: 400, 
    marginLeft:50,
    padding:10,
  },
  topic:{
    width:200,
    height:20,
    fontSize: 20,
    fontWeight: 'bold',
    color: "rgba(102, 77, 98, 1)",
    marginTop:10,
    marginBottom:10,
    marginLeft:15,
  },
  details:{
    width:300,
    height:85,
    fontSize: 17,
    color: "rgba(102, 77, 98, 1)",
    marginLeft:15,
  }
});