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
        <Text style={styles.header}>Edit Your</Text>
        <Text style={styles.header}>Profile</Text>
        <TouchableOpacity style={{}} onPress={() => router.push('Profileowner')}>
        <View style={styles.box}>
            <View style={styles.ImageContainer}>

            <Text style={styles.datetext}>Edit your Profile</Text>
            <Feather name="camera" size={20} color={Colors.textGray} style={styles.cameraicon} />
            
            <Image
                source={require('../assets/R1.png')}
                style={styles.R1}
            />
            </View>
        </View>
        </TouchableOpacity>
        
        <View style={styles.box2}>
            <View style={styles.ImageContainer}>
            <Text style={styles.datetext2}>Add your pet Profile</Text>
            <Feather name="camera" size={20} color={Colors.textGray} style={styles.cameraicon} />

        <Image
            source={require('../assets/R1.png')}
            style={styles.R1}
        />
    </View>
    </View>


      </SafeAreaView>
    </LinearGradient>
  );
};

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
    marginTop: 75,
    marginLeft: 90,
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
  datetext:{
    fontSize: 20,
    fontWeight: '500',
    marginTop: 110,
    marginLeft: 50,
    color: 'gray',
    fontWeight: 'bold',
  },
  datetext2:{
    fontSize: 20,
    fontWeight: '500',
    marginTop: 110,
    marginLeft: 35,
    color: 'gray',
    fontWeight: 'bold',
  },
  cameraicon:{
    ontWeight: 'bold',
    marginLeft:200,
    marginTop:70,
  },

});