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
  Button,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';

import {ViewPadding,ViewWhite} from './src/components'



const App= () => {
  const [page,setpage]=useState(1)
  const [data]=useState(['./assets/nasi.jpg','./assets/cooking.jpg','./assets/rendang.jpg','./assets/swim.jpg'])

  const onPencetPress=()=>{
    if(Platform.OS==='android'){
      console.log('ini android bro')
    }
    console.log('pencet ini')
  }

  const renderKotak=()=>{
    return data.map((val,index)=>{
      if(index%2==0){
        return(
          // touchable untuk bisa menekan atau press component selain button
          <TouchableWithoutFeedback key={index} onPress={onPencetPress}>
            <View style={{flexBasis:'50%',paddingRight:10,paddingVertical:5}}>
                <Image
                  style={{
                    height:150,
                    width:'100%',
                    borderRadius:5,
                  }}
                  source={require(`./assets/nasi.jpg`)}
                />
              <Text>rata kiri</Text>
            </View>
          </TouchableWithoutFeedback>
        )
      }else{
        return(
          <View key={index} style={{flexBasis:'50%',paddingVertical:5}}>
            <Image
              style={{
                height:150,
                width:'100%',
                borderRadius:5,
              }}
              source={require('./assets/cooking.jpg')}
            />
          <Text>rata kanan</Text>
        </View>
        )
      }
    })
  }

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
        />
      </View>
    )
  }else{

    return (
      <>
        <StatusBar backgroundColor="#ca2c37" barStyle='light-content'  />
        <SafeAreaView style={styles.kotak}>
          <ScrollView>
            <View style={{backgroundColor:'#ca2c37'}}>
              <ViewPadding
                style={{
                  paddingTop:40
                }}
              >
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
              </ViewPadding>
              <ScrollView
                horizontal
                style={{
                  marginVertical:20,
            
                }}
                showsHorizontalScrollIndicator={false}
              >
                <ViewWhite>
                  <Text>
                    1
                  </Text>
                </ViewWhite>
                <ViewWhite>
                  <Text>
                    1
                  </Text>
                </ViewWhite>
              </ScrollView>
            </View>
            <ViewPadding>
              <Text style={{marginVertical:5}}>Manage Human Resource</Text>
              <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                {renderKotak()}
              </View>
            </ViewPadding>

          </ScrollView>
          <View style={{
            height:50,
            flexDirection:'row',
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: -100,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 50
            }}>
            <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:'#ca2c37',fontWeight:'700'}}>Home</Text>
            </View>
            <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:'darkgray'}}>Icon</Text>
            </View>
            <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:'darkgray'}}>Icon</Text>
            </View>
            <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:'darkgray'}}>Icon</Text>
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
