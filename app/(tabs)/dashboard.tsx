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
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db022c3db5ffba9effddfb4b81d422f2bd2c9d3796d67e0971f695a1f7d93ebc?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf',
    },
];

const upcomingTrips = [
    {
        name: 'NORTHERN HERITAGE',
        date: '30 August 2024',
        locations: ['Jaffna Fort', 'Point Pedro'],
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02c802d763d41a518ab424acf03d0ed562c8205e9177d17f844ce86f38be140d?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf', 
    },
    {
        name: 'EASTERN WONDER',
        date: '5 September 2024',
        locations: ['Trincomalee', 'Batticaloa'],
        image: 'https://images.squarespace-cdn.com/content/v1/57edf7a1579fb348b1262096/1698177238635-065Z7ASBB5UFXK232UK8/28525-86225.jpeg', 
    },
];

const guides = [
    { name: 'John Doe', city: 'Colombo', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3bfc0895c2778a938a3610b92b1fdb76884569a81070994efb0931b510e3d61?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf', rating: 5 },
    { name: 'James Smith', city: 'French/German', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3bfc0895c2778a938a3610b92b1fdb76884569a81070994efb0931b510e3d61?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf', rating: 4 },
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

            {/*<TouchableOpacity style={styles.fab}>*/}
            {/*    <FontAwesome name="plus" size={24} color="white" />*/}
            {/*</TouchableOpacity>*/}
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
            backgroundColor: '#fff',
            borderBottomLeftRadius: 20, 
            borderBottomRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 2, 
        },
        badge: {
            backgroundColor: '#FFD700',
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 20, 
            fontWeight: 'bold',
            color: '#333333', 
        },
        greeting: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#333', 
        },
        section: {
            marginBottom: 20,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            color: '#333', 
            marginBottom: 10,
        },
        tripCard: {
            backgroundColor: '#FFFFFF', 
            padding: 20,
            borderRadius: 15,
            marginHorizontal: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
        },
        tripCardCarousel: {
            backgroundColor: '#FFFFFF',
            padding: 15,
            borderRadius: 15,
            width: screenWidth * 0.8,
            marginLeft: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
        },
        tripHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        tripName: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333333', 
        },
        tripDate: {
            fontSize: 14,
            color: '#999999', 
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
            fontWeight: '600', 
        },
        guideCard: {
            backgroundColor: '#FFFFFF',
            padding: 15,
            borderRadius: 15,
            alignItems: 'center',
            width: screenWidth * 0.5,
            marginLeft: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
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
            color: '#333333',
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
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
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
