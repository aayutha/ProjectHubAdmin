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
    const [detailState,setDetailState]=useState(null);
    useEffect(()=>{
        console.log(details)
        setDetailState(details);
    },[])
    return(
        <>
            <ScrollView style={styles.container}>
                {
                    detailState===null?null:
                    <>
                        <Text style={{width:width,padding:20,textAlign:"center",color:"black",fontWeight:"bold",fontSize:40}}>Review Details</Text>
                        <View style={{width:"100%",paddingHorizontal:20,paddingVertical:10}}>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:15}}>
                                Project Name
                            </Text>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:25,paddingHorizontal:10}}>
                                {detailState.projectname}
                            </Text>
                        </View>
                        <View style={{width:"100%",paddingHorizontal:20,paddingVertical:10}}>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:15}}>
                                Project description
                            </Text>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:25,paddingHorizontal:10}}>
                                {detailState.description}
                            </Text>
                        </View>
                        <View style={{width:"100%",paddingHorizontal:20,paddingVertical:10}}>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:15}}>
                                Project duration 
                            </Text>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:25,paddingHorizontal:10}}>
                                {detailState.duration}  
                            </Text>
                        </View>
                        <View style={{width:"100%",paddingHorizontal:20,paddingVertical:10}}>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:15}}>
                                Customer Main
                            </Text>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:25,paddingHorizontal:10}}>
                                {detailState.email}
                            </Text>
                        </View>
                        <View style={{width:"100%",paddingHorizontal:20,paddingVertical:10}}>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:15}}>
                                Project price
                            </Text>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:25,paddingHorizontal:10}}>
                                {detailState.price}
                            </Text>
                        </View>
                        <View style={{width:"100%",paddingHorizontal:20,paddingVertical:10}}>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:15}}>
                                Project Name
                            </Text>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:25,paddingHorizontal:10}}>
                                {detailState.projectname}
                            </Text>
                        </View>
                        <View style={{width:"100%",paddingHorizontal:20,paddingVertical:10}}>
                            <Text style={{width:width,color:"black",fontWeight:"bold",fontSize:20}}>
                            Technology User Wants
                            </Text>
                            <View style={{flexDirection:"row",width:'90%',alignSelf:"center",marginTop:10}}>
                                {
                                    detailState.projectTech.map((val)=>(
                                        <Text
                                            style={{
                                                backgroundColor:"orange",
                                                paddingVertical:10,
                                                paddingHorizontal:15,
                                                borderRadius:5,
                                                color:"white",
                                                fontWeight:"bold",
                                                marginHorizontal: 10,
                                            }}
                                        >
                                            {val}
                                        </Text>
                                    ))
                                }
                            </View>
                        </View>
                    </>
                }
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