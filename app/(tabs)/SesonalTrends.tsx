import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, ListRenderItem } from 'react-native';
import { Icon } from 'react-native-elements';

// Define types for the event data
interface Event {
  id: string;
  title: string;
  location: string;
  image: string;
}

interface UpcomingEvent extends Event {
  date: string;
}

// Sample data with types
const eventsData: Event[] = [
  {
    id: '1',
    title: 'Food Festival',
    location: 'Badulla town',
    image: 'https://example.com/food-festival.jpg',
  },
  {
    id: '2',
    title: 'Book Fair',
    location: 'Colombo',
    image: 'https://example.com/book-fair.jpg',
  },
];

const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'Dance Show',
    location: 'Jaffna',
    date: '15-09-2024',
    image: 'https://example.com/dance-show.jpg',
  },
  {
    id: '2',
    title: 'Music Concert',
    location: 'Kandy',
    date: '20-09-2024',
    image: 'https://example.com/music-concert.jpg',
  },
  {
    id: '3',
    title: 'Art Exhibition',
    location: 'Colombo',
    date: '25-09-2024',
    image: 'https://example.com/art-exhibition.jpg',
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <View style={styles.card}>
    <Image source={{ uri: event.image }} style={styles.cardImage} />
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>{event.title}</Text>
      <Text style={styles.cardLocation}>{event.location}</Text>
    </View>
  </View>
);

const SesonalTrends: React.FC = () => {
  const renderEventCard: ListRenderItem<Event> = ({ item }) => <EventCard event={item} />;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.header}>Near By Events</Text>
      <FlatList
        data={eventsData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderEventCard}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.header}>Upcoming Events</Text>
      {upcomingEvents.map((event) => (
        <View style={styles.upcomingCard} key={event.id}>
          <Image source={{ uri: event.image }} style={styles.upcomingImage} />
          <View style={styles.upcomingInfo}>
            <Text style={styles.cardTitle}>{event.title}</Text>
            <Text style={styles.cardLocation}>{event.location}</Text>
            <Text style={styles.cardDate}>{event.date}</Text>
            <Icon name="heart-outline" type="material-community" color="#000" size={24} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollViewContent: {
    paddingBottom: 105, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 16,
    overflow: 'hidden',
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
  },
  cardImage: {
    height: 120,
    width: '100%',
  },
  cardInfo: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardLocation: {
    fontSize: 14,
    color: '#666',
  },
  upcomingCard: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  upcomingImage: {
    height: 120,
    width: 120,
  },
  upcomingInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardDate: {
    fontSize: 14,
    color: '#FF6347',
    marginTop: 5,
  },
});

export default SesonalTrends;
