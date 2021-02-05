import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import {Header,Icon} from 'react-native-elements'

const MyHeader=props=>{
    return(
        <Header centerComponent={{text:props.title, style:{color:'Black', fontSize:20, fontWeight:'Bold'}}}
        backgroundColor='Orange'
        />
    )
    
}
export default MyHeader