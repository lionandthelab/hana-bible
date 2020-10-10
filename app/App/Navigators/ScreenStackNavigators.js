import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../Containers/Home/HomeScreen";
import SettingsScreen from "../Containers/Settings/SettingsScreen";
import ProfileScreen from "../Containers/Profile/ProfileScreen";
import SearchScreen from "../Containers/Search/SearchScreen";

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
  Settings: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
  Profile: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
  Search: { screen: SearchScreen }
});
