import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function SeasonalEventsScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Near By Events Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Near By Events</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                        <View style={styles.eventCard}>
                            <Image
                                style={styles.eventImage}
                                source={{ uri: 'https://example.com/festival.jpg' }} // replace with your image URL
                            />
                            <Text style={styles.eventName}>Festival in Town</Text>
                        </View>
                        <View style={styles.eventCard}>
                            <Image
                                style={styles.eventImage}
                                source={{ uri: 'https://example.com/book-exhibition.jpg' }} // replace with your image URL
                            />
                            <Text style={styles.eventName}>Book Exhibition</Text>
                            <Text style={styles.eventLocation}>BA Exhibition Hall</Text>
                        </View>
                        {/* Add more event cards as needed */}
                    </ScrollView>
                </View>

                {/* Upcoming Event Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Upcoming Event</Text>
                    <View style={styles.eventCardLarge}>
                        <Image
                            style={styles.eventImageLarge}
                            source={{ uri: 'https://example.com/dolphin-show.jpg' }} // replace with your image URL
                        />
                        <View style={styles.eventInfo}>
                            <Text style={styles.eventNameLarge}>Dolphin Show</Text>
                            <Text style={styles.eventLocation}>Trincomalee</Text>
                            <Text style={styles.eventDate}>19-09-2024</Text>
                        </View>
                        <TouchableOpacity style={styles.favoriteButton}>
                            <Ionicons name="heart-outline" size={24} color="#FF6347" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollContainer: {
        paddingVertical: 20,
    },
    section: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    horizontalScroll: {
        flexDirection: 'row',
    },
    eventCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginRight: 15,
        overflow: 'hidden',
        width: 140,
    },
    eventImage: {
        width: '100%',
        height: 100,
    },
    eventName: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 14,
    },
    eventLocation: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        fontSize: 12,
        color: '#777',
    },
    eventCardLarge: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
    },
    eventImageLarge: {
        width: '100%',
        height: 200,
    },
    eventInfo: {
        padding: 10,
    },
    eventNameLarge: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    eventLocation: {
        fontSize: 14,
        color: '#777',
        marginVertical: 5,
    },
    eventDate: {
        fontSize: 14,
        color: '#777',
    },
    favoriteButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
    },
});
