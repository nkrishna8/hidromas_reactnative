import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native';
import { login } from '../services/api';
import Logo from '../components/Logo';
import DashboardScreen from './DashboardScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async () => {

    try {
      const response = await login(username, password);
      console.log("RESPONSE==>>", response);
      if (response.msg === "Success") {
        navigation.navigate('Dashboard');
        setUsername("");
        setPassword("");
      } else {
        setError('Invalid credentials');
        ToastAndroid.show('Invalid Credentials!', ToastAndroid.LONG);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Logo />
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Username</Text>
        {/* <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        /> */}
        <View style={styles.infoItem}>
          <Icon name="person" size={24} color="#9c9998" style={styles.infoIcon} />
          <TextInput
            style={styles.infoInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>


        <Text style={styles.label}>Password</Text>
        {/* <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        /> */}
        
        <View style={styles.infoItem}>
        <Icon name="lock" size={24} color="#9c9998" style={styles.infoIcon} />
          <TextInput
            style={styles.infoInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.rightAlign}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        {/* {error ? <Text style={styles.errorText}>{error}</Text> : null} */}
        <Text style={styles.version}>Version 0.1</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 35,
    borderColor: 'transparent'

  },
  rightAlign: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 80,
    color: '#4f4e4c'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007AFF',
    marginTop: 10,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  version: {
    position: 'absolute',
    bottom: 10,
    color: '#999',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: 'bold',
    marginLeft: 20
  },

  headerContainer: {
    backgroundColor: '#d4d3cf',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    // backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  infoIcon: {
    marginRight: 16,
  },
  infoInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },

});