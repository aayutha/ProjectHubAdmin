import { StyleSheet, Text, View, Dimensions,ScrollView } from 'react-native'
import React, { useEffect,useState } from 'react'
import firestore from '@react-native-firebase/firestore';
const { width, height } = Dimensions.get('window');
function Query() {
    const [orderDetail, setOrderDetail] = useState([]);
    useEffect(()=>{
        getDatabase();
    },[])
    const getDatabase = async() => {
       
            let resultArray = [];
            try {
              const user = await firestore().collection('UserQuery').get();
              user.forEach((item) => {
                resultArray.push({ id: item.id, ...item.data() });
              });
              setOrderDetail(resultArray);
            } catch (error) {
              console.log(error)
            }
        
    }
  return (
    <>
    <ScrollView>
     <View style={{marginTop:30}}>
        <Text  style={{color:"black",textAlign:"center",fontSize:40}}>Query</Text>
     </View>
     <View style={{marginTop:50}}>
        {
             orderDetail.map((item, index) => (
                <>
                    <View style={{ margin:10,backgroundColor:"white",width:330,height:200,marginLeft:30,borderRadius:10,elevation:25}}>
                    <Text style={{ fontSize: 15, fontFamily: 'SourceSansPro-SemiBold', color: "black",margin:10 }}>First Name: {item.FName}</Text>
                     <Text style={{ fontSize: 15, fontFamily: 'SourceSansPro-SemiBold', color: "black",margin:10 }}>Last Name: {item.LName}</Text>
                     <Text style={{ fontSize: 15, fontFamily: 'SourceSansPro-SemiBold', color: "black",margin:10 }}>Mobile Number: {item.MobileNumber}</Text>
                     <Text style={{ fontSize: 15, fontFamily: 'SourceSansPro-SemiBold', color: "black",margin:10 }}>Project Description: {item.ProjectDesc}</Text>
                     </View>
             </>
             ))
        }
     </View>
     <View style={{ marginBottom: 200 }} />
    </ScrollView>
    </>
  )
}

export default Query

const styles = StyleSheet.create({
  
})