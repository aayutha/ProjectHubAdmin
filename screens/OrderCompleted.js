import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
const { width, height } = Dimensions.get('window');
function OrderCompleted({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [ordersCard, setOrderCards] = useState([]);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await getData();
        setRefreshing(false);
    }, []);
    const getData = async () => {
        const responseArray = [];
        firestore().collection('Orders').where('request', '==', 'Added').get()
            .then(res => {
                res.forEach(data => {
                    responseArray.push({ ...data.data(), id: data.id });
                });
                setOrderCards(responseArray);
                console.log(ordersCard)
            })
            .catch((e) => {
                console.log(e);
            })

    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <ScrollView style={styles.container} refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            <Text style={{ width: width, padding: 30, textAlign: "center", color: "black", fontWeight: "bold", fontSize: 30 }}>Added Order Section</Text>
            {
                ordersCard.map((item, index) => (
                    <View key={index} style={styles.orderCard}>
                        <Text style={[styles.text, { fontSize: 20 }]}>{item.projectname}</Text>
                        <Text style={[styles.text, { fontSize: 15, marginTop: 10, width: "100%" }]}>{item.description}</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={[styles.text, { fontSize: 15 }]}>{item.request}</Text>
                            <TouchableOpacity style={styles.button}
                                onPress={() => navigation.navigate("OrderComDetails", { details: item })}
                            >
                                <Text style={[styles.text, { color: "white", fontSize: 15 }]}>
                                    Details
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            }
            <View style={{ marginBottom: height / 6 }} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    orderCard: {
        width: width - 30,
        backgroundColor: "white",
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        elevation: 25,
        alignSelf: "center"
    },
    text: {
        fontWeight: "bold",
        color: "black"
    },
    button: {
        backgroundColor: "rgba(255,155,33,0.88)",
        width: 120,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default OrderCompleted