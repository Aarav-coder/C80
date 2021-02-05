import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase'
import db from '../Config'
export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',
            FirstName:'',
            LastName:'',
            Address:'',
            contact:'',
            ConfirmPassword:'',
            IsModalVisible:'false'
        }
    }
    userLogin=async(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
           this.props.navigation.navigate('donate')
        })
        .catch((error)=>{
            var errorCode=error.code
            var errorMessage=error.message
            return alert(errorMessage)

        })
    }
    userSignup=async(emailId,password,ConfirmPassword)=>{
        if(password!==ConfirmPassword){
            alert('Password does not match')
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(emailId,password).
        then(()=>{
            db.collection('Users').add({
                FirstName:this.state.FirstName,
                LastName:this.state.LastName,
                contact:this.state.contact,
                emailId:this.state.emailId,
                Address:this.state.Address
            })
        
            
            return alert('User added succesfully','',[{text:'ok',onPress:()=>{this.setState({'isModalVisible':false})}}])
         
        })
        .catch((error)=>{
            var errorCode=error.code
            var errorMessage=error.message
            return alert(errorMessage)

        })
    }
}
    showModal=()=>{
        return(
            <Modal 
            animationType='fade'
            transparent={true}
            visible={this.state.IsModalVisible}
            >
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView>
                            <Text>
                                Registration
                            </Text>
                            <TextInput 
                   placeholder='First Name'
                   maxLength={8}
                   onChangeText={(Text)=>{
                       this.setState({
                           FirstName:Text
                       })
                   }}
                   >

                   </TextInput>

                   <TextInput 
                   placeholder='Last Name'
                   maxLength={8}
                   onChangeText={(Text)=>{
                       this.setState({
                           LastName:Text
                       })
                   }}
                   >

                   </TextInput>

                   <TextInput 
                   placeholder='Contact No.'
                   maxLength={10}
                   keyboardType={'numeric'}
                   onChangeText={(Text)=>{
                       this.setState({
                           contact:Text
                       })
                   }}
                   >

                   </TextInput>

                   <TextInput 
                   placeholder='Address'
                   multiline={true}
                   onChangeText={(Text)=>{
                       this.setState({
                           Address:Text
                       })
                   }}
                   >

                   </TextInput>

                   
                            <TextInput 
                   placeholder='abc@example.com'
                   keyoboardType='email-address'
                   onChangeText={(Text)=>{
                       this.setState({
                           emailId:Text
                       })
                   }}
                   >

                   </TextInput>

                   <TextInput 
                   placeholder='Enter Password'
                   secureTextEntry={true}
                   onChangeText={(Text)=>{
                       this.setState({
                           password:Text
                       })
                   }}
                   >

                   </TextInput>

                   <TextInput 
                   placeholder='Confirm Password'
                   secureTextEntry={true}
                   onChangeText={(Text)=>{
                       this.setState({
                           ConfirmPassword:Text
                       })
                   }}
                   >

                   </TextInput>

<View>
<TouchableOpacity 
               onPress={()=>{
                   this.setState({'isModalVisible':false})

               }}
               >
                   <Text>
                       Cancel
                   </Text>
               </TouchableOpacity>

               <TouchableOpacity 
               onPress={()=>{
                   this.userSignup(this.state.emailId,this.state.password,this.state.ConfirmPassword)

               }}
               >
                   <Text>
                       Register
                   </Text>
               </TouchableOpacity>
</View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                    
                </View>

            </Modal>
        )
    }
    render(){
        return(
           <View>
               BOOKSANTA
               <View>
                   {this.showModal()}
               </View>
               <View>
                   <Image  source={require('../assets/icons8-books-48.png')} style={{width:60, height:60, alignSelf:'center'}}>

                   </Image>
               </View>
               <View>
                   <TextInput 
                   placeholder='abc@example.com'
                   keyoboardType='email-address'
                   onChangeText={(Text)=>{
                       this.setState({
                           emailId:Text
                       })
                   }}
                   >

                   </TextInput>

                   <TextInput 
                   placeholder='Enter Password'
                   secureTextEntry={true}
                   onChangeText={(Text)=>{
                       this.setState({
                           password:Text
                       })
                   }}
                   >

                   </TextInput>
               </View>
               <TouchableOpacity 
               onPress={()=>{
                   this.userLogin(this.state.emailId,this.state.password)
                  
               }}
               >
                   <Text>
                       Login
                   </Text>
               </TouchableOpacity>

               <TouchableOpacity 
               onPress={()=>{
                   
                   this.setState({'isModalVisible':true})
               }}
               >
                   <Text>
                       Signup
                   </Text>
               </TouchableOpacity>
        
           </View> 
        )
    }
    
}