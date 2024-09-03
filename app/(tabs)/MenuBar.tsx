import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PlanningTripScreen from './PlanningTripScreen';
import ProfileScreen from "@/app/profile";
import SesonalTrends from './SesonalTrends';
import TourGuide from './TourGuide';
import TopGuides from './TourGuide';


const Tab = createBottomTabNavigator();

// Placeholder screen components
const HomeScreen = () => <View style={styles.screen}></View>;



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
                    elevation: 0,
                    backgroundColor: '#E6F3F5',
                    borderRadius: 15,
                    height: 90,
                }
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MenuBar;
