import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { Link, router } from 'expo-router';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  return (
    <LinearGradient
      colors={['#FAE0E1', '#FAE0E1', 'white', 'white', 'white']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: '', width: 42, height: 42, marginLeft: 40, marginTop: 73 }} onPress={() => router.back('Cover')}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.signuptext}>SIGN UP</Text>
        <Text style={styles.email}>Email</Text>
        <Text style={styles.password}>Password</Text>
        <Text style={styles.number}>Number</Text>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder=""
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder=""
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.numberContainer}>
          <TextInput
            style={styles.numberInput}
            placeholder=""
            value={number}
            onChangeText={(text) => setNumber(text)}
          />
        </View>
        <Text style={styles.title}></Text>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => router.back('Login')}>
          <Text style={styles.LoginText}>Confirm</Text>
        </TouchableOpacity>
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
    position: 'relative',
  },
  signuptext: {
    width: 262,
    height: 80,
    fontSize: 48,
    color: '#61485E',
    fontWeight: 'bold',
    position: 'absolute',
    top: 220,
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
    top: 320,
  },
  password: {
    width: 261,
    height: 60,
    color: '#A6A6A6',
    fontSize: 24,
    position: 'absolute',
    left: 64,
    top: 460,
  },
  number: {
    width: 261,
    height: 60,
    color: '#A6A6A6',
    fontSize: 24,
    position: 'absolute',
    left: 64,
    top: 605,
  },
  emailContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 365,
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
    top: 510,
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
  numberContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 650,
    left: 57,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  numberInput: {
    width: 322,
    height: 66,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  buttonConfirm: {
    marginTop: 10,
    backgroundColor: '#61485E',
    paddingVertical: 9,
    paddingHorizontal: 59,
    borderRadius: 30,
    position: 'absolute',
    bottom:100,
    left:100,
  },
  LoginText: {
    fontSize: 35,
    color: 'white',
  },
});
