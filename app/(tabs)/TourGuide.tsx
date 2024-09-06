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
    email: 'rangasan1990@gmail.com',
    ratePerHour: '7$ per Hour',
    image: '../assets/images/user.png',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'M. SAMEERA PERERA',
    languages: 'English, Japan',
    age: 32,
    location: 'Kandy',
    totalTrips: 31,
    telephone: '+94 77 4688 714',
    email: 'rangasaman1990@gmail.com',
    ratePerHour: '10$ per Hour',
    image: '../assets/images/user.png',
    rating: 4.5,
  },
];

// const GuideCard: React.FC<{ guide: Guide }> = ({ guide }) => (
//   <View style={styles.guideCard}>
//     <Image source={{ uri: guide.image }} style={styles.guideImage} />
//     <View style={styles.guideInfo}>
//       <Text style={styles.guideName}>{guide.name}</Text>
//       <Text style={styles.guideDetails}>Language: {guide.languages} Age: {guide.age} years</Text>
//       <Text style={styles.guideDetails}>Base Location: {guide.location}</Text>
//       <Text style={styles.guideDetails}>Total Trips: {guide.totalTrips}</Text>
//       <View style={styles.ratingContainer}>
//         <Text style={styles.ratingText}>{guide.rating}</Text>
//         <Icon name="star" type="material" color="#FFD700" size={18} />
//       </View>
//       <Text style={styles.guideContact}>Telephone: {guide.telephone}</Text>
//       <Text style={styles.guideContact}>Email: {guide.email}</Text>
//       <Text style={styles.ratePerHour}>{guide.ratePerHour}</Text>
//     </View>
//     <TouchableOpacity style={styles.hireButton}>
//       <Text style={styles.hireButtonText}>HIRE NOW</Text>
//       <Icon name="arrow-right" type="material-community" color="#fff" size={18} />
//     </TouchableOpacity>
//   </View>
// );

const GuideCard: React.FC<{ guide: Guide }> = ({ guide }) => (
  <View style={styles.guideCard}>
    <View style={styles.guideContent}>
      <Image source={{ uri: guide.image }} style={styles.guideImage} />
      <View style={styles.guideInfo}>
        <Text style={styles.guideName}>{guide.name}</Text>
        <Text style={styles.guideDetails}>Language: {guide.languages} Age: {guide.age} years</Text>
        <Text style={styles.guideDetails}>Base Location: {guide.location}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{guide.rating}</Text>
          <Icon name="star" type="material" color="#FFD700" size={18} />
        </View>
      </View>
    </View>

    <View style={styles.contactContainer}>
      <View style={styles.guideContactContainer}>
        <Text style={styles.guideContact}>Telephone: {guide.telephone}</Text>
        <Text style={styles.guideContact}>Email: {guide.email}</Text>
        <Text style={styles.ratePerHour}>{guide.ratePerHour}</Text>
      </View>
      <TouchableOpacity style={styles.hireButton}>
        <Text style={styles.hireButtonText}>HIRE NOW</Text>
        <Icon name="arrow-right" type="material-community" color="#fff" size={18} />
      </TouchableOpacity>
    </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 115,
  },
  guideCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    borderColor: '#00BFFF',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin:5,
  },
  guideContent: {
    flexDirection: 'row', // Places image and content side by side
    alignItems: 'flex-start',
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
    marginBottom: 4,
  },
  guideDetails: {
    fontSize: 13,
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 13,
    marginRight: 4,
  },
  contactContainer: {
    flexDirection: 'row', // This ensures that contact info and button are in the same row
    justifyContent: 'space-between',
    marginTop: 10,
  },
  guideContactContainer: {
    flex: 1,
  },
  guideContact: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  ratePerHour: {
    fontSize: 14,
    color: '#FF6347',
    marginTop: 6,
    fontWeight: 'bold',
  },
  hireButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 14,
  },
  searchContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    marginTop: 30,
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    fontSize: 14,
    color: '#333333',
  },
  searchButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TopGuides;
