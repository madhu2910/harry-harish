import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, SafeAreaView } from 'react-native';


export default class App extends Component {
  
  
  constructor() {
    super();
    this.state = { 
     
      displayName: '',
      subject: '',
      message: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.name === '' && this.state.subject === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
     
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          subject: '', 
          message: ''
        })

        
      
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
         
       
       <SafeAreaView>
       <View style={StyleSheet.header}>
       
       <View>
       <Text style={styles.headerTitle}>Have a Question For Mopido? </Text>
       </View>
       <View
       style={{
           width: 40,
           
       }}
       />
       </View>
       </SafeAreaView>
        
      

        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="Subject"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Message"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />  
        
           
        <Button
          color="black"
          title="Submit"
          onPress={() => this.registerUser()}
        />

                                
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
        backgroundColor: 'white'
      },
    
   
   header: {
       flexDirection: 'row',
       
       justifyContent: 'space-between',
       alignItems: 'center',
       color: '#000000',
       padding: 20,
   },
   headerTitle: {
       fontSize: 30,
       fontWeight: 'bold',
       color: '#000000',

   },

   iconHeader: {
    color: "black",
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
