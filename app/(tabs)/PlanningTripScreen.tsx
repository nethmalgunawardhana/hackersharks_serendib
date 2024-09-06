import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

const trending1 = require("../../assets/images/trending1.png");
const trending2 = require("../../assets/images/trending2.png");
const trending3 = require("../../assets/images/trending3.png");

type DestinationType = "Hiking" | "Nature" | "Historical" | "Beach";

const PlanningTripScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [categoryType, setCategoryType] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState<
    DestinationType[]
  >([]);

  const trendingImages = [trending1, trending2, trending3];

  const destinationImages: Record<DestinationType, any> = {
    Hiking: require("../../assets/images/hiking1.png"),
    Nature: require("../../assets/images/nature1.png"),
    Historical: require("../../assets/images/historical1.png"),
    Beach: require("../../assets/images/beach1.png"),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % trendingImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleDestination = (destination: DestinationType) => {
    setSelectedDestinations((prev) =>
      prev.includes(destination)
        ? prev.filter((d) => d !== destination)
        : [...prev, destination]
    );
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
            source={trendingImages[currentImageIndex]}
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

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Select Destinations</Text>
            <View style={styles.destinationsContainer}>
              {(Object.keys(destinationImages) as DestinationType[]).map(
                (destination) => (
                  <TouchableOpacity
                    key={destination}
                    style={[
                      styles.destinationButton,
                      selectedDestinations.includes(destination) &&
                        styles.selectedDestination,
                    ]}
                    onPress={() => toggleDestination(destination)}
                  >
                    <Text style={styles.destinationText}>{destination}</Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.destinationCarousel}
          >
            {selectedDestinations.map((destination) => (
              <Image
                key={destination}
                source={destinationImages[destination]}
                style={styles.destinationImage}
              />
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Days</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Category Type</Text>
            <View style={styles.selectInput}>
              <Picker
                selectedValue={categoryType}
                onValueChange={(itemValue) => setCategoryType(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Solo" value="solo" />
                <Picker.Item label="Friends" value="friends" />
                <Picker.Item label="Family" value="family" />
                <Picker.Item label="Couple" value="couple" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Members</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Budget Range</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#4CAF50",
  },
  planTripSection: {
    padding: 16,
    backgroundColor: "#CCE2E2",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
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
    color: "#333",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: "#CCE2E2",
  },
  destinationsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  destinationButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8,
  },
  selectedDestination: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  destinationText: {
    color: "#333",
  },
  destinationCarousel: {
    marginVertical: 16,
  },
  destinationImage: {
    width: 200,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  picker: {
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default PlanningTripScreen;
