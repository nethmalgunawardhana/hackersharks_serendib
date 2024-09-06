import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


interface Guide {
  id: string;
  name: string;
  languages: string;
  age: number;
  location: string;
  totalTrips: number;
  telephone: string;
  email: string;
  ratePerHour: string;
  image: string;
  rating: number;
}


const guides: Guide[] = [
  {
    id: '1',
    name: 'M. SAMEERA PERERA',
    languages: 'English',
    age: 28,
    location: 'Jaffna',
    totalTrips: 15,
    telephone: '+94 77 4688 714',
    email: 'rangasaman1990@gmail.com',
    ratePerHour: '7$ per Hour',
    image: 'https://example.com/guide1.jpg',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'M. Namal PERERA',
    languages: 'English, Japan',
    age: 32,
    location: 'Kandy',
    totalTrips: 31,
    telephone: '+94 77 4688 714',
    email: 'rangasaman1990@gmail.com',
    ratePerHour: '10$ per Hour',
    image: 'https://example.com/guide2.jpg',
    rating: 4.5,
  },
];

const GuideCard: React.FC<{ guide: Guide }> = ({ guide }) => (
  <View style={styles.guideCard}>
    <Image source={{ uri: guide.image }} style={styles.guideImage} />
    <View style={styles.guideInfo}>
      <Text style={styles.guideName}>{guide.name}</Text>
      <Text style={styles.guideDetails}>Language: {guide.languages} Age: {guide.age} years</Text>
      <Text style={styles.guideDetails}>Base Location: {guide.location}</Text>
      <Text style={styles.guideDetails}>Total Trips: {guide.totalTrips}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{guide.rating}</Text>
        <Icon name="star" type="material" color="#FFD700" size={18} />
      </View>
      <Text style={styles.guideContact}>Telephone: {guide.telephone}</Text>
      <Text style={styles.guideContact}>Email: {guide.email}</Text>
      <Text style={styles.ratePerHour}>{guide.ratePerHour}</Text>
    </View>
    <TouchableOpacity style={styles.hireButton}>
      <Text style={styles.hireButtonText}>HIRE NOW</Text>
      <Icon name="arrow-right" type="material-community" color="#fff" size={18} />
    </TouchableOpacity>
  </View>
);

const TopGuides: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.header}>Top Guides</Text>
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Guide Name" />
        <TextInput style={styles.searchInput} placeholder="Base Location" />
        <TextInput style={styles.searchInput} placeholder="Language" />
        <TextInput style={styles.searchInput} placeholder="Date" />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollViewContent: {
    paddingBottom: 115, 
  },
  guideCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#00BFFF',
    borderWidth: 2,
  },
  guideImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  guideInfo: {
    flex: 1,
  },
  guideName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  guideDetails: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    marginRight: 5,
  },
  guideContact: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  ratePerHour: {
    fontSize: 14,
    color: '#FF6347',
    marginTop: 5,
  },
  hireButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
  searchContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  searchButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TopGuides;
