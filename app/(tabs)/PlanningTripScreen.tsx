import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlanningTripScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trending Trips</Text>
      </View>

      <View style={styles.trendingTripCard}>
        <Image
          source={{ uri: 'https://example.com/trending-trip-image.jpg' }}
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
              {/* Add destination images here */}
              <View style={styles.destinationImage} />
              <View style={styles.destinationImage} />
              <View style={styles.destinationImage} />
            </ScrollView>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon name="chevron-forward" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Days</Text>
          <View style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Category Type</Text>
          <View style={styles.selectInput}>
            <Text>Select</Text>
            <Icon name="chevron-down" size={20} color="#000" />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>members</Text>
          <View style={styles.input} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  selectInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});

export default PlanningTripScreen;