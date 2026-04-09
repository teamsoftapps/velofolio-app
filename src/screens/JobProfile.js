
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

import CustomHeader from '../components/CustomHeader';
import ProfileTabs from "../components/Profile/ProfileTabs"
import ProfileDetails from "../components/Profile/ProfileDetail"
import ProfileHeaderCard from "../components/ProfileHeaderCard"
import InvoiceCard from '../components/InvoiceCard';
import ContractCard from '../components/ContractCard';
import SearchFilterComponent from '../components/SearchFilterComponent';
import TaskCard from "../components/TaskCard"
import WorkflowTimeline from "../components/Profile/WorkflowTimeline"
import QuoteCard from "../components/QuoteCard"
import Feather from 'react-native-vector-icons/Feather';

const taskData = [
    {
        tags: [
            { title: "High", color: colors.white, bgColor: colors.red },
        ],
        title: "Edit Wedding Photos",
        description: "Footage received from the videographer.",
        name: "Sarah & John",
        progress: {
            colors: colors.yellowAccent,
            percent: 70,
        },
    },
];

const JobProfile = ({ navigation, route }) => {
    const job = route?.params?.job || { title: "Wedding Film – Mark & Jess" };
    const [activeTab, setActiveTab] = useState('ABOUT');
    const tabs = ['ABOUT', 'TASKS', 'WORKFLOW', 'INVOICES', 'QUOTES', 'CONTRACTS'];

    return (
        <View style={styles.container}>
            <View style={styles.headWrapper}>
                <CustomHeader
                    title={job.title}
                    onPress={() => navigation.goBack()}
                    showMore={true}
                    showAddButton={false}
                    onMorePress={() => console.log("More options pressed")}
                />
                <ProfileHeaderCard
                    variant="job"
                    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                    role="Sarah Johnson"
                />
                <ProfileTabs
                    activeTab={activeTab}
                    onTabPress={setActiveTab}
                    tabs={tabs}
                />
            </View>

            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.tabsData}
                    showsVerticalScrollIndicator={false}
                >
                    {activeTab === 'ABOUT' && <ProfileDetails type="Job" />}

                    {activeTab === 'TASKS' && (
                        <View style={{ flex: 1, paddingBottom: 100 }}>
                            <SearchFilterComponent colors={colors} placeholder="Search Tasks" />
                            <View style={{ paddingHorizontal: responsiveWidth(5) }}>
                                {taskData.map((task, index) => (
                                    <TaskCard key={index} task={task} />
                                ))}
                            </View>
                        </View>
                    )}

                    {activeTab === 'WORKFLOW' && (
                        <View style={{ flex: 1, paddingVertical: responsiveHeight(2) }}>
                            <WorkflowTimeline />
                        </View>
                    )}

                    {activeTab === 'INVOICES' && (
                        <View>
                            <SearchFilterComponent colors={colors} placeholder="Search Invoices" />
                            <View style={styles.contentPadding}>
                                <InvoiceCard />
                                <InvoiceCard />
                            </View>
                        </View>
                    )}

                    {activeTab === 'QUOTES' && (
                        <View style={{ flex: 1 }}>
                            <SearchFilterComponent colors={colors} placeholder="Search Quotes" />
                            <View style={styles.contentPadding}>
                                <QuoteCard />
                            </View>
                        </View>
                    )}

                    {activeTab === 'CONTRACTS' && (
                        <View style={{ flex: 1 }}>
                            <SearchFilterComponent colors={colors} placeholder="Search Contracts" />
                            <View style={styles.contentPadding}>
                                <ContractCard />
                            </View>
                        </View>
                    )}
                </ScrollView>

                {activeTab === 'TASKS' && (
                    <TouchableOpacity style={styles.fab} onPress={() => console.log("Add Task")}>
                        <Feather name="plus" size={20} color={colors.white} />
                        <Text style={styles.fabText}>Add More Task</Text>
                    </TouchableOpacity>
                )}

                {activeTab === 'WORKFLOW' && (
                    <TouchableOpacity style={styles.fab} onPress={() => console.log("Add Workflow")}>
                        <Feather name="plus" size={20} color={colors.white} />
                        <Text style={styles.fabText}>Add Workflow</Text>
                    </TouchableOpacity>
                )}

                {activeTab === 'INVOICES' && (
                    <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("NewInvoice")}>
                        <Feather name="plus" size={20} color={colors.white} />
                        <Text style={styles.fabText}>Add Invoice</Text>
                    </TouchableOpacity>
                )}

                {activeTab === 'QUOTES' && (
                    <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("AddQuote")}>
                        <Feather name="plus" size={20} color={colors.white} />
                        <Text style={styles.fabText}>Add Quote</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    headWrapper: {
        backgroundColor: colors.white,
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(1),
    },
    tabsData: {
        flexGrow: 1,
    },
    contentPadding: {
        paddingHorizontal: responsiveWidth(4),
    },
    fab: {
        position: 'absolute',
        bottom: responsiveHeight(2),
        right: responsiveWidth(5),
        backgroundColor: colors.black || '#000',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: responsiveHeight(1.6),
        paddingHorizontal: responsiveWidth(6),
        borderRadius: responsiveWidth(3.5),
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    fabText: {
        color: colors.white,
        fontSize: responsiveWidth(3.8),
        fontWeight: '700',
        marginLeft: 8,
    },
    placeholderContainer: {
        padding: 40,
        alignItems: 'center',
    },
    placeholderText: {
        color: colors.grayDark,
        fontSize: 16,
    }
});

export default JobProfile;
