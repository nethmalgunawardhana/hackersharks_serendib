import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import ActionButton from './ActionButton';
import { SplashScreen } from 'expo-router';

const TravelApp: React.FC = () => {
  return (
    <Image
      resizeMode="cover"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5e03bd00f918d2addee2726a8def0d04574e8d88370f17d21d44ded7cdfe49e?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf" }}
      style={styles.backgroundImage}
    >
      <Header />
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fdab022b9c82481f581d670c9a808e2f7d25628f3d2005ec15165f455ec9eef?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf" }}
        style={styles.logoImage}
      />
      <WelcomeMessage />
      <ActionButton
        text="Create an Account"
        style={styles.createAccountButton}
      />
      <ActionButton
        text="Already have an account"
        style={styles.loginButton}
      />
    </Image>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "relative",
    display: "flex",
    aspectRatio: "0.46",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    margin: "0 auto",
    padding: "12px 21px 187px",
  },
  logoImage: {
    position: "relative",
    display: "flex",
    width: 200,
    maxWidth: "100%",
    margin: "66px 0 0 10px",
    aspectRatio: 1,
  },
  createAccountButton: {
    marginTop: 78,
  },
  loginButton: {
    marginTop: 53,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.35)",
  },
});

export default TravelApp;