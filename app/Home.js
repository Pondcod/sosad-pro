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
        <TouchableOpacity  style={{backgroundColor: '', width: 42,height:42, marginLeft:40,marginTop:73}}onPress={() => router.back('Cover')}>
        <Image
          source={require('../assets/menu.png')}
          style={styles.menu}
        />
        </TouchableOpacity>
        <Text style={styles.YourPettext}>Your Pet</Text>
        <View style={styles.roundedBox}>
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
  Sleeptext:{
    
    fontSize:1,
    color:'#61485E',
    fontWeight: 'bold',
    // position: 'absolute',
    
    
  },
  roundedBox: {
    width: 390,
    height: 162,
    borderRadius: 40,
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

});
