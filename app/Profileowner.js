import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import { Link, router } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
        <TouchableOpacity style={{backgroundColor: '', width: 30, height: 30, marginLeft: 40, marginTop: 20, marginBottom: -40}} onPress={() => router.push('Profileowner2')}>
        <View style={styles.box}>
            <View style={styles.ImageContainer}>

            <Text style={styles.add}>Edit your Profile</Text>
            <Feather name="camera" size={30} color={Colors.textGray} style={styles.cameraicon} />
            
            <Image
                source={require('../assets/R1.png')}
                style={styles.R1}
            />
            </View>
        </View>
        </TouchableOpacity>
        <View style={styles.roundedBoxDog}>
            <Text style={styles.detailtext}>Enter your name</Text> 
            <View style={styles.detailbox}>
                <View style={styles.detail}>     
                    
                </View>
            </View>
            <Text style={styles.detailtext}>Address</Text>
            <View style={styles.datebox}>
                <View style={styles.doctor}>     
                    
                    
                </View>
            </View>
            <Text style={styles.detailtext}>Phone number</Text>
            <View style={styles.datebox}>
                <View style={styles.date}>    
                    
                </View>
            </View>
            <View style={styles.botton}>
                <TouchableOpacity style={styles.buttonCONFIRM} onPress={() => router.push('Profileowner2')}>
                    <Text style={styles.CONFIRMText}>SAVE</Text>
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
  header:{
    fontSize:37,
    fontWeight:'700',
    color:'#61485E',
    marginTop: 60,
    marginLeft:40,
    marginBottom: -45,
  },
  box:{
    width:250,
    height:250,
    backgroundColor:'white',
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 50,
    borderRadius:140,
    marginBottom:-20,
  },
  box2:{width:250,
    height:250,
    backgroundColor:'white',
    flexDirection: 'row',
    marginTop: 75,
    marginLeft: 90,
    borderRadius:140,
    marginBottom:-20,},
  R1:{
    width:3333,
    height:2566,
    marginTop:20,
  },
  
  datetext2:{
    fontSize: 20,
    fontWeight: '500',
    marginTop: 110,
    marginLeft: 35,
    color: 'gray',
    fontWeight: 'bold',
  },
  add:{
    fontSize: 20,
    fontWeight: '500',
    marginTop: 110,
    marginLeft: 50,
    color: 'gray',
    fontWeight: 'bold',
  },
  cameraicon:{
    ontWeight: 'bold',
    marginLeft:200,
    marginTop:70,
  },
  roundedBoxDog:{
    marginTop:310,
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
    marginLeft:80,
  },
  
  detailbox:{
    width: 322,
    height: 66,
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
    marginBottom:20,
  },
  doctorbox:{
    width: 322,
    height: 66,
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
    marginBottom:20,

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
    height: 66,
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
    marginBottom:20,

  },
  
  buttonCONFIRM: {
    width: 257,
    height: 66,
    marginTop: 30,
    backgroundColor: '#C4C4C4',
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

    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginLeft:76,
    marginTop:12,
  },
  botton:{
    
    marginTop:10,
    marginLeft:80,

  },


});