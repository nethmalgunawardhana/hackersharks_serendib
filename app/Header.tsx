import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9171743503959bdd1f38c593ea666fae924b4844a79f3e3454d5fc84f4f82e3?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf" }}
        style={styles.menuIcon}
      />
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/02571a5b77092a2098a3e2d33a6a9772ba2039c8ec3c887147fdbec666b477ee?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf" }}
        style={styles.profileIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    gap: 20,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  menuIcon: {
    borderRadius: 32,
    position: "relative",
    display: "flex",
    width: 54,
    flexShrink: 0,
    aspectRatio: "2.57",
  },
  profileIcon: {
    borderRadius: "0px 0px 0px 0px",
    position: "relative",
    display: "flex",
    width: 66,
    flexShrink: 0,
    margin: "auto 0",
    aspectRatio: "5.49",
  },
});

export default Header;