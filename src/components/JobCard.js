import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Tag from './Tag';
import DetailItem from './DetailItem';
import ProgressBar from './ProgressBar';
import TeamComponent from './TeamComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionButtons from './ActionButton';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Your JobsData

const JobCard = ({ job, tab }) => {
  // For simplicity, take the first job
  // const job = JobsData[0];

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor:
            tab === 'task' || tab === 'clientjob'
              ? colors.white
              : colors.yellowSecondary,
          height: tab === 'task' ? 'auto' : '',
        },
      ]}
    >
      {/* Tags */}
      <View style={styles.tagsWrapper}>
        <View style={styles.tagsContainer}>
          {job.tags.map((tag, index) => (
            <Tag
              key={index}
              color={tag.color}
              bgColor={tag.bgColor}
              text={tag.title}
            />
          ))}
        </View>
        <TouchableOpacity
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Feather
            name="more-horizontal"
            size={responsiveFontSize(4.8)}
            color={colors.grayDark || '#6b7280'}
          />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{job.title}</Text>
        {tab === 'task' && (
          <View style={styles.row}>
            <Feather
              name="user"
              size={responsiveFontSize(2.2)}
              color={colors.grayDark || '#6b7280'}
            />
            <Text style={styles.user}>{job.name || 'User'}</Text>
          </View>
        )}
      </View>

      {tab !== 'task' && (
        <View
          style={[
            styles.detailConatiner,
            {
              backgroundColor: tab === 'clientjob' ? colors.blueSecondary : '',
              padding:
                tab === 'clientjob' ? responsiveWidth(2) : responsiveWidth(0),
              justifyContent: tab === 'clientjob' ? 'space-between' : '',
            },
          ]}
        >
          {job.details.map((detail, index) => (
            <DetailItem key={index} label={detail.label} text={detail.value} />
          ))}
        </View>
      )}

      {/* Progress Bar (keep as is) */}
      {tab !== 'clientjob' && (
        <View style={styles.progressbar}>
          <ProgressBar tab={tab} />
        </View>
      )}

      {/* {tab==="clientjob" && <Text>Team</Text>} */}
      <View style={styles.bottomConatiner}>
        {tab === 'task' && (
          <>
            <View style={styles.date}>
              <Icon name="calendar-today" color={colors.grayDark} size={18} />
              <Text style={styles.label}>
                Due Date: <Text style={styles.dateValue}>Oct 12,2025</Text>
              </Text>
            </View>

            <Tag
              key={1}
              // color={tag.color}
              bgColor={colors.yellowAccent}
              text={'Pending'}
            />
          </>
        )}

        {tab !== 'task' && (
          <View>
            <View style={styles.teamContainer}>
              <TeamComponent />
            </View>
            {tab !== 'clientjob' && <ActionButtons direction="row-reverse" />}
          </View>
        )}
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    height: responsiveHeight(31),
    backgroundColor: colors.yellowSecondary,
    padding: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
    marginBottom: responsiveHeight(2),
  },
  row: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  user: {
    color: colors.grayDark,
    fontSize: responsiveFontSize(1.9),
  },
  actionConatiner: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(50),
    backgroundColor: colors.white,
  },
  bottomConatiner: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    alignContent: 'center',
    marginTop: responsiveHeight(2.4),
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    alignItems: 'center',
  },
  label: {
    color: colors.grayDark,
  },
  dateValue: {
    color: colors.red,
    fontWeight: '500',
  },
  teamContainer: {
    backgroundColor: colors.white,
    padding: responsiveWidth(1),
    borderRadius: responsiveWidth(30),
    borderColor: colors.yellowAccent,
    borderWidth: 1,
  },
  progressbar: {
    height: responsiveHeight(2.2),
    marginTop: 8,
  },
  progressContainer: {
    marginVertical: responsiveWidth(4),
    width: '100%',
    padding: responsiveWidth(0.4),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(2),
    backgroundColor: colors.white,
  },
  detailConatiner: {
    flexDirection: 'row',
    gap: responsiveWidth(13),
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    alignItems: 'center',
  },
  tagsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: responsiveWidth(3),
  },
  heading: {
    fontSize: responsiveWidth(5),
    fontWeight: '500',
  },
});
