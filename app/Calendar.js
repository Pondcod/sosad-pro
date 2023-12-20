import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { Link, router } from 'expo-router';

export default function LoginPage() {

  return (
    <LinearGradient
      colors={['#FAE0E1', '#FAE0E1', 'black', 'black', 'black']}
      style={styles.gradientContainer}
    >
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
  logintext: {
    width: 262,
    height: 80,
    fontSize: 48,
    color: '#61485E',
    fontWeight: 'bold',
    position: 'absolute',
    top: 250,
    left: 60,
  },
  arrow: {
    width: 42,
    height: 42,
    position: 'absolute',
  },
  email: {
    width: 231,
    height: 53,
    color: '#A6A6A6',
    fontSize: 24,
    position: 'absolute',
    left: 64,
    top: 360,
  },
  password: {
    width: 261,
    height: 60,
    color: '#A6A6A6',
    fontSize: 24,
    position: 'absolute',
    left: 64,
    top: 510,
  },
  emailContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 410,
    left: 57,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  emailInput: {
    width: 322,
    height: 66,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  passwordContainer: {
    alignItems: 'center',
    position: 'absolute',
    top:560,
    left: 57,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  passwordInput: {
    width: 322,
    height: 66,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  Click: {
    marginTop: 10,
    paddingVertical: 9,
    paddingHorizontal: 59,
    position:'absolute',
    top:68,
  },
  ClickText:{
    fontSize:20,
    color:'#A6A6A6',
  },
  buttonLogin: {
    marginTop: 10,
    backgroundColor: '#61485E',
    paddingVertical: 9,
    paddingHorizontal: 59,
    borderRadius: 30,
    position:'absolute',
    top:150,

  },
  LoginText: {
    fontSize: 35,
    color: 'white',
  },
});
