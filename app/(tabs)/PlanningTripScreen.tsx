import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanningTripScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Your Trip</Text>
      <Text style={styles.subtitle}>Start planning your next adventure!</Text>
      {/* Add more components for trip planning functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default PlanningTripScreen;