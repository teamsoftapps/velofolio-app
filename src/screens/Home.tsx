import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import DashboardHeader from '../components/DashboardHeader';
import colors from '../utils/colors';
import CustomText from '../components/CustomText';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Home = () => {
  return (
    <ScreenWrapper backgroundColor={colors.screenBackground}>
      <DashboardHeader name="Akshay" />
      <View style={{ padding: responsiveWidth(5) }}>
        <CustomText text="hdkshs" />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
