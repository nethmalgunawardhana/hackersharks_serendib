import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const WelcomeMessage: React.FC = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>
        Welcome to the one stop for your travel needs in Sri Lanka
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    position: "relative",
    marginTop: 72,
  },
  welcomeText: {
    color: "rgba(255, 255, 255, 1)",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.35)",
    textAlign: "center",
    font: "700 30px Inter, sans-serif",
  },
});

export default WelcomeMessage;