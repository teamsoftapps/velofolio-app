
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../components/ScreenWrapper';

const NewInvoice = ({ navigation }) => {
    const [selectedSchedule, setSelectedSchedule] = useState("No split payments");
    const [isMenuVisible, setMenuVisible] = useState(false);

    const schedules = [
        "No split payments",
        "50% / 50% split",
        "30% / 70% split"
    ];

    return (
        <ScreenWrapper backgroundColor={colors.white}>
            <View style={styles.header}>
                <CustomHeader
                    title="New Invoice"
                    onPress={() => navigation.goBack()}
                    showAddButton={false}
                />
            </View>

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Form Fields */}
                <View style={styles.section}>
                    <Text style={styles.label}>Invoice ID</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="20251126-01"
                            placeholderTextColor={colors.black}
                        />
                    </View>

                    <Text style={styles.label}>Issue Date</Text>
                    <TouchableOpacity style={styles.inputWrapper}>
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="26/11/25"
                            placeholderTextColor={colors.black}
                            editable={false}
                        />
                        <Feather name="calendar" size={20} color={colors.black} />
                    </TouchableOpacity>

                    <Text style={styles.label}>PO Number</Text>
                    <TouchableOpacity style={styles.inputWrapper}>
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="-"
                            placeholderTextColor={colors.grayDark}
                            editable={false}
                        />
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.grayDark} />
                    </TouchableOpacity>
                </View>

                {/* Products & Packages Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Products & Packages</Text>
                    <Text style={styles.sectionSubtitle}>Add products and packages to this invoice.</Text>

                    <View style={styles.placeholderCard}>
                        <Text style={styles.placeholderTitle}>Start Adding Items to your Invoice</Text>
                        <Text style={styles.placeholderText}>
                            You currently don't have any product or package add to your Invoice. Click the button below to start adding them.
                        </Text>
                        <TouchableOpacity style={styles.addItemsButton}>
                            <Feather name="plus" size={18} color={colors.white} />
                            <Text style={styles.addItemsText}>Add Products & Packages</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Summary Section */}
                <View style={styles.summaryContainer}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Subtotal</Text>
                        <Text style={styles.summaryValue}>$0.00</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={[styles.summaryLabel, { color: colors.blueAccent }]}>Discount</Text>
                        <Text style={[styles.summaryValue, { color: colors.blueAccent }]}>None</Text>
                    </View>
                    <View style={[styles.summaryRow, { marginTop: 10 }]}>
                        <Text style={styles.totalLabel}>Total Due</Text>
                        <Text style={styles.totalValue}>$0.00</Text>
                    </View>
                </View>

                {/* Payment Schedule Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Payment Schedule</Text>
                    <Text style={styles.sectionSubtitle}>Assign a payment schedule to this invoice.</Text>

                    <TouchableOpacity style={styles.inputWrapper} onPress={() => setMenuVisible(true)}>
                        <Text style={styles.input}>{selectedSchedule}</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.grayDark} />
                    </TouchableOpacity>

                    <View style={styles.alertBox}>
                        <Ionicons name="information-circle-outline" size={20} color={colors.blueAccent} />
                        <Text style={styles.alertText}>
                            A payment schedule cannot be calculated because the total amount due is $0.00.
                        </Text>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Save Invoice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                transparent={true}
                visible={isMenuVisible}
                animationType="fade"
                onRequestClose={() => setMenuVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setMenuVisible(false)}
                >
                    <View style={styles.modalContent}>
                        {schedules.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.menuItem, index === schedules.length - 1 && { borderBottomWidth: 0 }]}
                                onPress={() => {
                                    setSelectedSchedule(item);
                                    setMenuVisible(false);
                                }}
                            >
                                <Text style={[
                                    styles.menuItemText,
                                    selectedSchedule === item && { color: colors.blueAccent, fontWeight: '700' }
                                ]}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(5),
    },
    section: {
        marginTop: responsiveHeight(2),
    },
    label: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '500',
        color: colors.black,
        marginBottom: responsiveHeight(1),
    },
    inputWrapper: {
        height: responsiveHeight(6.5),
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: responsiveHeight(2),
    },
    input: {
        fontSize: responsiveFontSize(1.9),
        color: colors.black,
        padding: 0,
    },
    sectionTitle: {
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
        color: colors.black,
    },
    sectionSubtitle: {
        fontSize: responsiveFontSize(1.6),
        color: colors.grayDark,
        marginTop: 4,
        marginBottom: 15,
    },
    placeholderCard: {
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    placeholderTitle: {
        fontSize: responsiveFontSize(1.9),
        fontWeight: '700',
        color: colors.black,
        textAlign: 'center',
    },
    placeholderText: {
        fontSize: responsiveFontSize(1.6),
        color: colors.grayDark,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 20,
        lineHeight: 20,
    },
    addItemsButton: {
        backgroundColor: colors.blueAccent || '#0EA5E9',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        gap: 8,
    },
    addItemsText: {
        color: colors.white,
        fontWeight: '600',
        fontSize: responsiveFontSize(1.7),
    },
    summaryContainer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#F3F4F6',
        marginTop: 20,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: responsiveFontSize(1.8),
        color: colors.black,
    },
    summaryValue: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        color: colors.black,
    },
    totalLabel: {
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
        color: colors.black,
    },
    totalValue: {
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
        color: colors.black,
    },
    alertBox: {
        backgroundColor: '#F0F9FF',
        padding: 12,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10,
        marginTop: 15,
    },
    alertText: {
        flex: 1,
        fontSize: responsiveFontSize(1.6),
        color: colors.black,
        lineHeight: 18,
    },
    actions: {
        marginTop: 30,
        gap: 15,
    },
    saveButton: {
        backgroundColor: colors.blueAccent || '#0EA5E9',
        height: responsiveHeight(6.5),
        borderRadius: responsiveWidth(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        color: colors.white,
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
    },
    cancelButton: {
        height: responsiveHeight(6.5),
        borderRadius: responsiveWidth(50),
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButtonText: {
        color: colors.black,
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: colors.white,
        width: responsiveWidth(80),
        borderRadius: 12,
        padding: 10,
    },
    menuItem: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    menuItemText: {
        fontSize: responsiveFontSize(1.9),
        color: colors.black,
    },
});

export default NewInvoice;
