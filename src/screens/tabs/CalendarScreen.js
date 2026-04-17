import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Core structural mapping
const DAYS_OF_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const SCHEDULE_DATA = [
  {
    id: 1,
    dayText: '13\nNov\n2025',
    title: 'Wedding Film – Mark & Jess',
    time: '4:00 PM – 8:00 PM',
    user: 'Sarah John',
    status: 'In Progress',
    theme: '#E0F2FE', // Light blue card bound
    buttonTheme: '#38BDF8', // Solid blue
    isAction: false,
  },
  {
    id: 2,
    dayText: '18\nNov\n2025',
    title: 'Wedding Film – Mark & Jess',
    time: '4:00 PM – 8:00 PM',
    user: 'Sarah John',
    status: 'Add New',
    theme: '#D1FAE5', // Light green card bound
    buttonTheme: '#000000', // Solid black
    isAction: true,
  },
];

const CalendarScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [currentDate, setCurrentDate] = React.useState(new Date(2025, 0, 1)); // Default to Jan 2025

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const generateMonthGrid = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let grid = [];
    let week = [];

    // Prev month trailing days
    for (let i = 0; i < firstDay; i++) {
      week.push({ d: daysInPrevMonth - firstDay + i + 1, t: 'faded' });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      let type = 'normal';
      // Simulate our color logic only if it's Jan 2025 to match mockup state, otherwise they render basic numbers.
      if (month === 0 && year === 2025) {
        if (i === 4 || i === 29)
          type = i === 4 ? 'solid-yellow' : 'light-yellow';
        if (i === 8 || i === 18 || i === 27) type = 'solid-green';
        if (i === 13 || i === 22) type = 'solid-blue';
        if (i === 12) type = 'solid-black';
      }

      week.push({ d: i, t: type });

      if (week.length === 7) {
        grid.push(week);
        week = [];
      }
    }

    // Next month leading days
    if (week.length > 0) {
      let nextMonthDay = 1;
      while (week.length < 7) {
        week.push({ d: nextMonthDay++, t: 'faded' });
      }
      grid.push(week);
    }

    return grid;
  };

  const currentGrid = generateMonthGrid();
  const formattedMonth = currentDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  const getCellStyles = type => {
    switch (type) {
      case 'faded':
        return { text: '#D1D5DB', bg: 'transparent' };
      case 'light-yellow':
        return { text: '#92400E', bg: '#FDE68A' };
      case 'solid-yellow':
        return { text: '#000000', bg: '#FBBF24' };
      case 'solid-green':
        return { text: '#FFFFFF', bg: '#34D399' };
      case 'solid-blue':
        return { text: '#FFFFFF', bg: '#38BDF8', border: '#0284C7' };
      case 'solid-black':
        return { text: '#FFFFFF', bg: '#000000' };
      default:
        return { text: '#111827', bg: 'transparent' };
    }
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        {/* Dynamic Native Header */}
        <View style={styles.header}>
          <View style={styles.headerTitleWrap}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Calender</Typography>
          </View>
        </View>

        {/* Month Toggler */}
        <View style={styles.monthToggleRow}>
          <TouchableOpacity style={styles.arrowBox} onPress={handlePrevMonth}>
            <Feather name="chevron-left" size={rs(20)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.monthText}>{formattedMonth}</Typography>
          <TouchableOpacity style={styles.arrowBox} onPress={handleNextMonth}>
            <Feather name="chevron-right" size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Search Area */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Feather name="search" size={rs(20)} color="#9CA3AF" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Actual Custom Grid Layout Area */}
        <View style={styles.calendarGrid}>
          {/* Header Row */}
          <View style={styles.gridRow}>
            {DAYS_OF_WEEK.map((day, idx) => (
              <View key={`h-${idx}`} style={styles.cellBox}>
                <Typography style={styles.dayHeaderText}>{day}</Typography>
              </View>
            ))}
          </View>

          {/* Custom Date Matrix Execution */}
          {currentGrid.map((weekData, weekIdx) => (
            <View key={`w-${weekIdx}`} style={styles.gridRow}>
              {weekData.map((dateObj, dIdx) => {
                const styling = getCellStyles(dateObj.t);
                return (
                  <TouchableOpacity
                    key={`d-${weekIdx}-${dIdx}`}
                    style={[
                      styles.cellBox,
                      {
                        backgroundColor: styling.bg,
                        borderRadius: rs(8),
                        borderWidth: dateObj.t === 'solid-blue' ? 1.5 : 0,
                        borderColor:
                          dateObj.t === 'solid-blue'
                            ? '#000000'
                            : 'transparent',
                      },
                    ]}
                    activeOpacity={0.7}
                  >
                    <Typography
                      style={[styles.dateText, { color: styling.text }]}
                    >
                      {dateObj.d}
                    </Typography>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* Schedule Flow Segment */}
        <View style={styles.scheduleWrapper}>
          {SCHEDULE_DATA.map(item => (
            <View
              key={item.id}
              style={[styles.eventCard, { backgroundColor: item.theme }]}
            >
              <View
                style={[
                  styles.eventDateBounding,
                  { backgroundColor: item.buttonTheme },
                ]}
              >
                <Typography
                  style={[
                    styles.eventDateText,
                    { color: item.isAction ? '#FFFFFF' : '#FFFFFF' },
                  ]}
                >
                  {item.dayText}
                </Typography>
              </View>

              <View style={styles.eventDataArea}>
                <Typography style={styles.eventTitle}>{item.title}</Typography>
                <View style={styles.eventMetadataRow}>
                  <Feather name="clock" size={rs(14)} color="#6B7280" />
                  <Typography style={styles.eventMetadataText}>
                    {item.time}
                  </Typography>
                </View>
                <View style={styles.eventMetadataRow}>
                  <Feather name="users" size={rs(14)} color="#6B7280" />
                  <Typography style={styles.eventMetadataText}>
                    {item.user}
                  </Typography>
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.eventActionButton,
                  { backgroundColor: item.buttonTheme },
                ]}
                onPress={() => {
                  if (item.isAction) {
                    navigation.navigate('AddLead');
                  }
                }}
              >
                {item.isAction && (
                  <Feather
                    name="plus"
                    size={rs(14)}
                    color="#FFFFFF"
                    style={{ marginRight: rs(4) }}
                  />
                )}
                <Typography style={styles.eventActionText}>
                  {item.status}
                </Typography>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={{ height: rh(80) }} />
      </ScrollView>

      {/* FAB Layout */}
      <TouchableOpacity
        style={styles.fabContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddLead')}
      >
        <Feather
          name="plus"
          size={rs(18)}
          color="#FFF"
          style={{ marginRight: rs(6) }}
        />
        <Typography style={styles.fabText}>Add New</Typography>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(8),
  },
  headerTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
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
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },

  monthToggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    marginVertical: rs(16),
  },
  arrowBox: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(12),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontSize: rs(18),
    fontWeight: '600',
    color: '#111827',
  },

  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(24),
    marginBottom: rs(24),
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
  },
  searchInput: {
    flex: 1,
    marginLeft: rs(10),
    fontSize: rs(15),
    color: '#111827',
  },
  filterButton: {
    width: rs(48),
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContent: { paddingHorizontal: rs(20), paddingBottom: rh(80) },

  /* Native Grid Component Flow */
  calendarGrid: {
    marginBottom: rs(24),
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(12),
  },
  cellBox: {
    width: rs(42),
    height: rs(42),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayHeaderText: {
    fontSize: rs(15),
    fontWeight: '700',
    color: '#000',
  },
  dateText: {
    fontSize: rs(15),
    fontWeight: '500',
  },

  /* Native Schedule Nested Blocks */
  scheduleWrapper: {
    marginTop: rs(8),
  },
  eventCard: {
    borderRadius: rs(16),
    paddingHorizontal: rs(12),
    paddingVertical: rs(12),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: rs(16),
  },
  eventDateBounding: {
    width: rs(48),
    paddingVertical: rs(10),
    borderRadius: rs(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  eventDateText: {
    fontSize: rs(12),
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 16,
  },
  eventDataArea: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: rs(2),
  },
  eventTitle: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(6),
  },
  eventMetadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(4),
  },
  eventMetadataText: {
    fontSize: rs(12),
    color: '#4B5563',
    marginLeft: rs(6),
  },
  eventActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(12),
    paddingVertical: rs(8),
    borderRadius: rs(16),
    alignSelf: 'flex-end',
    marginBottom: rs(4),
  },
  eventActionText: {
    fontSize: rs(12),
    color: '#FFFFFF',
    fontWeight: '600',
  },

  /* FAB Rules */
  fabContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? rh(100) : rh(90),
    right: rs(20),
    backgroundColor: '#000000',
    borderRadius: rs(28),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(14),
    paddingHorizontal: rs(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: rs(15),
  },
});

export default CalendarScreen;
