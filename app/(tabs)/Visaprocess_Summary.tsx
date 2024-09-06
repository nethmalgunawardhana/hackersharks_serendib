import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Additional: undefined;
  Summary: undefined;
  Payment: undefined;
};

type SummaryNavigationProp = StackNavigationProp<RootStackParamList, 'Summary'>;

const ApplicationSummary: React.FC = () => {
  const navigation = useNavigation<SummaryNavigationProp>();

  const feeBreakdown = [
    { description: 'Visa Fee* (Tourist - 30 Days Single Entry Visa)', amount: 40 },
    { description: 'Service Fee* (Tourist - 30 Days Single Entry Visa)', amount: 10 },
    { description: 'Transaction Fee*', amount: 0 },
  ];

  const totalFee = feeBreakdown.reduce((sum, fee) => sum + fee.amount, 0);

  const renderFeeDescription = (description: string) => {
    const parts = description.split('*');
    return (
      <Text style={styles.feeDescription}>
        {parts[0]}
        <Text style={styles.asterisk}>*</Text>
        {parts[1] || ''}
      </Text>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Application Summary</Text>

      <View style={styles.feeTable}>
        {feeBreakdown.map((fee, index) => (
          <View key={index} style={styles.feeRow}>
            {renderFeeDescription(fee.description)}
            <Text style={styles.feeAmount}>USD {fee.amount}</Text>
          </View>
        ))}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>USD {totalFee}</Text>
        </View>
        <View style={styles.grandTotalRow}>
          <Text style={styles.grandTotalText}>Grand Total</Text>
          <Text style={styles.grandTotalAmount}>USD {totalFee}</Text>
        </View>
      </View>

      <Text style={styles.declarationText}>
        I solemnly declare that the information furnished by me in this application is true and correct. I have not willfully suppressed any information that is required. In the event of issue of visa, I shall comply with the terms and conditions subject to which the visa is granted, and that I shall not engage myself in any business or employment activities other than the purpose for which the visa is granted.
      </Text>

      <TouchableOpacity style={styles.checkboxContainer}>
        <View style={styles.checkbox} />
        <Text style={styles.checkboxLabel}>I accept the<Text style={styles.highlight}> Terms and Conditions</Text><Text style={styles.required}>*</Text></Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Documents to be carried at the Airport</Text>
      <Text style={styles.documentText}>
        1. A printed copy of your visa approval letter issued by the ETA of Sri Lanka.{'\n'}
        2. Your Passport with at least six months validity from the date of entry into Sri Lanka.{'\n'}
        3. Confirmed ticket or proof of onward travel from Sri Lanka.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.buttonText}>Continue to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  required: {
    color: 'red',
  },
  header: {
    fontSize: 48,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  feeTable: {
    marginBottom: 20,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feeDescription: {
    fontSize: 20,
    fontFamily: 'outrun-future',
  },
  asterisk: {
    color: 'red',
    fontSize: 18,
    fontFamily: 'outrun-future',
  },
  highlight: {
    color: '#ff6600',
  },
  feeAmount: {
    fontSize: 20,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 22,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 22,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
    color: '#008000',
  },
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#000',
    paddingTop: 10,
  },
  grandTotalText: {
    fontSize: 26,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
  },
  grandTotalAmount: {
    fontSize: 24,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
    color: '#008000',
  },
  declarationText: {
    fontSize: 20,
    fontFamily: 'outrun-future',
    marginBottom: 20,
    lineHeight: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 20,
    fontFamily: 'outrun-future',
  },
  sectionHeader: {
    fontSize: 24,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  documentText: {
    fontSize: 20,
    fontFamily: 'outrun-future',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff6600',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'semibold',
    fontFamily: 'outrun-future',
  },
});

export default ApplicationSummary;