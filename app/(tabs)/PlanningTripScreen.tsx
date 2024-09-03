import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const PlanningTripScreen = () => {
  const [hikingChecked, setHikingChecked] = useState(false);
  const [historicalChecked, setHistoricalChecked] = useState(false);
  const [natureChecked, setNatureChecked] = useState(false);
  const [beachChecked, setBeachChecked] = useState(false);
  const [categoryType, setCategoryType] = useState('solo');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Trending Trips</Text>
        </View>

        <View style={styles.trendingTripCard}>
          <Image
            source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelandleisureasia.com%2Fglobal%2Fdestinations%2Fsouth-asia%2Fbeautiful-places-to-visit-in-sri-lanka%2F&psig=AOvVaw2tFjA0wPrQcaovyi8pEdVI&ust=1725485657319000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLi5h5Ddp4gDFQAAAAAdAAAAABAE' }}
            style={styles.trendingTripImage}
          />
          <View style={styles.dotContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.planTripSection}>
          <Text style={styles.planTripTitle}>Plan a new trip</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Select Destinations</Text>
            <View style={styles.destinationImagesContainer}>
              <TouchableOpacity style={styles.arrowButton}>
                <Icon name="chevron-back" size={20} color="#000" />
              </TouchableOpacity>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.destinationImage} />
                <View style={styles.destinationImage} />
                <View style={styles.destinationImage} />
              </ScrollView>
              <TouchableOpacity style={styles.arrowButton}>
                <Icon name="chevron-forward" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox.Item 
              label="Hiking" 
              status={hikingChecked ? 'checked' : 'unchecked'} 
              onPress={() => setHikingChecked(!hikingChecked)}
            />
            <Checkbox.Item 
              label="Historical" 
              status={historicalChecked ? 'checked' : 'unchecked'} 
              onPress={() => setHistoricalChecked(!historicalChecked)}
            />
            <Checkbox.Item 
              label="Nature" 
              status={natureChecked ? 'checked' : 'unchecked'} 
              onPress={() => setNatureChecked(!natureChecked)}
            />
            <Checkbox.Item 
              label="Beach" 
              status={beachChecked ? 'checked' : 'unchecked'} 
              onPress={() => setBeachChecked(!beachChecked)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Days</Text>
            <View style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Category Type</Text>
            <View style={styles.selectInput}>
              <Picker
                selectedValue={categoryType}
                onValueChange={(itemValue) => setCategoryType(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Solo" value="solo" />
                <Picker.Item label="Friends" value="friends" />
                <Picker.Item label="Family" value="family" />
                <Picker.Item label="Couple" value="couple" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Members</Text>
            <View style={styles.input} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollViewContent: {
    paddingBottom: 80, // Add padding to the bottom to account for the menu bar
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  trendingTripCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  trendingTripImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  planTripSection: {
    padding: 16,
  },
  planTripTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
  },
  destinationImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowButton: {
    padding: 8,
  },
  destinationImage: {
    width: 60,
    height: 40,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
    borderRadius: 4,
  },
  checkboxContainer: {
    marginBottom: 16,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
  },
  picker: {
    height: 40,
  },
});

export default PlanningTripScreen;