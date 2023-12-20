import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{
        headerStyle:{
            backgroundColor: 'indigo'
        },
        headerTintColor: 'white'
    }}>
        <Stack.Screen name='Cover' options={{headerShown:false}}/>
        <Stack.Screen name='Login' options={{headerShown:false}}/>
        <Stack.Screen name='Signup' options={{headerShown:false}}/>
        <Stack.Screen name='Home' options={{headerShown:false}}/>
        <Stack.Screen name='Calendar' options={{headerShown:false}}/>
        <Stack.Screen name='Catdata' options={{headerShown:false}}/>
        <Stack.Screen name='Dogdata' options={{headerShown:false}}/>
        
    </Stack>
  )
}