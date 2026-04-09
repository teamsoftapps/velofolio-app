
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Tag from '../Tag';

const WorkflowStep = ({ title, date, description, status, type, location, time, tagText, isLast }) => {
    const isCompleted = status === 'completed';
    const isCurrent = status === 'current';
    const isFuture = status === 'future';

    return (
        <View style={styles.stepContainer}>
            {/* Timeline Left */}
            <View style={styles.timelineLeft}>
                <View style={[
                    styles.node,
                    isCompleted && styles.completedNode,
                    isCurrent && styles.currentNode,
                    isFuture && styles.futureNode
                ]}>
                    {isCompleted && <Ionicons name="checkmark" size={12} color={colors.white} />}
                </View>
                {!isLast && <View style={[styles.line, isCompleted && styles.completedLine, isCurrent && styles.currentLine]} />}
            </View>

            {/* Content Right */}
            <View style={[
                styles.contentCard,
                type === 'summary' && styles.summaryCard,
                type === 'info' && styles.infoCard,
                type === 'future' && styles.futureCard
            ]}>
                <View style={styles.contentHeader}>
                    <Text style={styles.contentTitle}>{title}</Text>
                    {date && <Text style={styles.contentDate}>{date}</Text>}
                </View>

                {description && <Text style={styles.contentDescription}>{description}</Text>}

                {(location || time) && (
                    <View style={styles.detailsRow}>
                        {location && (
                            <View style={styles.detailItem}>
                                <Ionicons name="location-outline" size={14} color={colors.grayDark} />
                                <Text style={styles.detailText}>{location}</Text>
                            </View>
                        )}
                        {time && (
                            <View style={styles.detailItem}>
                                <Feather name="calendar" size={14} color={colors.grayDark} />
                                <Text style={styles.detailText}>{time}</Text>
                            </View>
                        )}
                    </View>
                )}

                {tagText && (
                    <View style={styles.tagWrapper}>
                        <Tag text={tagText} bgColor={colors.blueAccent} color={colors.white} />
                    </View>
                )}
            </View>
        </View>
    );
};

const WorkflowTimeline = () => {
    const steps = [
        {
            title: "Lead Created",
            date: "25 Nov, 2025",
            status: "completed",
            type: "summary",
        },
        {
            title: "Job Accepted",
            date: "25 Nov, 2025",
            description: "This triggers automatically if the quote is approved, contract signed, or invoice paid, turning the lead into an active job.",
            status: "completed",
            type: "summary",
        },
        {
            title: "Sarah Wedding",
            location: "New York, USA",
            time: "Dec 1, 2025 from 2:20 PM to 4:00 PM",
            tagText: "WEDDING",
            status: "current",
            type: "info",
        },
        {
            title: "Job Complete",
            status: "future",
            type: "future",
            isLast: true
        }
    ];

    return (
        <View style={styles.container}>
            {steps.map((step, index) => (
                <WorkflowStep key={index} {...step} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveHeight(2),
    },
    stepContainer: {
        flexDirection: 'row',
    },
    timelineLeft: {
        alignItems: 'center',
        marginRight: responsiveWidth(4),
    },
    node: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    completedNode: {
        backgroundColor: '#14CB95', // Emerald green
    },
    currentNode: {
        borderWidth: 2,
        borderColor: colors.blueAccent,
        backgroundColor: colors.white,
    },
    futureNode: {
        borderWidth: 2,
        borderColor: '#E5E7EB',
        backgroundColor: colors.white,
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: '#E5E7EB',
        marginVertical: 2,
    },
    completedLine: {
        backgroundColor: '#14CB95',
    },
    currentLine: {
        backgroundColor: colors.blueAccent,
    },
    contentCard: {
        flex: 1,
        borderRadius: responsiveWidth(3),
        padding: responsiveWidth(4),
        marginBottom: responsiveHeight(2.5),
    },
    summaryCard: {
        backgroundColor: '#E0F9ED', // Light green from brand palette
    },
    infoCard: {
        backgroundColor: '#F0F9FF', // Very light blue
    },
    futureCard: {
        backgroundColor: '#F3F4F6', // Light gray
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentTitle: {
        fontSize: responsiveFontSize(1.9),
        fontWeight: '600',
        color: colors.black,
    },
    contentDate: {
        fontSize: responsiveFontSize(1.6),
        color: colors.grayDark,
    },
    contentDescription: {
        fontSize: responsiveFontSize(1.6),
        color: '#6B7280',
        marginTop: responsiveHeight(1),
        lineHeight: responsiveFontSize(2.2),
    },
    detailsRow: {
        marginTop: responsiveHeight(1.5),
        gap: responsiveHeight(1),
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(2),
    },
    detailText: {
        fontSize: responsiveFontSize(1.6),
        color: colors.grayDark,
    },
    tagWrapper: {
        marginTop: responsiveHeight(1.5),
        alignSelf: 'flex-start',
    }
});

export default WorkflowTimeline;
