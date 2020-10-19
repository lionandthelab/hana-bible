import { View, Text, StyleSheet, AsyncStorage, ScrollView , SafeAreaView  } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../../Components/Header/Header";
import Swiper from 'react-native-swiper';
import { get_bible, get_date } from './get_bible.js';
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
    const today = new Date();
    today.toISOString().substring(0, 10);
    var tmp = today.toISOString().substring(0, 10).split('-');
    console.log(tmp);
    const menus = get_date(String(Number('01')),'1');
    const menuList = menus.map((menu,key) => (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
          {
        (function(){
          if(key === 0) 
            return(<Text>"hello world"</Text>);
          else
          return(<Text>123</Text>);
        })()
      }
          
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
