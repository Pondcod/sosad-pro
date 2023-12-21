import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';

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
        <Text style={styles.header}>Chat</Text>
        <View style={styles.container}>
            <View style={styles.chat}>
            <Image source={require('../assets/doctor.png')} style={styles.frame}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Dr. Baifern</Text>
                    <Text style={styles.message}>How does your dog feel today?</Text>
                </View>
            </View>
            <View style={styles.chat}>
            <Image source={require('../assets/doctor2.png')} style={styles.frame}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Dr. Toie</Text>
                    <Text style={styles.message}>The next appointment will be in 1 week.</Text>
                </View>
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
    fontSize:35,
    fontWeight:'700',
    color:'#61485E',
    marginTop: 60,
    marginLeft:40,
    marginBottom: 30,
  },
  chat:{
    width:'100%',
    height:100,
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
  },
  frame:{
    width:80,
    height:80,
    borderRadius:50,
    marginRight: 20,
    backgroundColor:'white',
  },
  textContainer:{
    marginTop: -25,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    color: '#555',
  },
});