/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({
  day,
  date,
  isSelected,
}: {
  day: string;
  date: string;
  isSelected: boolean;
}) => {
  return (
    <View
      style={[
        styles.card,
        isSelected && { backgroundColor: '#00C4B4', borderRadius: 12 },
      ]}
    >
      <Text style={[styles.dayText, isSelected && { color: 'white' }]}>
        {day}
      </Text>
      <Text style={[styles.dateText, isSelected && { color: 'white' }]}>
        {date}
      </Text>
    </View>
  );
};

const DatePicker = () => {
  // Get current date, month, and year
  const currentDate = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  const currentDayOfWeek = currentDate.getDay(); // 0 (Sun) to 6 (Sat)

  // Calculate the start of the week (Monday)
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(
    currentDay - (currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1),
  );

  // Generate array of dates for the week, starting from Monday
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return {
      day: dayNames[i],
      date: date.getDate().toString(),
      isSelected:
        date.getDate() === currentDay &&
        date.getMonth() === currentDate.getMonth(),
    };
  });

  // Update todayText to reflect current day
  const fullDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const todayDayName = fullDayNames[currentDayOfWeek];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.monthText}>{`${currentMonth} ${currentYear}`}</Text>
      </View>
      <View style={styles.weekdays}>
        {dates.map((item, index) => (
          <Card
            key={index}
            day={item.day}
            date={item.date}
            isSelected={item.isSelected}
          />
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.todayText}>Today, {todayDayName}</Text>
        <TouchableOpacity style={styles.rescheduleButton}>
          <Text style={styles.rescheduleText}>Reschedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 2,
  },
  header: { padding: 10 },
  monthText: { fontSize: 18, fontWeight: '600' },
  card: {
    gap: 10,
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
  },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    gap: 10,
  },
  dates: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    fontWeight: '700',
  },
  dateText: {
    fontSize: 16,
    // width: '14%',
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  },
  selectedDate: {
    fontSize: 16,
    width: '14%',
    textAlign: 'center',
    paddingVertical: 5,
    backgroundColor: '#00C4B4',
    color: 'white',
    borderRadius: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
  },
  todayText: { fontSize: 16 },
  rescheduleButton: {
    padding: 10,
    // backgroundColor: '#00C4B4',
    borderRadius: 5,
  },
  rescheduleText: { color: '#00C4B4', fontSize: 16, fontWeight: 'bold' },
});

export default DatePicker;
