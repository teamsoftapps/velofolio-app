import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const initialCards = [
  { id: '1', type: 'visa', last4: '4978', exp: '06/26', default: true },
  { id: '2', type: 'visa', last4: '2245', exp: '06/26', default: false },
  { id: '3', type: 'mastercard', last4: '5546', exp: '06/26', default: false },
];

const PaymentMethodsScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const [cards, setCards] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (route.params?.success) {
      setShowSuccess(true);
      navigation.setParams({ success: undefined });
      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    }
  }, [route.params?.success, navigation]);

  const handleCardClick = (card) => {
    if (!card.default) {
      setSelectedCard(card);
    }
  };

  const setAsDefault = () => {
    if (selectedCard) {
      setCards(prevCards => prevCards.map(c => ({
        ...c,
        default: c.id === selectedCard.id
      })));
      setSelectedCard(null);
    }
  };

  const removeCard = () => {
    if (selectedCard) {
      setCards(prevCards => prevCards.filter(c => c.id !== selectedCard.id));
      setSelectedCard(null);
    }
  };

  const renderCardIcon = (type) => {
    if (type === 'visa') {
      return (
        <View style={styles.cardIconBox}>
          <Typography style={styles.visaText}>VISA</Typography>
        </View>
      );
    } else {
      return (
        <View style={styles.cardIconBox}>
          <View style={styles.mcCircleLeft} />
          <View style={styles.mcCircleRight} />
        </View>
      );
    }
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Payment Methods</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.cardItem, card.default && styles.cardItemDefault]}
            activeOpacity={0.7}
            onPress={() => handleCardClick(card)}
          >
            <View style={styles.cardItemLeft}>
              {renderCardIcon(card.type)}
              <View>
                <Typography style={styles.cardNumber}>**** **** **** {card.last4}</Typography>
                <Typography style={styles.cardExp}>Exp. Date {card.exp}</Typography>
              </View>
            </View>
            {card.default ? (
              <View style={styles.defaultBadge}>
                <Feather name="check-circle" size={rs(12)} color="#FFFFFF" style={{ marginRight: rs(4) }} />
                <Typography style={styles.defaultBadgeText}>Default</Typography>
              </View>
            ) : (
              <Typography style={styles.setAsDefaultText}>Set as Default</Typography>
            )}
          </TouchableOpacity>
        ))}

        <View style={{ height: rh(100) }} />
      </ScrollView>

      <View style={[styles.bottomButtonContainer, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AddPaymentCard')}
        >
          <Typography style={styles.addButtonText}>Add Payment Method</Typography>
        </TouchableOpacity>
      </View>

      {/* Options Modal */}
      <Modal
        visible={!!selectedCard}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedCard(null)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBackdropClose} onPress={() => setSelectedCard(null)} />
          <View style={[styles.bottomSheet, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
            <TouchableOpacity style={styles.sheetOption} onPress={setAsDefault}>
              <Typography style={styles.sheetOptionTextBlue}>Set as Default</Typography>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.sheetOption} onPress={removeCard}>
              <Typography style={styles.sheetOptionTextRed}>Remove</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal
        visible={showSuccess}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlayFlexCenter}>
          <View style={styles.successCard}>
            <View style={styles.successCircle}>
              <Feather name="check" size={rs(28)} color="#F59E0B" />
            </View>
            <Typography style={styles.successText}>Card Added Successfully</Typography>
          </View>
        </View>
      </Modal>

    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { fontSize: rs(22), fontWeight: '700', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6', // Lighter grey for non-default
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardItemDefault: {
    backgroundColor: '#F3F4F6',
    borderColor: '#111827', // Dark border for default
  },
  cardItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIconBox: {
    width: rs(50),
    height: rs(32),
    backgroundColor: '#FFFFFF',
    borderRadius: rs(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  visaText: {
    color: '#1A1F71', // Visa Blue
    fontWeight: '800',
    fontSize: rs(14),
    fontStyle: 'italic',
  },
  mcCircleLeft: {
    width: rs(16),
    height: rs(16),
    borderRadius: rs(8),
    backgroundColor: '#EB001B',
    position: 'absolute',
    left: rs(10),
    zIndex: 1,
  },
  mcCircleRight: {
    width: rs(16),
    height: rs(16),
    borderRadius: rs(8),
    backgroundColor: '#F79E1B',
    position: 'absolute',
    right: rs(10),
  },
  cardNumber: {
    fontSize: rs(15),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(2),
  },
  cardExp: {
    fontSize: rs(13),
    color: '#9CA3AF',
  },
  defaultBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#38BDF8', // Blue
    paddingHorizontal: rs(10),
    paddingVertical: rs(6),
    borderRadius: rs(16),
  },
  defaultBadgeText: {
    color: '#FFFFFF',
    fontSize: rs(12),
    fontWeight: '600',
  },
  setAsDefaultText: {
    color: '#38BDF8', // Blue link
    fontSize: rs(13),
    fontWeight: '600',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
    backgroundColor: 'transparent',
  },
  addButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  
  /* Modals */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalBackdropClose: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(24),
    borderTopRightRadius: rs(24),
    paddingTop: rs(10),
  },
  sheetOption: {
    paddingVertical: rs(20),
    alignItems: 'center',
  },
  sheetOptionTextBlue: {
    fontSize: rs(16),
    fontWeight: '500',
    color: '#38BDF8',
  },
  sheetOptionTextRed: {
    fontSize: rs(16),
    fontWeight: '500',
    color: '#EF4444',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    width: '100%',
  },
  
  modalOverlayFlexCenter: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(20),
    width: '80%',
    paddingVertical: rs(40),
    alignItems: 'center',
  },
  successCircle: {
    width: rs(64),
    height: rs(64),
    borderRadius: rs(32),
    borderWidth: 3,
    borderColor: '#F59E0B', // Orange/Yellow
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  successText: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
  },
});

export default PaymentMethodsScreen;
