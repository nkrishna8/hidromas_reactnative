import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Button } from 'react-native';
import { getUser } from '../services/api'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';



export default function DashboardScreen() {

    const navigation = useNavigation();

    const [userData, setUserData] = useState("");
    var users = "";
    useEffect(() => {
        //    let data= getUser(79);
        //    console.log("DATA==>",data);
        //    setUserData(data);
        getUserData();
    });

    const getUserData = async () => {
        users = await getUser(79);
        // setUserData(users);
        console.log("usersData==>>", users);
    }

    const pendingCheckOuts = [
        { name: 'Tiryaki Erdoğan', checkInTime: '24 Nov 23 04:30 PM' },
        { name: 'Mataraci Sadli', checkInTime: '23 Nov 23 10:30 AM' },
        { name: 'Akbultu Nacar', checkInTime: '23 Nov 23 11:20 AM' },
        { name: 'Arasli Peynirci', checkInTime: '23 Nov 23 04:30 PM' },
        { name: 'Mataraci Sadli', checkInTime: '22 Nov 23 10:30 AM' },
    ];

    // console.log("userData====>>", users);

    const openDrawer = () => {
        console.log("openDraweropenDrawer");
        navigation.navigate('Menu');
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={openDrawer}><Icon name="menu" size={38} color="black" style={{ marginRight: 70 }} /></TouchableOpacity>
                    <Logo />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="login" size={24} color="white" />
                        <Text style={styles.buttonText}>Check ins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="map" size={24} color="white" />
                        <Text style={styles.buttonText}>Travel Expenses</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionTitle}>Pending Check Out</Text>
                <ScrollView>
                    {pendingCheckOuts.map((item, index) => (
                        <View key={index} style={styles.listItem}>
                            <View>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemTime}>
                                    <Icon name="login" size={22} color="gray" style={{ marginTop: 5 }} /> Check in: {item.checkInTime}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.checkOutButton}>
                                <Icon name="logout" size={24} color="white" style={{ textAlign: 'center' }} />
                                <Text style={styles.checkOutButtonText}>Check Out</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        padding: 12,
        // alignItems:'center'
        flexDirection: 'row',
        // justifyContent:
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 1,
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        width: '45%',
    },
    buttonText: {
        color: 'white',
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 16,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    itemName: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    itemTime: {
        color: 'gray',
        fontSize: 12,
    },
    checkOutButton: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 4,
    },
    checkOutButtonText: {
        color: 'white',
    }
});