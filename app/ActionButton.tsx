import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';

interface ActionButtonProps {
  text: string;
  style?: ViewStyle;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "rgba(255, 215, 0, 1)",
    position: "relative",
    width: 297,
    maxWidth: "100%",
    padding: "17px 33px",
  },
  buttonText: {
    color: "rgba(0, 0, 0, 1)",
    font: "400 20px Inter, sans-serif",
    textAlign: "center",
  },
});

export default ActionButton;