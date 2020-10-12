import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../../Components/Header/Header";

export default class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Search",
      headerLayoutPreset: "center"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to my search page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth : 4,
    borderColor : '#228B22',
    borderRadius : 10
  }
});
