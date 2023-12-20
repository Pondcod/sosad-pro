import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'

const CustomDrawerContent = (prop) => {
    <DrawerContentScrollView {...props}>

    </DrawerContentScrollView>
}

export default function Layout(){
    return(
        <Drawer/>
    )
}