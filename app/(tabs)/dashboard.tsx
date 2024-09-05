import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const trips = [
    {
        name: 'HIGHLAND ESCAPE',
        date: '22 August 2024',
        nextStop: 'Nine Arch',
        locations: ['Queens', 'Park', 'Colombo Fort'],
        travelers: 9,
        cost: 'LKR 80,000',
        image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
];

const upcomingTrips = [
    {
        name: 'NORTHERN HERITAGE',
        date: '30 August 2024',
        locations: ['Jaffna Fort', 'Point Pedro'],
        image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
        name: 'EASTERN WONDER',
        date: '5 September 2024',
        locations: ['Trincomalee', 'Batticaloa'],
        image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
];

const guides = [
    { name: 'John Doe', city: 'Colombo', image: 'https://via.placeholder.com/80', rating: 5 },
    { name: 'James Smith', city: 'French/German', image: 'https://via.placeholder.com/80', rating: 4 },
];

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.badge}>Gold</Text>
                <Text style={styles.greeting}>Hi Harris!</Text>
                <TouchableOpacity>
                    <FontAwesome name="cog" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Current Trip</Text>
                {trips.map((trip, index) => (
                    <View key={index} style={styles.tripCard}>
                        <Image source={{ uri: trip.image }} style={styles.tripImage} />
                        <View style={styles.tripHeader}>
                            <Text style={styles.tripName}>{trip.name}</Text>
                            <Text style={styles.tripDate}>{trip.date}</Text>
                        </View>
                        <Text style={styles.tripDetailItem}>Next Stop: {trip.nextStop}</Text>
                        <View style={styles.tripDetails}>
                            {trip.locations.map((location, i) => (
                                <Text key={i} style={styles.tripDetailItem}>
                                    {location}
                                </Text>
                            ))}
                        </View>
                        <View style={styles.tripFooter}>
                            <Text style={styles.tripFooterItem}>{trip.travelers} Travelers</Text>
                            <Text style={styles.tripFooterItem}>{trip.cost}</Text>
                            <TouchableOpacity>
                                <Text style={styles.detailsButton}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Upcoming Trips</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {upcomingTrips.map((trip, index) => (
                        <View key={index} style={styles.tripCardCarousel}>
                            <Image source={{ uri: trip.image }} style={styles.tripImageCarousel} />
                            <View style={styles.tripHeader}>
                                <Text style={styles.tripName} numberOfLines={1} ellipsizeMode="tail">
                                    {trip.name}
                                </Text>
                                <Text style={styles.tripDate}>{trip.date}</Text>
                            </View>
                            <View style={styles.tripDetails}>
                                {trip.locations.map((location, i) => (
                                    <Text key={i} style={styles.tripDetailItem}>
                                        {location}
                                    </Text>
                                ))}
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.detailsButton}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Hire a Guide</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {guides.map((guide, index) => (
                        <View key={index} style={styles.guideCard}>
                            <Image source={{ uri: guide.image }} style={styles.guideImage} />
                            <Text style={styles.guideName}>{guide.name}</Text>
                            <Text style={styles.guideDetails}>{guide.city}</Text>
                            <View style={styles.ratingContainer}>
                                {[...Array(guide.rating)].map((_, i) => (
                                    <FontAwesome key={i} name="star" size={16} color="#FFD700" />
                                ))}
                            </View>
                            <TouchableOpacity style={styles.hireButton}>
                                <Text style={styles.hireButtonText}>Hire</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.fab}>
                <FontAwesome name="plus" size={24} color="white" />
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    badge: {
        backgroundColor: '#FFD700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    greeting: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    tripCard: {
        backgroundColor: '#e3f2fd',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    tripCardCarousel: {
        backgroundColor: '#e3f2fd',
        padding: 15,
        borderRadius: 10,
        width: screenWidth * 0.8,
        marginLeft: 20,
    },
    tripHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tripName: {
        fontSize: 16,
        fontWeight: 'bold',
        maxWidth: screenWidth * 0.5, // Limit the text width
    },
    tripDate: {
        fontSize: 14,
        color: '#666666',
    },
    tripDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    tripDetailItem: {
        fontSize: 14,
        color: '#666666',
    },
    tripFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tripFooterItem: {
        fontSize: 14,
        color: '#333333',
    },
    detailsButton: {
        color: '#007BFF',
        fontSize: 14,
    },
    guideCard: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: screenWidth * 0.5,
        marginLeft: 20,
    },
    guideImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    guideName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    guideDetails: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 10,
        textAlign: 'center',
    },
    hireButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    hireButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    tripImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    tripImageCarousel: {
        width: '100%',
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

