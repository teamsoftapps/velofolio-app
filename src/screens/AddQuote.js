
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenWrapper from '../components/ScreenWrapper';

const QuoteItemCard = ({ title, price }) => (
    <View style={styles.itemCard}>
        <View style={styles.itemHeader}>
            <View style={styles.itemTitleRow}>
                <MaterialCommunityIcons name="file-document-outline" size={18} color={colors.grayDark} />
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <Text style={styles.itemPrice}>${price}</Text>
        </View>

        <View style={styles.itemDetailRow}>
            <Text style={styles.itemLabel}>Description</Text>
            <Text style={styles.itemDescription}>
                A deluxe package created for families wanting timeless wall art and keepsake prints.
            </Text>
        </View>

        <View style={styles.itemSummaryRow}>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Unit Price</Text>
                <Text style={styles.summaryValue}>${price}</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Quantity</Text>
                <Text style={styles.summaryValue}>1</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Discount</Text>
                <Text style={styles.summaryValue}>0%</Text>
            </View>
        </View>

        <View style={styles.itemActions}>
            <TouchableOpacity style={styles.itemActionBtn}>
                <Feather name="edit-2" size={14} color={colors.black} />
                <Text style={styles.itemActionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemActionBtn}>
                <Feather name="copy" size={14} color={colors.black} />
                <Text style={styles.itemActionText}>Duplicate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemActionBtn}>
                <Feather name="trash-2" size={14} color={colors.red} />
                <Text style={[styles.itemActionText, { color: colors.red }]}>Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const AddQuote = ({ navigation }) => {
    const [intro, setIntro] = useState("");
    const [autoInvoice, setAutoInvoice] = useState(true);
    const [showPortal, setShowPortal] = useState(true);
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
                    title="Add Quote" 
                    onPress={() => navigation.goBack()} 
                    showAddButton={false}
                />
            </View>

            <ScrollView 
                style={styles.container} 
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* ID and Date Fields */}
                <View style={styles.section}>
                    <Text style={styles.label}>Quote ID</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="20251126-01" />
                    </View>

                    <Text style={styles.label}>Issue Date</Text>
                    <TouchableOpacity style={styles.inputWrapper}>
                        <TextInput style={[styles.input, { flex: 1 }]} placeholder="26/11/25" editable={false} />
                        <Feather name="calendar" size={20} color={colors.black} />
                    </TouchableOpacity>

                    <Text style={styles.label}>PO Number</Text>
                    <TouchableOpacity style={styles.inputWrapper}>
                        <TextInput style={[styles.input, { flex: 1 }]} placeholder="-" editable={false} />
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.grayDark} />
                    </TouchableOpacity>

                    <Text style={styles.label}>Introduction</Text>
                    <View style={[styles.inputWrapper, styles.multilineInput]}>
                        <TextInput 
                            style={[styles.input, { textAlignVertical: 'top' }]} 
                            placeholder="E.g. Thank you for considering me as your photographer!"
                            multiline
                            numberOfLines={4}
                            value={intro}
                            onChangeText={setIntro}
                        />
                    </View>
                </View>

                {/* Products & Packages */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Products & Packages</Text>
                    <Text style={styles.sectionSubtitle}>Add products and packages to this invoice.</Text>
                    
                    <QuoteItemCard title="Ultimate Family Memories" price="1999.00" />
                    
                    <TouchableOpacity style={styles.addProductsBtn}>
                        <Feather name="plus" size={18} color={colors.white} />
                        <Text style={styles.addProductsText}>Add Products</Text>
                    </TouchableOpacity>
                </View>

                {/* Payment Schedule */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Payment Schedule</Text>
                    <TouchableOpacity style={[styles.inputWrapper, { marginTop: 10 }]} onPress={() => setMenuVisible(true)}>
                        <Text style={styles.input}>{selectedSchedule}</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.grayDark} />
                    </TouchableOpacity>
                </View>

                {/* Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryTitle}>Summary</Text>
                    <View style={styles.summaryDetails}>
                        <View style={styles.summaryDataRow}>
                            <View style={styles.summaryLabelRow}>
                                <MaterialCommunityIcons name="credit-card-outline" size={18} color={colors.grayDark} />
                                <Text style={styles.summaryDataLabel}>Payments</Text>
                            </View>
                            <Text style={styles.summaryDataValue}>1</Text>
                        </View>
                        <View style={styles.summaryDataRow}>
                            <View style={styles.summaryLabelRow}>
                                <MaterialCommunityIcons name="clock-outline" size={18} color={colors.grayDark} />
                                <Text style={styles.summaryDataLabel}>Due</Text>
                            </View>
                            <Text style={[styles.summaryDataValue, { color: colors.red }]}>Dec 1, 2025</Text>
                        </View>
                        <View style={styles.summaryDataRow}>
                            <View style={styles.summaryLabelRow}>
                                <MaterialCommunityIcons name="currency-usd" size={18} color={colors.grayDark} />
                                <Text style={styles.summaryDataLabel}>Amount</Text>
                            </View>
                            <Text style={styles.summaryDataValue}>100% of order</Text>
                        </View>
                    </View>
                </View>

                {/* Options */}
                <View style={styles.optionsSection}>
                    <TouchableOpacity style={styles.optionRow} onPress={() => setAutoInvoice(!autoInvoice)}>
                        <MaterialIcons 
                            name={autoInvoice ? "check-box" : "check-box-outline-blank"} 
                            size={24} 
                            color={colors.blueAccent} 
                        />
                        <Text style={styles.optionText}>Automatically generate an invoice once the quote is accepted.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionRow} onPress={() => setShowPortal(!showPortal)}>
                        <MaterialIcons 
                            name={showPortal ? "check-box" : "check-box-outline-blank"} 
                            size={24} 
                            color={colors.blueAccent} 
                        />
                        <Text style={styles.optionText}>Show in Client Portal</Text>
                    </TouchableOpacity>
                </View>

                {/* Final Actions */}
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.saveBtn}>
                        <Text style={styles.saveBtnText}>Save Quote</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelBtnText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Selection Modal */}
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
        marginTop: responsiveHeight(2.5),
    },
    label: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '500',
        color: colors.black,
        marginBottom: 8,
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
    multilineInput: {
        height: responsiveHeight(12),
        alignItems: 'flex-start',
        paddingTop: 12,
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
    itemCard: {
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        padding: 15,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        marginBottom: 15,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        paddingBottom: 10,
        marginBottom: 10,
    },
    itemTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    itemTitle: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '700',
        color: colors.black,
    },
    itemPrice: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '700',
        color: colors.black,
    },
    itemDetailRow: {
        marginBottom: 12,
    },
    itemLabel: {
        fontSize: responsiveFontSize(1.6),
        color: colors.grayDark,
        marginBottom: 4,
    },
    itemDescription: {
        fontSize: responsiveFontSize(1.7),
        color: colors.black,
        lineHeight: 22,
    },
    itemSummaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    summaryItem: {
        flex: 1,
    },
    summaryLabel: {
        fontSize: responsiveFontSize(1.5),
        color: colors.grayDark,
        marginBottom: 2,
    },
    summaryValue: {
        fontSize: responsiveFontSize(1.7),
        fontWeight: '600',
        color: colors.black,
    },
    itemActions: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 12,
        justifyContent: 'space-between',
    },
    itemActionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 8,
    },
    itemActionText: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: '600',
        color: colors.black,
    },
    addProductsBtn: {
        backgroundColor: colors.blueAccent || '#0EA5E9',
        height: responsiveHeight(6),
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 5,
    },
    addProductsText: {
        color: colors.white,
        fontWeight: '600',
        fontSize: responsiveFontSize(1.8),
    },
    summaryCard: {
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        padding: 15,
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    summaryTitle: {
        fontSize: responsiveFontSize(1.7),
        color: colors.grayDark,
        marginBottom: 10,
    },
    summaryDetails: {
        gap: 12,
    },
    summaryDataRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    summaryLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    summaryDataLabel: {
        fontSize: responsiveFontSize(1.8),
        color: colors.black,
    },
    summaryDataValue: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        color: colors.black,
    },
    optionsSection: {
        marginTop: 25,
        gap: 15,
    },
    optionRow: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
    },
    optionText: {
        flex: 1,
        fontSize: responsiveFontSize(1.7),
        color: colors.black,
        lineHeight: 20,
    },
    actions: {
        marginTop: 35,
        gap: 15,
    },
    saveBtn: {
        backgroundColor: colors.blueAccent || '#0EA5E9',
        height: responsiveHeight(6.5),
        borderRadius: responsiveWidth(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveBtnText: {
        color: colors.white,
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
    },
    cancelBtn: {
        height: responsiveHeight(6.5),
        borderRadius: responsiveWidth(50),
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelBtnText: {
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

export default AddQuote;
