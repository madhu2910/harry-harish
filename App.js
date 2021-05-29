import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';



export default class ABOUT extends Component {
  
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      phonenumber: '',
      calender: '',
      number: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
     
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })

        this.props.navigation.navigate('Login')
      
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 
      

        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <TextInput
          style={styles.inputStyle}
          placeholder="PhoneNumber"
          value={this.state.phonenumber}
          onChangeText={(val) => this.updateInputVal(val, 'phonenumber')}
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Date of Birth"
          value={this.state.calender}
          onChangeText={(val) => this.updateInputVal(val, 'calender')}
          
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="Referral Code"
          value={this.state.number}
          onChangeText={(val) => this.updateInputVal(val, 'number')}
        />     
        <Button
          color="black"
          title="Signup"
          onPress={() => this.registerUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
         
        </Text>                          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#ffcc00"
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: 'black',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
