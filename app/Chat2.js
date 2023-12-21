import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather'
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
        <View style={styles.header}>
           <View style={styles.topic}>
            <Text style={styles.name}>Dr.  Baifern</Text>
            <Text style={styles.status}>Online</Text>
           </View>
           <Image source={require('../assets/doctor.png')} style={styles.imagecontain}></Image>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.t1Container}><Text style={styles.text}>How does your dog feel today?</Text></View>
          <View style={styles.t2Container}><Text style={styles.text}>He is getting better now, but not that much.</Text></View>
          <View style={styles.t3Container}><Text style={styles.text}>What’s the matter?</Text></View>
          <View style={styles.t4Container}><Text style={styles.text}>He no longer vomits but still has diarrhea; however, he's back to running and playing like before.</Text></View>
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.emailInput}
            placeholder="Type here"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor={Colors.placeholderTextColor}
          />
          <Feather name="send" size={25} color={Colors.textGray} style={styles.sendIcon} />
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
    marginTop:50,
    marginLeft:40,
    flexDirection:'row',
  },
  name:{
    fontSize:35,
    fontWeight:'700',
    marginBottom:15,
  },
  status:{
    fontSize:23,
    fontWeight:'500',
    color:'#C4C4C4',
  },
  imagecontain:{
    width:120,
    height:120,
    borderRadius:75,
    marginLeft: 50,
    backgroundColor:'white',
  },
  text:{
    fontSize:18,
    fontWeight:'600',
    color:'#61485E',
  },
  messageContainer:{
    margin:25,
  },
  t1Container:{
    width:300,
    height:40,
    backgroundColor:'#F9F4E3',
    alignItems:'center',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:20,
  },
  t2Container:{
    width:300,
    height:80,
    backgroundColor:'#F9F4E3',
    alignItems:'center',
    borderRadius:30,
    justifyContent:'center',
    marginBottom:20,
    marginLeft:65,
  },
  t3Container:{
    width:200,
    height:40,
    backgroundColor:'#F9F4E3',
    alignItems:'center',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:20,
  },
  t4Container:{
    width:300,
    height:110,
    backgroundColor:'#F9F4E3',
    alignItems:'center',
    borderRadius:40,
    justifyContent:'center',
    marginLeft:65,
  },
  box: {
    width: 355,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginTop: 170,
    marginLeft: 30,
  },
  sendIcon: {
    marginLeft:170,
    flexDirection: 'row',
    marginBottom:5,
    marginTop:10,
  },
  emailInput: {
    height: 20,
    fontSize: 20,
    fontWeight: '400',
    color: 'gray',
    marginLeft: 40,
    marginTop: 0,

  },
});