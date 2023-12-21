import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';


export default function CoverPage() {
  return (
    <LinearGradient
      colors={['#FAE0E1','#FAE0E1','white', 'white','white']}
      style={styles.gradientContainer}>

        <View style={{flex:1, padding:20,}}>
        <ScrollView>
        <TouchableOpacity  style={{backgroundColor: '', width: 42,height:42, marginLeft:40,marginTop:73}}onPress={() => router.push('Menu')}>
        <Image
          source={require('../assets/menu.png')}
          style={styles.menu}
        />
        </TouchableOpacity>
        <Text style={styles.YourPettext}>Your Pet</Text>
        <TouchableOpacity onPress={() => router.push('Dogdata')}>
        <View style={styles.roundedBoxDog}>
        
            <Image
                source={require('../assets/whitedog.png')}
                style={styles.whitedog}
            />
            <View style={{}}>

                <Text style={styles.Sleeptext}>Sleep</Text>
                <Text style={styles.Agetext}>Age : 1 year old</Text>
                <Text style={styles.Breedtext}>Breed : Maltese</Text>
                <Text style={styles.Ownertext}>Owner : Prim</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('Catdata')}>
        <View style={styles.roundedBox2}></View>
            <View style={{width:160, height:160, marginLeft:40, marginTop:-160,}}>

                <Text style={styles.Babetext}>Babe</Text>
                <Text style={styles.Agetex2}>Age : 6 month</Text>
                <Text style={styles.Breedtext2}>Breed : Tabby Cat</Text>
                <Text style={styles.Ownertext2}>Owner : Prim</Text>
            <Image
                source={require('../assets/cat.png')}
                style={styles.cat}
            />
            </View>
        </TouchableOpacity >

        <Text style={styles.Healthtext}>Health Care</Text>
        <TouchableOpacity onPress={() => router.push('Calendar')}>
        <View style={{width:160, height:160, marginLeft:30, marginBottom:160,}} >
        <View style={styles.roundedBox3}></View>
        <Image  source={require('../assets/calendar.png')}
                style={styles.calendar}
            />
        <Text style={styles.Calerdartext}>Calendar</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('Appointment')}>
        <View style={{width:160, height:160, marginLeft:30, marginBottom:-1,}} >
        <View style={styles.roundedBox4}></View>
        <Image  source={require('../assets/Booking.png')}
                style={styles.booking}
            />
        <Text style={styles.Bookingtext}>Booking</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('Emergency')}>
        <View style={{width:160, height:160, marginLeft:30, marginBottom:-1,}} >
        <View style={styles.roundedBox5}></View>
        <Image  source={require('../assets/car.png')}
                style={styles.car}
            />
        <Text style={styles.cartext}>Emergency Car</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('Chat')}>
        <View style={{width:160, height:160, marginLeft:30, marginBottom:-1,}} >
        <View style={styles.roundedBox6}></View>
        <Image  source={require('../assets/chat.png')}
                style={styles.chat}
            />
        <Text style={styles.chattext}>Chat</Text>
        </View>
        </TouchableOpacity>

        </ScrollView>

        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  YourPettext:{
    width:231,
    height:53,
    fontSize:40,
    color:'#61485E',
    fontWeight: 'bold',
    // position: 'absolute',
    top:50,
    left:0,

  },
  menu:{
    width:48,
    height:39,
    position: 'absolute',
    right:30,
  },
  roundedBoxDog: {
    width: 390,
    height: 162,
    borderRadius: 42,
    // justifyContent:"flex-endzz",/
    flexDirection:"row",
    backgroundColor: 'rgba(250, 224, 225, 0.60)',
    marginTop: 60,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  whitedog:{
    width:216,
    height:149,
    marginTop:13,
    marginLeft:10,
    // position:'absolute',
    // backgroundColor:"blue"
    
  },
  Sleeptext:{
    width:111,
    height:53,
    fontSize:36,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:5,
    

    // position: 'absolute',
    
  },
  Agetext:{
    width:111,
    height:53,
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:55,
    position:'absolute'
  },
  Breedtext:{
    width:250,
    height:53,
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:90,
    position:'absolute'
  },
  Ownertext:{
    width:111,
    height:53,
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:125,
    position:'absolute'
  },
  roundedBox2: {
    width: 390,
    height: 162,
    borderRadius: 42,
    backgroundColor: 'rgba(235, 222, 164, 0.50)',
    marginTop: 30, 
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  Babetext:{
    width:111,
    height:53,
    fontSize:36,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:5,
  },
  Agetex2:{
    width:111,
    height:53,
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:55,
    position:'absolute'
  },
  Breedtext2:{
    width:250,
    height:53,
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:90,
    position:'absolute'
  },
  Ownertext2:{
    width:111,
    height:53,
    fontSize:15,
    color:'#61485E',
    fontWeight: 'bold',
    marginTop:125,
    position:'absolute'
  },
  cat:{
    width:211,
    height:212,
    marginTop:-110,
    marginLeft:160,
    // position:'absolute',
    // backgroundColor:"blue"
  },
  Healthtext:{
    width:231,
    height:53,
    fontSize:40,
    color:'#61485E',
    fontWeight: 'bold',
    // position: 'absolute',
    top:30,
    left:0,
  },
  roundedBox3:{
    width: 339,
    height: 134,
    borderRadius: 28,
    backgroundColor: 'rgba(97, 72, 94, 0.11)',
    marginTop: 40, 
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  calendar:{
    width:60,
    height:60,
    marginLeft:135,
    marginTop:-110,
  },
  Calerdartext:{
    width:111,
    height:53,
    fontSize:24,
    color:'#61485E',
    fontWeight: 'bold',
    marginLeft:115,
    marginTop:0,
  },
  roundedBox4:{
    width: 339,
    height: 134,
    borderRadius: 28,
    backgroundColor: 'rgba(97, 72, 94, 0.11)',
    marginTop:-120, 
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  Bookingtext:{
    width:111,
    height:53,
    fontSize:24,
    color:'#61485E',
    fontWeight: 'bold',
    marginLeft:120,
    marginTop:5,
  },

  booking:{
    width:60,
    height:60,
    marginLeft:135,
    marginTop:-120,
  },
  roundedBox5:{
    width: 339,
    height: 134,
    borderRadius: 28,
    backgroundColor: 'rgba(97, 72, 94, 0.11)',
    marginTop:-120, 
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  car:{
    width:60,
    height:60,
    marginLeft:135,
    marginTop:-120,
  },
  cartext:{
    width:200,
    height:53,
    fontSize:24,
    color:'#61485E',
    fontWeight: 'bold',
    marginLeft:90,
    marginTop:10,
  },
  roundedBox6:{
    width: 339,
    height: 134,
    borderRadius: 28,
    backgroundColor: 'rgba(97, 72, 94, 0.11)',
    marginTop:-120, 
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  chat:{
    width:60,
    height:60,
    marginLeft:140,
    marginTop:-115,
  },
  chattext:{
    width:111,
    height:53,
    fontSize:24,
    color:'#61485E',
    fontWeight: 'bold',
    marginLeft:140,
    marginTop:10,
  },
});
