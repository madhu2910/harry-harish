import React from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



export default function App() {
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
       
       buttonVerifyWrapper: {
           alignItems: 'center',
           marginVertical: 10,

       },
       buttonVerify: {
          backgroundColor: '#fff',
          paddingHorizontal: 50,
          paddingVertical: 50,
          width: '100%',
          alignItems: 'center',
          borderRadius: 20,
       },
       textButtonVerify: {
           color: '#000000',
           fontSize: 18,
           fontWeight: 'bold',
           textTransform: 'uppercase',
       },
        buttonVverifyWrapper: {
           alignItems: 'center',
           marginVertical: 10,

       },
       buttonVerrify: {
          backgroundColor: '#fff',
          paddingHorizontal: 50,
          paddingVertical: 50,
          width: '100%',
          alignItems: 'center',
          borderRadius: 20,
       },
       textButttonVerify: {
           color: '#000000',
           fontSize: 18,
           fontWeight: 'bold',
           textTransform: 'uppercase',
       },
        buttonVeerifyWrapper: {
           alignItems: 'center',
           marginVertical: 10,

       },
       buttonVeerify: {
          backgroundColor: '#fff',
          paddingHorizontal: 50,
          paddingVertical: 50,
          width: '100%',
          alignItems: 'center',
          borderRadius: 20,
       },
       textButtonVeriify: {
           color: '#000000',
           fontSize: 18,
           fontWeight: 'bold',
           textTransform: 'uppercase',
       },
       buttonVerifyWrrapper: {
        alignItems: 'center',
        marginVertical: 10,

    },
    buttonVverify: {
       backgroundColor: '#000000',
       paddingHorizontal: 30,
       paddingVertical: 20,
       width: '100%',
       alignItems: 'center',
       borderRadius: 10,
    },
    textButtonVeerify: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
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
        <Text style={styles.headerTitle}>Refer your friends to Mopido and get rs. 50 each</Text>
        </View>
        <View
        style={{
            width: 40,
            
        }}
        />
        </View>
        </SafeAreaView>
        
       
                  <View style={styles.buttonVerifyWrapper}>
                      <TouchableOpacity style={styles.buttonVerify}>
                          <Text style={styles.textButtonVerify}>Current Referral Earn</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.buttonVverifyWrapper}>
                      <TouchableOpacity style={styles.buttonVerrify}>
                          <Text style={styles.textButttonVerify}>Link</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.buttonVeerifyWrapper}>
                      <TouchableOpacity style={styles.buttonVeerify}>
                          <Text style={styles.textButtonVeriify}>Your Referral Code</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.buttonVeriifyWrrapper}>
                      <TouchableOpacity style={styles.buttonVverify}>
                          <Text style={styles.textButtonVeerify}>Share Code</Text>
                      </TouchableOpacity>
                  </View>
                  
                    
              
                                 
                                 </View>
                                 
                                 
                                 
    );
                                }
