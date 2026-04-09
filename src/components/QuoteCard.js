
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const QuoteCard = ({ quote }) => {
    const data = quote || {
        title: "Pick & Choose",
        id: "Quote 20251126",
        amount: "100% of order",
        status: "PENDING"
    };

    return (
        <View style={styles.card}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.iconWrapper}>
                    <MaterialCommunityIcons 
                        name="ticket-percent-outline" 
                        size={24} 
                        color={colors.black || "#1f2937"} 
                    />
                </View>
                
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.subtitle}>{data.id}</Text>
                </View>

                <TouchableOpacity style={styles.sendButton}>
                    <Feather name="send" size={16} color={colors.black} />
                    <Text style={styles.sendText}>Send</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            {/* Details Section */}
            <View style={styles.details}>
                <View style={styles.row}>
                    <View style={styles.labelGroup}>
                        <MaterialIcons name="currency-exchange" size={20} color={colors.grayDark} />
                        <Text style={styles.label}>Amount</Text>
                    </View>
                    <Text style={styles.value}>{data.amount}</Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.labelGroup}>
                        <MaterialCommunityIcons name="cached" size={20} color={colors.grayDark} />
                        <Text style={styles.label}>Status</Text>
                    </View>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>{data.status}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: responsiveWidth(5),
        padding: responsiveWidth(4.5),
        marginBottom: responsiveHeight(2),
        borderWidth: 1,
        borderColor: '#F3F4F6',
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveHeight(1.5),
    },
    iconWrapper: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F9FAFB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: responsiveWidth(3),
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
        color: colors.black,
    },
    subtitle: {
        fontSize: responsiveFontSize(1.8),
        color: colors.black,
        marginTop: 2,
    },
    sendButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        gap: 6,
    },
    sendText: {
        fontSize: responsiveFontSize(1.7),
        fontWeight: '600',
        color: colors.black,
    },
    separator: {
        height: 1,
        backgroundColor: '#F3F4F6',
        marginVertical: responsiveHeight(1.5),
    },
    details: {
        gap: responsiveHeight(1.5),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    labelGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    label: {
        fontSize: responsiveFontSize(1.8),
        color: colors.grayDark,
        fontWeight: '500',
    },
    value: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '700',
        color: colors.black,
    },
    statusBadge: {
        backgroundColor: '#FFFBEB', // Light yellow from screenshot
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: '700',
        color: '#F59E0B', // Amber/Yellow
    },
});

export default QuoteCard;
