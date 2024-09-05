import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PlanningTripScreen from './PlanningTripScreen';
import ProfileScreen from "./profile";
import SesonalTrends from './SesonalTrends';
import TopGuides from './TourGuide';
import HomeScreen from './dashboard';

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#FF9500',
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();

const MenuBar = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#E6F3F5',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                },
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="home-outline" size={24} color={focused ? '#FF9500' : 'black'} />
                ),
            }} />
            <Tab.Screen name="Search" component={TopGuides} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="search-outline" size={24} color={focused ? '#FF9500' : 'black'} />
                ),
            }} />
            <Tab.Screen
                name="PlanningTrip"
                component={PlanningTripScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="add" size={40} color="white" />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} onPress={() => navigation.navigate('PlanningTrip')} />
                    )
                }}
            />
            <Tab.Screen name="Bookmark" component={SesonalTrends} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="bookmark-outline" size={24} color={focused ? '#FF9500' : 'black'} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="person-outline" size={24} color={focused ? '#FF9500' : 'black'} />
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default MenuBar;