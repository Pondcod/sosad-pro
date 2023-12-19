import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';


export default function CoverPage() {
  return (
    <LinearGradient
      colors={['white','white','white', '#FAE0E1','#FAE0E1']}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
      <Image
          source={require('../assets/logoFurbaby.png')} 
          style={styles.logo}
        />

        <Text style={styles.title}></Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('Login')}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 35,
    color: 'white',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#61485E',
    paddingVertical: 9,
    paddingHorizontal: 59,
    borderRadius: 30,
    position:'absolute',
    bottom:200,

  },
  buttonText: {
    fontSize: 35,
    color: 'white',
  },
  linkText: {
    fontSize: 22,
    marginTop: 20,
    color: 'white',
  },
  logo: {
    width: 281, 
  height: 292, 
  resizeMode: 'contain', 
  marginBottom: 350, 
  top:100,
  left:5,
  },
});
