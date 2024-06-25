import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View> */}

      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://c8.alamy.com/comp/KPABX9/handsome-man-with-gentle-smile-KPABX9.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.cameraIconContainer}>
            <Icon name="camera-alt" size={20} color="#FFFFFF" />
          </View>
        </View>
        <Text style={styles.profileName}>Alpaslan Demirci</Text>
        <Text style={styles.profileDesignation}>User Designation</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Icon name="person" size={24} color="#9c9998" style={styles.infoIcon} />
          <TextInput
            style={styles.infoInput}
            value="alpaslan_demirci"
            editable={false}
          />
        </View>
        <View style={styles.infoItem}>
          <Icon name="email" size={24} color="#9c9998" style={styles.infoIcon} />
          <TextInput
            style={styles.infoInput}
            value="mailid@domain.com"
            editable={false}
          />
        </View>
        <TouchableOpacity style={styles.resetPasswordButton}>
          <Icon name="lock" size={24} color="#9c9998" style={styles.infoIcon} />
          <Text style={styles.resetPasswordText}>Reset Password</Text>
          <Icon name="chevron-right" size={24} color="#C7C7CC" style={styles.arrowIcon} />
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 32,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 64,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 70,
    borderColor:"#9db8cc",
    borderWidth:1
  },
  cameraIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#007AFF',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  profileDesignation: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
  infoSection: {
    marginTop: 122,
    paddingHorizontal: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  infoIcon: {
    marginRight: 16,
  },
  infoInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  resetPasswordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  resetPasswordText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default SettingsScreen;