import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';
import ButtonSimple from '../components/Button';

const PaymentMethods = ({ navigation }) => {
  const [showActions, setShowActions] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: '1', type: 'Visa', last4: '4978', expiry: '06/26', isDefault: true },
    { id: '2', type: 'Visa', last4: '2245', expiry: '06/26', isDefault: false },
    { id: '3', type: 'Mastercard', last4: '5546', expiry: '06/26', isDefault: false },
  ];

  const handleCardPress = (card) => {
    setSelectedCard(card);
    setShowActions(true);
  };

  const renderCardIcon = (type) => {
    if (type === 'Visa') {
      return (
        <View style={styles.cardIconContainer}>
          <CustomText style={styles.visaText}>VISA</CustomText>
        </View>
      );
    }
    return (
      <View style={styles.cardIconContainer}>
        <View style={styles.mastercardCircles}>
          <View style={[styles.mcCircle, { backgroundColor: '#EB001B' }]} />
          <View style={[styles.mcCircle, { backgroundColor: '#F79E1B', marginLeft: -8 }]} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Payment Methods" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.paymentCard, card.isDefault && styles.defaultCardBorder]}
            onPress={() => handleCardPress(card)}
            activeOpacity={0.7}
          >
            <View style={styles.cardLeft}>
              {renderCardIcon(card.type)}
              <View style={styles.cardDetails}>
                <CustomText style={styles.cardNumber}>**** **** **** {card.last4}</CustomText>
                <CustomText style={styles.cardExpiry}>Exp. Date {card.expiry}</CustomText>
              </View>
            </View>

            {card.isDefault ? (
              <View style={styles.defaultBadge}>
                <Ionicons name="checkmark-circle" size={16} color={colors.white} />
                <CustomText style={styles.defaultBadgeText}>Default</CustomText>
              </View>
            ) : (
              <TouchableOpacity onPress={() => handleCardPress(card)}>
                <CustomText style={styles.setDefaultText}>Set as Default</CustomText>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Add Button */}
      <View style={styles.footer}>
        <ButtonSimple
          title="Add Payment Method"
          onPress={() => navigation.navigate('AddPaymentMethod')}
          style={styles.addButton}
          textStyle={styles.addButtonText}
        />
      </View>

      {/* Actions Bottom Sheet */}
      <Modal
        visible={showActions}
        transparent
        animationType="slide"
        onRequestClose={() => setShowActions(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowActions(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.bottomSheet}>
                <View style={styles.sheetHandle} />
                <TouchableOpacity 
                  style={styles.sheetAction} 
                  onPress={() => setShowActions(false)}
                >
                  <CustomText style={styles.actionTextBlue}>Set as Default</CustomText>
                </TouchableOpacity>
                <View style={styles.actionDivider} />
                <TouchableOpacity 
                  style={styles.sheetAction} 
                  onPress={() => setShowActions(false)}
                >
                  <CustomText style={styles.actionTextRed}>Remove</CustomText>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(3),
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(4),
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EBEBEB',
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(5),
    marginBottom: responsiveHeight(2),
  },
  defaultCardBorder: {
    borderWidth: 1.5,
    borderColor: colors.textPrimary || '#222222',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIconContainer: {
    width: responsiveWidth(15),
    height: responsiveHeight(5),
    backgroundColor: colors.white,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(4),
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  visaText: {
    color: '#1A1F71',
    fontWeight: '800',
    fontSize: responsiveFontSize(1.8),
    fontStyle: 'italic',
  },
  mastercardCircles: {
    flexDirection: 'row',
  },
  mcCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    opacity: 0.9,
  },
  cardDetails: {
    gap: 2,
  },
  cardNumber: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
  },
  cardExpiry: {
    fontSize: responsiveFontSize(1.6),
    color: colors.grayDark || '#999999',
  },
  defaultBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bluePrimary || '#00B1E7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  defaultBadgeText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    color: colors.white,
    marginLeft: 4,
  },
  setDefaultText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.bluePrimary || '#00B1E7',
  },
  footer: {
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(4),
    backgroundColor: '#F9F9F9',
  },
  addButton: {
    backgroundColor: colors.bluePrimary || '#00B1E7',
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7.5),
  },
  addButtonText: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
    paddingBottom: responsiveHeight(4),
    alignItems: 'center',
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#E1E1E1',
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  sheetAction: {
    width: '100%',
    paddingVertical: responsiveHeight(2.5),
    alignItems: 'center',
  },
  actionDivider: {
    width: '90%',
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  actionTextBlue: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color: colors.bluePrimary || '#00B1E7',
  },
  actionTextRed: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color: '#F34747',
  },
});

export default PaymentMethods;
