import React from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

export default function Verification() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 35,
            backgroundColor: "#ffcc00"
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
       content: {
           backgroundColor: '#FFFF00',
           flex: 1,
           marginTop: 20,
           paddingHorizontal: 40,
           paddingTop: 20,
       },
       title: {
           textTransform: 'uppercase',
           color: '#000000',
           fontWeight: 'bold',
           fontSize: 14,
       },
       subTitle: {
           color: '#000000',
           textAlign: 'center',
           paddingVertical: 20,
           fontSize: 20,
           fontWeight: '600',

       },
       otpWrapper: {
           flexDirection: 'row',
           marginVertical: 10,
       },
       otpButton: {
           width: 40,
           height: 60,
           borderRadius: 40,
           marginHorizontal: 20,
           alignItems: 'center',
           justifyContent: 'center',
       },
       textOtp: {
           fontSize: 25,
           fontWeight: 'bold',
       },
       buttonResend: {
              fontSize: 14,
              fontWeight: 'bold',
              color: '#8a9af8',
              textTransform: 'uppercase',
       },
       buttonVerifyWrapper: {
           alignItems: 'center',
           marginVertical: 10,

       },
       buttonVerify: {
          backgroundColor: '#000000',
          paddingHorizontal: 30,
          paddingVertical: 20,
          width: '100%',
          alignItems: 'center',
          borderRadius: 10,
       },
       textButtonVerify: {
           color: '#fff',
           fontSize: 18,
           fontWeight: 'bold',
           textTransform: 'uppercase',
       },
       numpadWrapper: {
           flexDirection: 'row',
           justifyContent: 'space-around',
           marginVertical: 20,
       },
       numpad: {
           alignSelf: 'center',
       },
       numpadNumber: {
           fontWeight: 'bold',
           color: 'grey',
           fontSize: 24,
       },
    });

    return (
        <View style={styles.container}>
       
        <SafeAreaView>
        <View style={StyleSheet.header}>
        <TouchableOpacity> 
        <Icon name="chevron-left" size={24} style={styles.iconHeader}/>

        </TouchableOpacity>
        <View>
        <Text style={styles.headerTitle}>OTP Verification</Text>
        </View>
        <View
        style={{
            width: 40,
            
        }}
        />
        </View>
        </SafeAreaView>
        
        <View style={styles.content}>
            <Text style={styles.title}>Enter the OTP send to +9178779661</Text>
            
            </View>
            <View style={styles.otpWrapper}>
                <View
                 style=
                 {[
                     styles.otpButton,
                     { 
                         backgroundColor: 'grey',
                        },
                  ]}
                  />
                    
                
                <View
                 style=
                 {[
                     styles.otpButton,
                     { 
                         backgroundColor: 'grey',
                        },
                  ]}
                  />
                    
                
                <View
                 style=
                 {[
                     styles.otpButton,
                     { 
                         backgroundColor: 'grey',
                        }
                  ]}
                  />
                    
                
                <View
                 style=
                 {[
                     styles.otpButton,
                     { 
                         backgroundColor: 'grey',
                        },
                  ]}
                  />
                  </View>
                  
                  <View style={styles.buttonVerifyWrapper}>
                      <TouchableOpacity style={styles.buttonVerify}>
                          <Text style={styles.textButtonVerify}>Verify</Text>
                      </TouchableOpacity>
                  </View>
                  <Text style={styles.subtitle}>
                 Did not get OTP? Resend SMS
            </Text>
                    
              <View>
                  { numbers.map((chunk, index) => {
                      return (
                          <View key={index} style={styles.numpadWrapper}>
                              {chunk.map((number) => {
                                  return (
                                      <View key={number} style={styles.numpad}>
                                          <Text style={styles.numpadNumber}>{number}</Text>
                                  </View>
                                  );
                              
                                   })}
                                   </View>
                                 );
            
                                 })}
                                 <View style={styles.numpadWrapper}>
                                     <View style={{width: 20}} />
                                     <View style={styles.numpad}>
                                     <Text style={styles.numpadNumber}>0</Text>
                                     </View>
                                     <View style={styles.numpad}>
                                         <Icon name="delete"     size={24} style={{color: 'grey'}} />
                                 </View>
                                 </View>
                                 </View>
                                 </View>
                                 
    );
                                }

