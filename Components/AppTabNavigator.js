import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/BookRequestScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOption:{
           tabBarIcon:
               <Image source={require('../assets/BookDonate.png')} style={{width:20,height:20}}>
               
               </Image>,
               tabBarLabel:'Donate Book'

           
        }
    },
    
    RequestBooks:{
        screen:BookRequestScreen,
        navigationOption:{
           tabBarIcon:
               <Image source={require('../assets/BookRequest.png')} style={{width:20,height:20}}>
               
               </Image>,
               tabBarLabel:'Request Book'

           
        }
    }
    
})