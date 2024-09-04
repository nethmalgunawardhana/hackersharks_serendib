import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView, Image } from 'react-native';

const SettingsScreen = () => {
    const [isPushEnabled, setPushEnabled] = useState(false);
    const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

    const togglePushSwitch = () => setPushEnabled(previousState => !previousState);
    const toggleDarkModeSwitch = () => setDarkModeEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.container}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
