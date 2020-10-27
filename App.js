/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  Button
} from 'react-native';



const App= () => {
  const [page,setpage]=useState(1)
  if(page==1){
    return(
      
      <View>
        <Text style={{color:'black',fontSize:11}}>
          Dunder martin,inc
        </Text>
        <Button
          onPress={()=>setpage(2)}
          title ='pencet dong'
          color="#ca2c37"
          // onPress={()=>console.log(2)}
        />
      </View>
    )
  }else{

    return (
      <>
        <StatusBar backgroundColor="#ca2c37" barStyle='light-content'  />
        <SafeAreaView style={styles.kotak}>
          <View style={{backgroundColor:'#ca2c37',paddingVertical:40,paddingHorizontal:20}}>
            <View>
              <Text style={{color:'white',fontSize:11}}>
                Dunder martin,inc
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:3}}>
                <Text style={{color:'white',fontSize:25,fontWeight:'700'}}>
                  Scotty totty
                </Text>
                <Text style={{color:'white',fontSize:12}}>
                  General Manager
                </Text>
              </View>
              <View style={{paddingLeft:30,flex:1}}>
                <Image
                  style={{
                    height:60,
                    width:60,
                    borderRadius:30,
                  }}
                  source={{
                    uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  }}
                  // source={require('./assets/nasi.jpg')}
                />
              </View>
            </View>
            <View style={{
              backgroundColor:'white',
              flexDirection:'row',
              elevation:10,
              marginTop:20,
              flexWrap:'wrap',
              borderRadius:10  
            }}>
              <View style={styles.kotak1}>
                <Text>
                  1
                </Text>
              </View>
              <View style={styles.kotak2}>
                <Text>
                  2
                </Text>
              </View>
              <View style={styles.kotak3}>
                <Text>
                  3
                </Text>
              </View>
              <View style={styles.kotak1}>
                <Text>
                  1
                </Text>
              </View>
              <View style={styles.kotak2}>
                <Text>
                  2
                </Text>
              </View>
              <View style={styles.kotak3}>
                <Text>
                  3
                </Text>
              </View>
            </View>
          </View>
  
          
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
    kotak:{
      flex:1,
      // paddingVertical:20
      // flexDirection:'row', // by default flexdirection adalah column
      // justifyContent:'center',
      // alignItems:'center',
      // backgroundColor:'black',
      // flexWrap:'wrap'
    },
    kotak1:{
      // backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      flexBasis:'33.3%',
      height:60
    },
    kotak2:{
      // backgroundColor:'yellow',
      justifyContent:'center',
      alignItems:'center',
      flexBasis:'33.3%',
      height:60
    },
    kotak3:{
      // backgroundColor:'purple',
      justifyContent:'center',
      alignItems:'center',
      flexBasis:'33.3%',
      height:60
    },
    kotak4:{
      backgroundColor:'green',
      flex:1
    }

});

export default App;
