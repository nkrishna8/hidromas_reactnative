import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';


const MenuScreen = () => {

  const navigation = useNavigation();

const logoutProfile=()=>{
  navigation.navigate('Login');
}
const gotoSettings=()=>{
  navigation.navigate('Settings');
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://c8.alamy.com/comp/KPABX9/handsome-man-with-gentle-smile-KPABX9.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Alpaslan Demirci</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="mail" size={14} color="white" style={{marginTop:2}}/>
            <Text style={styles.email}>mail@domain.com</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="phone" size={14} color="white" style={{marginTop:2}}/>
            <Text style={styles.phone}>+1 23456 67890</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={gotoSettings}>
          <Icon name="settings" size={24} color="#4CAF50" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="login" size={24} color="#2196F3" />
          <Text style={styles.menuText}>Check-Ins</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="account-balance-wallet" size={24} color="#FFC107" />
          <Text style={styles.menuText}>My Expenses</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={logoutProfile}>
          <Icon name="logout" size={24} color="#757575" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 0.1</Text>
          <Logo />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userInfo: {
    alignItems: 'center',
    marginTop:5
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  email: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft:5
  },
  phone: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft:5

  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#212121',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logoutText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#757575',
  },
  versionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  versionText: {
    fontSize: 12,
    color: '#757575',
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default MenuScreen;