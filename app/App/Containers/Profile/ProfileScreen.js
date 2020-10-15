import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../../Components/Header/Header";
import Swiper from 'react-native-swiper'

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Profile",
      headerLayoutPreset: "center"
    };
  };
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.container}>
        <Text>1</Text>
      </View>
      <View style={styles.container}>
        <Text>2</Text>
      </View>
      <View style={styles.container}>
        <Text>3</Text>
      </View>
    </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1 :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2 :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide3 :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth : 4,
    borderColor : '#228B22',
    borderRadius : 10
  }
});
