import { View, Text, StyleSheet, AsyncStorage, ScrollView , SafeAreaView  } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../../Components/Header/Header";
import Swiper from 'react-native-swiper';
import { get_bible } from './get_bible.js';
const bible = require('./GAE_bible_final.json');
const test = bible['gen']['1'];
const test1 = get_bible('gen', '1'); 
const animalList = ['cat','dog','cow'];
const one = '1'
class BibleCast extends React.Component{
  render(){
    return (
      <Text>
      {test1 + '\n' + animalList[0] + '\n' +animalList[1] + '\n' + animalList[2]}
      </Text>
    );
  }
}



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
    const menus = [get_bible('gen', '1'), get_bible('gen', '2'), get_bible('gen', '3'), get_bible('gen', '4')]
    const menuList = menus.map((menu, index) => (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} key = {index}>
          <Text>{menu}</Text>
        </ScrollView>
      </SafeAreaView>
      ));
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {menuList}
    </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  scrollView: {
    marginHorizontal: 1,
  },
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
