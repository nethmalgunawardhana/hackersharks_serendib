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


// Remove the duplicate declaration of 'Tab'
// const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={styles.customTabBarButton}
        onPress={onPress}
    >
        <View style={styles.customButtonBackground}>
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

                tabBarStyle: styles.tabBarStyle,
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
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#E6F3F5',
        borderRadius: 15,
        height: 90,
        paddingBottom: 10, 
    },
    customTabBarButton: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonBackground: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FF9500',
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default MenuBar;