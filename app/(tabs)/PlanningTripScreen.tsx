import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const trending1 = require("../../assets/images/trending1.png");
const trending2 = require("../../assets/images/trending2.png");
const trending3 = require("../../assets/images/trending3.png");

const PlanningTripScreen = () => {
  const [hikingChecked, setHikingChecked] = useState(false);
  const [historicalChecked, setHistoricalChecked] = useState(false);
  const [natureChecked, setNatureChecked] = useState(false);
  const [beachChecked, setBeachChecked] = useState(false);
  const [categoryType, setCategoryType] = useState("solo");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const trendingImages = [trending1, trending2, trending3];

  const destinationImages = {
    hiking: [
      "https://example.com/hiking1.jpg",
      "https://example.com/hiking2.jpg",
    ],
    historical: [
      "https://example.com/historical1.jpg",
      "https://example.com/historical2.jpg",
    ],
    nature: [
      "https://example.com/nature1.jpg",
      "https://example.com/nature2.jpg",
    ],
    beach: ["https://example.com/beach1.jpg", "https://example.com/beach2.jpg"],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % trendingImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSelectedDestinationImages = () => {
    const selectedImages = [];
    if (hikingChecked) selectedImages.push(...destinationImages.hiking);
    if (historicalChecked) selectedImages.push(...destinationImages.historical);
    if (natureChecked) selectedImages.push(...destinationImages.nature);
    if (beachChecked) selectedImages.push(...destinationImages.beach);
    return selectedImages.length > 0
      ? selectedImages
      : Object.values(destinationImages).flat();
  };

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
            source={{ uri: trendingImages[currentImageIndex] }}
            style={styles.trendingTripImage}
          />
          <View style={styles.dotContainer}>
            {trendingImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentImageIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.planTripSection}>
          <Text style={styles.planTripTitle}>Plan a new trip</Text>

          <View style={styles.checkboxContainer}>
            <Checkbox.Item
              label="Hiking"
              status={hikingChecked ? "checked" : "unchecked"}
              onPress={() => setHikingChecked(!hikingChecked)}
            />
            <Checkbox.Item
              label="Historical"
              status={historicalChecked ? "checked" : "unchecked"}
              onPress={() => setHistoricalChecked(!historicalChecked)}
            />
            <Checkbox.Item
              label="Nature"
              status={natureChecked ? "checked" : "unchecked"}
              onPress={() => setNatureChecked(!natureChecked)}
            />
            <Checkbox.Item
              label="Beach"
              status={beachChecked ? "checked" : "unchecked"}
              onPress={() => setBeachChecked(!beachChecked)}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.destinationCarousel}
          >
            {getSelectedDestinationImages().map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.destinationImage}
              />
            ))}
          </ScrollView>

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
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Budget Range</Text>
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
    backgroundColor: "#F5FCFF",
  },
  scrollViewContent: {
    paddingBottom: 86,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  trendingTripCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  trendingTripImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#4CAF50",
  },
  planTripSection: {
    padding: 16,
  },
  planTripTitle: {
    fontSize: 20,
    fontWeight: "bold",
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
    borderColor: "#ccc",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
  },
  destinationImagesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    padding: 8,
  },
  destinationImage: {
    width: 60,
    height: 40,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
    borderRadius: 4,
  },
  checkboxContainer: {
    marginBottom: 16,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
  },
  picker: {
    height: 40,
  },
  destinationCarousel: {
    marginVertical: 16,
  },
  destinationImages: {
    width: 120,
    height: 80,
    marginRight: 8,
    borderRadius: 8,
  },
});

export default PlanningTripScreen;
