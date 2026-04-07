
    import React, { useState } from 'react';
    import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
    ScrollView,
    Image,
    } from 'react-native';
    import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
    import colors from '../utils/colors';
    import CustomHeader from '../components/CustomHeader';
    import GmailSettingsModal from '../components/GmailSettingModal'; // Check file name!

    const GmailScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleConnectGmail = () => {
        setModalVisible(true);
    };

    const handleSaveSettings = (data) => {
        console.log('Settings saved:', data);
        navigation.navigate("GmailConnected", { email: data.connectedEmail });
    };

    return (
        <View style={styles.container}>
        {/* Header */}
        <View style={styles.headWrapper}>
            <CustomHeader title={"Gmail"} />
        </View>
{/* {modalVisible && <Text style={{ color: 'black' }}>Modal Test</Text>} */}
        <ScrollView 
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>Gmail</Text>
            
            <Text style={styles.description}>
            Connect your Gmail account to send emails directly from your inbox.
            </Text>

            <TouchableOpacity 
            style={styles.connectButton}
            onPress={handleConnectGmail}
            activeOpacity={0.8}
            >
            <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' }}
                style={styles.gmailIcon}
                resizeMode="contain"
            />
            <Text style={styles.connectText}>Connect Gmail</Text>
            </TouchableOpacity>
        </ScrollView>

        {/* MODAL MUST BE AT ROOT LEVEL - Outside ScrollView */}
        <GmailSettingsModal
            visible={modalVisible}
            onClose={() => {
            console.log('Closing modal');
            setModalVisible(false);
            }}
            onSave={handleSaveSettings}
        />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background || '#f8f9fa',
    },
    headWrapper: {
        borderBottomLeftRadius: responsiveWidth(6),
        borderBottomRightRadius: responsiveWidth(6),
        paddingVertical: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(3),
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(4),
        paddingBottom: responsiveWidth(8),
    },
    title: {
        fontSize: responsiveWidth(5.8),
        marginBottom: responsiveHeight(3),
        color: colors.textPrimary || '#222222',
        fontWeight: '600',
    },
    description: {
        fontSize: responsiveWidth(3.8),
        color: colors.textSecondary || '#6b7280',
        lineHeight: responsiveHeight(2.8),
        marginBottom: responsiveHeight(4),
    },
    connectButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8e8e8',
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveHeight(2.5),
        borderWidth: 1,
        borderColor: colors.border || '#d1d5db',
        gap: responsiveWidth(2),
    },
    gmailIcon: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },
    connectText: {
        fontSize: responsiveWidth(4.2),
        color: colors.textPrimary || '#222222',
        fontWeight: '500',
    },
    });

    export default GmailScreen;