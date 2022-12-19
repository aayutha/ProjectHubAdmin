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
const Review=()=>{
    const [ordersCard,setOrderCards]=useState([]);
    const getData=async()=>{
        const responseArray=[];
        firestore().collection('Orders').where('request', '==', 'pending').get()
        .then(res => {
            res.forEach(data => {
                responseArray.push({...data.data() , id:data.id });
            });
            setOrderCards(responseArray);
        })
        .catch((e)=>{
            console.log(e);
        })

    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
            <ScrollView style={styles.container}>
                <Text style={{width:width,padding:20,textAlign:"center",color:"black",fontWeight:"bold",fontSize:40}}>Review Section</Text>
                {
                    ordersCard.map((item,index)=>(
                        <View key={index} style={styles.orderCard}>
                            <Text style={[styles.text,{fontSize:20}]}>{item.projectname}</Text>
                            <Text style={[styles.text,{fontSize:15,marginTop:10,width:"100%"}]}>{item.description}</Text>
                            <View style={{flexDirection: 'row',alignItems:"center",justifyContent:"space-between"}}>
                                <Text style={[styles.text,{fontSize:15}]}>{item.request}</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={[styles.text,{color:"white",fontSize:15}]}>
                                        Details
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
                <View style={{marginBottom:height/6}}/>
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
export default Review