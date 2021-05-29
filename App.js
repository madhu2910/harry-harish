import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



export default function  App () {

   
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
       
       inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
      },

      subTitle: {
        color: '#000000',
        textAlign: 'center',
        paddingVertical: 20,
        fontSize: 20,
        fontWeight: '600',

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
        <Text style={styles.headerTitle}>Welcome To Mopedo</Text>
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
          placeholder="Mobile. No"
         
          onChangeText={(val) => this.updateInputVal(val, 'phonenumber')}
          
        />

<View style={styles.content}>
            <Text style={styles.title}>Note You will recieve 4-digit OTP code on entered mobile number for verification</Text>
            
            </View>
        
       
                  
                  <View style={styles.buttonVerifyWrrapper}>
                      <TouchableOpacity style={styles.buttonVverify}>
                          <Text style={styles.textButtonVeerify}>Get OTP</Text>
                      </TouchableOpacity>
                  </View>
                  
                    
              
                                 
                                 </View>
                                 
                                 
                                 
    );
                                }