import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    SettingsScreen: undefined;
    ProfileScreen: undefined;
};
type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SettingsScreen'>;


const SettingsScreen = () => { // Add navigation prop
    const [isPushEnabled, setPushEnabled] = useState(false);
    const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

    const togglePushSwitch = () => setPushEnabled(previousState => !previousState);
    const toggleDarkModeSwitch = () => setDarkModeEnabled(previousState => !previousState);
    const navigation = useNavigation<SettingsScreenNavigationProp>();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>
            <ScrollView>
                <View style={styles.profileSection}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://your-avatar-url.com' }} // Replace with your avatar URL
                    />
                    <Text style={styles.profileName}>Patrick Harris</Text>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowText}>Edit username</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowText}>Change password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowText}>Add a payment method</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>Push notifications</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isPushEnabled ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={togglePushSwitch}
                            value={isPushEnabled}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>Dark mode</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isDarkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={toggleDarkModeSwitch}
                            value={isDarkModeEnabled}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowText}>About us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowText}>Privacy policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#d6e9f9',
    },
    backButton: {
        padding: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    profileSection: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#d6e9f9',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rowText: {
        fontSize: 16,
    },
});

export default SettingsScreen;