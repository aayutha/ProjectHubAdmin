import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const {width,height}=Dimensions.get('window');
const ReviewDetails=({route})=>{

    const {details} = route.params;
    useEffect(()=>{
        console.log(details)
    },[])
    return(
        <>
            <ScrollView style={styles.container}>
                <Text style={{width:width,padding:20,textAlign:"center",color:"black",fontWeight:"bold",fontSize:40}}>Review Details</Text>
                
            </ScrollView>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent: 'center',
        // alignItems:"center",
        backgroundColor:"white",
    },
    orderCard:{
        width: width-30,
        backgroundColor:"white",
        marginVertical:10,
        padding:20,
        borderRadius:10,
        elevation:25,
        alignSelf:"center"
    },
    text:{
        fontWeight:"bold",
        color:"black"
    },
    button:{
        backgroundColor:"rgba(255,155,33,0.88)",
        width:120,
        height:40,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default ReviewDetails