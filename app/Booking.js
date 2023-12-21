import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { Link, router } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import categoriesData from './categoriesData';
import { FlatList } from 'react-native';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const renderCategoryItem = ({ item }) => {
        return (
            <View style={styles.categoryItemWrapper}>
                <Image source={item.image} style={styles.categoryItemImage}/>
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
                        <Image
                            source={require('../assets/star.png')}
                            style={styles.star}
                        />
                    </View>
                    <Text style={styles.categoryItemTitle}>{item.title}</Text>
                    <Text  style={styles.location}>{item.location}</Text>
                    <Text  style={styles.location}>{item.location2}</Text>
                    <View style={styles.timewrapper}>
                        <Feather name="clock" size={12} color={Colors.textGray}  />
                        <Text style={styles.time}>Time : 24 hours</Text>
                    </View>
                    <View style={styles.botton}>
                        <TouchableOpacity style={styles.buttonLogin} onPress={() => router.push('Booking2')}>
                            <Image
                                source={require('../assets/Booking.png')}
                                style={styles.booking}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        ); 
    };

  return (
    <ImageBackground
      source={require('../assets/map.png')} // Replace with the actual path to your background image
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.arrowButton} onPress={() => router.back('Home')}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>

        <View style={styles.box}>
          <Feather name="search" size={20} color={Colors.textGray} style={styles.searchIcon} />
          <TextInput
            style={styles.emailInput}
            placeholder="Search your hospital"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor={Colors.placeholderTextColor}
          />
        </View>
        <View style={styles.categoriesListWrapper}>
            <FlatList
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },    
  container: {
    flex: 1,
    position: 'relative',
  },
  arrowButton: {
    backgroundColor: '',
    width: 42,
    height: 42,
    marginLeft: 40,
    marginTop: 73,
  },
  arrow: {
    marginLeft: -20,
    marginTop: -60,
  },
  box: {
    width: 300,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginTop: -60,
    marginLeft: 70,
  },
  searchIcon: {
    marginLeft:15,
    flexDirection: 'row',
    marginBottom:5,
    marginTop:3,
  },
  emailInput: {
    flex: 1,
    height: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 10,
  },
  categoriesListWrapper:{
    marginTop:550,
  },
  categoryItemWrapper:{
    width: 330,
    height: 165,
    backgroundColor: 'white',
    marginRight:20,
    borderRadius: 28,
    flexDirection: 'row',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,

  },
  text:{
    marginLeft:17,
    marginTop:18,
    

  },
  categoryItemImage:{
    width: 143,
    height: 130,
    marginLeft:14,
    marginTop:14,
  },
  timewrapper:{
    flexDirection: 'row',
    marginBottom:7,
    marginLeft:5,
  },
  
  botton:{
    flexDirection: 'row',
    marginLeft:90,
  },
  buttonLogin: {
    width: 52,
    height: 29,
    backgroundColor: '#EDEDED',
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    marginRight:12,
  },
  buttonCONFIRM: {
    width: 52,
    height: 29,
    backgroundColor: '#EDEDED',
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,

  },
  
  categoryItemTitle:{
    fontSize :19,
    color:'#61485E',
    fontWeight: 'bold',
    marginBottom:5,
  },
  location:{
    fontSize :10,
    color:'#C4C4C4',
    fontWeight: 'bold',
    marginBottom:5,
    marginLeft:5,
  },
  time:{
    fontSize :10,
    color:'#C4C4C4',
    fontWeight: 'bold',
    marginTop:0,
    marginLeft:5,
    
  },
  booking:{
    width: 25, // Set the desired width
    height: 25, // Set the desired height
    marginLeft:13,
    marginTop:3,

  },
  booking2:{
    width: 22, // Set the desired width
    height: 22, // Set the desired height
    marginLeft:15,
    marginTop:3,

  },
});
