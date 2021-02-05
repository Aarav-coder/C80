import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase'
import {DrawerItems} from 'react-navigation-drawer'
export default class customSidebarMenu extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems  {...this.props}>


                    </DrawerItems>
                    <View>

                        <TouchableOpacity onpress={()=>{this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut()
                    }}>
                            <Text>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )


    }

}