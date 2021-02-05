import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSidebarMenu from './CustomSidebarMenu'
export const AppDrawerNavigator=createDrawerNavigator({
    home:{
        screen:AppTabNavigator
    },
        
},
{contentComponent:CustomSidebarMenu},
{initialRouteName:'home'}
)