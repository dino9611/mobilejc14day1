import React from 'react';
import {
    View,
} from 'react-native';

export const ViewWhite=(props)=>(
    <View style={{
      backgroundColor:'white',
      elevation:10,
      borderRadius:10,
      width:250,
      height:60,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:10
    }}>
      {props.children}
    </View>
)

export const ViewPadding=(props)=>{
    return(
      <View style={{...props.style,paddingHorizontal:20}}>
        {props.children}
      </View>
    )
}