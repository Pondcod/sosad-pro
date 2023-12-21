import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <View style={styles.box}>
                <Text style={styles.datetext}></Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.datetext}></Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.datetext}></Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.datetext}></Text>
            </View>
        </View>
        </View>

        <View style={styles.details}>
                <Text style={styles.Time}>Select Time</Text>
                
        </View>

    
        <View style={styles.boxesContainer2}>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>09:00 AM</Text>
            </View>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>10:00 AM</Text>
            </View>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>11:00 AM</Text>
            </View>
        </View>
        <View style={styles.boxesContainer2}>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>01:00 PM</Text>
            </View>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>02:00 PM</Text>
            </View>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>03:00 PM</Text>
            </View>
        </View>
        <View style={styles.boxesContainer2}>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>04:00 PM</Text>
            </View>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>05:00 PM</Text>
            </View>
            <View style={styles.boxtime}>
                <Text style={styles.timetext}>06:00 PM</Text>
            </View>

        </View>

        <View style={styles.booked}>
            <Text style={styles.textbook}>Booked</Text>
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
  }

});
