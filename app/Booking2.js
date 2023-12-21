import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ImageBackground,ScrollView, } from 'react-native';
import { Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { Link, router } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <ImageBackground
      source={require('../assets/i8.png')} // Replace with the actual path to your background image
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: '', width: 42, height: 42, marginLeft: 40, marginTop: 60, marginBottom: -40 }} onPress={() => router.back('Home')}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <ScrollView>
        <View style={styles.roundedBoxDog}>
          <Image
            source={require('../assets/Rectangle47.png')}
            style={styles.Rec}
          />
          <View style={styles.Namestar}>
            <Text style={styles.Vet}>Vet4hospital</Text>
            <View style={styles.searchIcon2}>
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        
                    </View>

          </View>
          <View style={styles.location}>
            <Feather name="map" size={30} color={Colors.textGray} style={styles.map} />
            <View style={styles.locationtextwrap}>
              <Text style={styles.locationtext}>26 Soi Sukhumvit 31, </Text>
              <Text style={styles.locationtext}>Khlong Tan Nuea </Text>
            </View>
            
          </View>
          <View style={styles.time}>
            <Feather name="clock" size={30} color={Colors.textGray} style={styles.map} />
            <View style={styles.locationtextwrap}>
              <Text style={styles.timetext}>Time : 24 hours</Text>
              
            </View>
            
          </View>
          <Text style={styles.doc}>Available Doctor</Text>
          <View style={styles.categoryItemWrapper}>
                <Image source={require('../assets/docter1.png')} style={styles.imagecontain}></Image>
                <View style={styles.text}>
                    <View style={styles.searchIcon}>
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />

                    </View>
                    <Text style={styles.Bai}>Dr. Baifern</Text>
                    <Text  style={styles.Bai}>Medicine department</Text>
          
                    <View style={styles.timewrapper}>
                        <Feather name="clock" size={19} color={Colors.textGray}  style={styles.clock}/>
                        <Text style={styles.Mon}>Mon - Fri</Text>
                    </View>
                    <View style={styles.botton}>
                        <TouchableOpacity style={styles.buttonLogin} onPress={() => router.push('Booking2')}>
                            <Text style={styles.bookingtext}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <View style={styles.categoryItemWrapper}>
                <Image source={require('../assets/doctor2.png')} style={styles.imagecontain}></Image>
                <View style={styles.text}>
                    <View style={styles.searchIcon}>
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />

                    </View>
                    <Text style={styles.Bai}>Dr. Toie</Text>
                    <Text  style={styles.Bai}>Medicine department</Text>
          
                    <View style={styles.timewrapper}>
                        <Feather name="clock" size={19} color={Colors.textGray}  style={styles.clock}/>
                        <Text style={styles.Mon}>Mon - Fri</Text>
                    </View>
                    <View style={styles.botton}>
                        <TouchableOpacity style={styles.buttonLogin} onPress={() => router.push('Booking2')}>
                            <Text style={styles.bookingtext}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <View style={styles.categoryItemWrapper}>
                <Image source={require('../assets/doctor3.png')} style={styles.imagecontain}></Image>
                <View style={styles.text}>
                    <View style={styles.searchIcon}>
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />

                    </View>
                    <Text style={styles.Bai}>Dr. Chad</Text>
                    <Text  style={styles.Bai}>Medicine department</Text>
          
                    <View style={styles.timewrapper}>
                        <Feather name="clock" size={19} color={Colors.textGray}  style={styles.clock}/>
                        <Text style={styles.Mon}>Tue - Thu</Text>
                    </View>
                    <View style={styles.botton}>
                        <TouchableOpacity style={styles.buttonLogin} onPress={() => router.push('Booking2')}>
                            <Text style={styles.bookingtext}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },  
  gradientContainer: {
    flex: 1,
  },  
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
  },
  Mon:{
    fontSize:16,
    color:'#61485E',
    fontWeight: 'bold',
    marginLeft:8,
    marginTop:0,
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
    width: 430,
    height: 1000,
    borderRadius: 60,
    backgroundColor: 'white',
    marginTop: 500,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  Rec:{
    width: 63,
    height: 9,
    marginLeft:170,
    marginTop:20,
  },
  Namestar:{
    flexDirection: 'row',
    marginTop:29,
    marginLeft:55,
  },
  Vet:{
    fontSize:35,
    color:'#61485E',
    fontWeight: 'bold',
  },
  star:{
    width: 25,
    height:25,
  },
  searchIcon:{
    marginLeft:-3,
    flexDirection: 'row',
    marginBottom:10,

  },
  searchIcon2:{
    marginLeft:15,
    flexDirection: 'row',
    marginBottom:15,
    marginTop: 7,

  },
  map:{
    marginTop:10,
  },
  location:{
    flexDirection: 'row',
    marginLeft:60,
    marginTop:25,
  },
  locationtextwrap:{
    marginLeft:20,
    
  },
locationtext:{
  fontSize:20,
  color:'#C4C4C4',
  fontWeight: 'bold',
},
timetext:{
  fontSize:20,
  color:'#C4C4C4',
  fontWeight: 'bold',
  marginTop:13,
  marginLeft:0,
},

time:{
  flexDirection: 'row',
  marginLeft:60,
  marginTop:20,
  fontSize:16,
  color:'#61485E',
  fontWeight: 'bold',
  
},

doc:{
  fontSize:24,
  color:'#61485E',
  fontWeight: 'bold',
  marginLeft:60,
  marginTop:31,
},
categoryItemWrapper:{
  width: 341,
  height: 199,
  backgroundColor: 'white',
  marginLeft:47,
  borderRadius: 28,
  flexDirection: 'row',
  marginTop:13,
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.5,

},
text:{
  marginLeft:20,
  marginTop:19,
},
categoryItemImage:{
  width: 143,
  height: 130,
  marginLeft:14,
  marginTop:14,
},
Bai:{
  marginTop:5,
  fontSize:16,
  color:'#61485E',
  fontWeight: 'bold',
},
clock:{marginLeft:-5,},

timewrapper:{
  marginTop:15,
  flexDirection: 'row',
  

  
  marginLeft:5,
},
botton:{
  flexDirection: 'row',
  marginLeft:60,
  marginTop:15,
},
buttonLogin: {
  width: 137,
  height: 37,
  backgroundColor: '#D6CADF',
  borderRadius: 30,
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.5,
  marginRight:12,
  marginLeft:-70,
  marginTop:-3,
},
bookingtext:{
  fontSize:16,
  color:'#61485E',
  fontWeight: 'bold',
  marginLeft:35,
  marginTop:9,
},
imagecontain:{
  width:120,
  height:120,
  borderRadius:28,
  marginLeft: 26,
  marginTop:35,
  backgroundColor:'gray',
},
});
