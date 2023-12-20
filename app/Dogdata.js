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
      colors={['#FAE0E1', '#FAE0E1', '#FAE0E1', 'white', 'white']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity  style={{backgroundColor: '', width: 42,height:42, marginLeft:40,marginTop:73}}onPress={() => router.back('Home')}>
        <Image
          source={require('../assets/arrow.png')}
          style={styles.arrow}
        />
        </TouchableOpacity>
        <Image
         source={require('../assets/whitedog.png')}
         style={styles.dog}
        />
        <View style={styles.roundedBoxDog}>
        
        <View style={{}}>

            <Text style={styles.Sleeptext}>Sleep</Text>
            <Text style={styles.Agetext}>Age : 1 year old</Text>
            <Text style={styles.Breedtext}>Breed : Maltese</Text>
            <Text style={styles.Ownertext}>Owner : Prim</Text>
        </View>
    </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
  },
  
  arrow: {
    width: 42,
    height: 42,
    position: 'absolute',
  },
  dog:{
    width: 400,
    height: 300,
    marginTop:0,
    marginLeft:15,
  },
  roundedBoxDog: {
    width: 420,
    height: 400,
    borderRadius: 42,
    flexDirection:"row",
    backgroundColor: 'white',
    marginTop: 0,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  Sleeptext:{
    fontSize:64,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:0,
    marginLeft:35,
    
  },
  Agetext:{
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:0,
    marginLeft:0,
  },
  Breedtext:{
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:90,
    position:'absolute'
  },
  Ownertext:{
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:125,
    position:'absolute'
  },
});
