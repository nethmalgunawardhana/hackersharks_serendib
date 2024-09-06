import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, ListRenderItem, TouchableOpacity } from 'react-native';
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
    image: '../../assets/images/food-festival.jpg',
  },
  {
    id: '2',
    title: 'Book Fair',
    location: 'Colombo',
    image: '../../assets/images/book fair.jpg',
  },
];

const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'Dance Show',
    location: 'Jaffna',
    date: '15-09-2024',
    image: '../../assets/images/dance show.jpg',
  },
  {
    id: '2',
    title: 'Music Concert',
    location: 'Kandy',
    date: '20-09-2024',
    image: '../../assets/images/music concert.jpg',
  },
  {
    id: '3',
    title: 'Art Exhibition',
    location: 'Colombo',
    date: '25-09-2024',
    image: '../../assets/images/art excibition.jpg',
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
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set());

  const handleLikePress = (id: string) => {
    setLikedEvents((prev) => {
      const newLikedEvents = new Set(prev);
      if (newLikedEvents.has(id)) {
        newLikedEvents.delete(id);
      } else {
        newLikedEvents.add(id);
      }
      return newLikedEvents;
    });
  };

  const renderEventCard: ListRenderItem<Event> = ({ item }) => <EventCard event={item} />;

  const renderUpcomingEventCard: ListRenderItem<UpcomingEvent> = ({ item }) => (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardInfo}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleLikePress(item.id)}>
              <Icon
                  name={likedEvents.has(item.id) ? 'heart' : 'heart-outline'}
                  type="material-community"
                  color={likedEvents.has(item.id) ? 'red' : '#000'}
                  size={24}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.cardLocation}>{item.location}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
      </View>
  );

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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
              data={upcomingEvents}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingEventCard}
              showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
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
    marginHorizontal: 8, 
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  cardLocation: {
    fontSize: 14,
    color: '#666',
  },
  cardDate: {
    fontSize: 14,
    color: '#FF6347',
    marginTop: 5,
  },
});

export default SesonalTrends;
