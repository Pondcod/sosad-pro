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
         source={require('../assets/cat.png')}
         style={styles.dog}
        />
    
    <View style={styles.roundedBoxDog}>
        <Text style={styles.Sleeptext}>Babe</Text>
        <Text style={styles.detailtext}>Detail</Text> 
        <View style={styles.detailbox}>
            <View style={styles.detail}>     
                <Text style={styles.Agetext}>Age : 0.5 year old</Text>
                <Text style={styles.Breedtext}>Breed : Tabby Cat</Text>
                <Text style={styles.Ownertext}>Owner : pprimrs</Text>
            </View>
        </View>
        <Text style={styles.detailtext}>Doctor diagnoses</Text>
        <View style={styles.datebox}>
            <View style={styles.doctor}>     
                <Text style={styles.doctortext}>Eating less food and water, oversleep.</Text>
                
            </View>
        </View>
        <Text style={styles.detailtext}>On Date</Text>
        <View style={styles.datebox}>
            <View style={styles.date}>     
                <Text style={styles.datetext}>18 November 2023 </Text>
                <Text style={styles.datetext}>Time : 18:00 pm</Text>
                
            </View>
        </View>
        <View style={styles.botton}>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => router.push('Home')}>
                <Text style={styles.LoginText}>DENY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCONFIRM} onPress={() => router.push('Home')}>
                <Text style={styles.CONFIRMText}>CONFIRM</Text>
            </TouchableOpacity>
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
    marginLeft:-20,
    marginTop:-60,
  },
  dog:{
    width: 300,
    height: 300,
    marginTop:-170,
    marginLeft:92,
  },
  roundedBoxDog: {
    width: 420,
    height: 700,
    borderRadius: 60,
    backgroundColor: 'white',
    marginTop: 0,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  Sleeptext:{
    fontSize:55,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:20,
    marginLeft:40,
    marginBottom:5,
    
  },

  Agetext:{
    fontSize :19,
    color:'#61485E',
    fontWeight: 'bold',
    marginBottom:7,
  },
  Breedtext:{
    fontSize :19,
    color:'#61485E',
    fontWeight: 'bold',
    marginBottom:7,
    
  },
  Ownertext:{
    fontSize :19,
    color:'#61485E',
    fontWeight: 'bold',
    marginBottom:7,

  },
  detail:{
    
    marginLeft:32,
    marginTop:19,

  },

  detailtext:{
    fontSize:20,
    color:'#A6A6A6',
    fontWeight: 'bold',
    marginTop:11,
    marginLeft:51,
  },
  
  detailbox:{
    width: 322,
    height: 121,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 7,
    marginLeft:51,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2, // Set the width of the border
    borderColor: 'gray', // Set the color of the border
  },
  doctorbox:{
    width: 322,
    height: 68,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 7,
    marginLeft:51,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2, // Set the width of the border
    borderColor: 'gray', // Set the color of the border
  },
  doctortext:{
    fontSize :19,
    color:'#61485E',
    fontWeight: 'bold',
    marginBottom:7,
    marginTop:-3,

  },
  doctor:{
    marginLeft:32,
    marginTop:20,

  },
  date:{

    
    marginLeft:32,
    marginTop:14,

  },
  datetext:{
    fontSize :19,
    color:'#61485E',
    fontWeight: 'bold',
    marginBottom:7,

  },
  datebox:{
    width: 322,
    height: 80,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 7,
    marginLeft:51,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2, // Set the width of the border
    borderColor: 'gray', // Set the color of the border
  },
  buttonLogin: {
    width: 150,
    height: 40,
    marginTop: 30,
    backgroundColor: '#E06047',
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    marginLeft:53,
    marginRight:12,

  },
  buttonCONFIRM: {
    width: 150,
    height: 40,
    marginTop: 30,
    backgroundColor: '#61485E',
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    marginLeft:5,
    marginRight:8,

  },

  LoginText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft:48,
    marginTop:8,
  },
  CONFIRMText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft:28,
    marginTop:8,
  },
  botton:{
    marginTop:10,
    flexDirection: 'row'
  },

});
