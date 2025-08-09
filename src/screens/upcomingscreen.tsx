/* eslint-disable react-native/no-inline-styles */
import { PlatformPressable, Text } from '@react-navigation/elements';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/header';
import { Todo, useAuth, useTodo } from '../hooks';
import ThreeDots from '../assets/threedots.svg';
import Select from '../assets/select.svg';
import Clock from '../assets/clock.svg';
import DatePicker from '../component/calenderheader';

const Card = ({ item }: { item: Todo }) => {
  return (
    <PlatformPressable onPress={() => {}} style={[styles.between, styles.b]}>
      <View style={{ gap: 10 }}>
        <View style={styles.row}>
          <Select />
          <Text
            style={[styles.textx, styles.j]}
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
          >
            {item.todo}
          </Text>
        </View>
        <View style={styles.row}>
          <Clock />
          <Text
            style={[styles.textx, { fontSize: 12, color: 'red' }]}
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
          >
            {item.time}
          </Text>
        </View>
      </View>
      <View>
        <ThreeDots />
      </View>
    </PlatformPressable>
  );
};

export default function UpcomingScreen({ navigation }: { navigation: any }) {
  // const user: User = useAuth((state: any) => state.token);
  const switchs = useAuth((state: any) => state.switchs);
  const data: Todo[] = useTodo((state: any) => state.todo);
  return (
    <SafeAreaView
      style={[styles.container, switchs && { backgroundColor: 'black' }]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={it => it.id + ''}
        ListHeaderComponent={
          <View style={styles.m}>
            <Header navigation={navigation} text={'Upcoming'} />
            <DatePicker />
          </View>
        }
        ListHeaderComponentStyle={styles.f}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  f: { paddingVertical: 12 },
  j: { fontSize: 16, lineHeight: 20 },
  d: { justifyContent: 'flex-end', backgroundColor: '#24A19C' },
  n: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  switch: {
    flexDirection: 'row',
    width: 55,
    borderRadius: 100,
    backgroundColor: '#eee',
    justifyContent: 'flex-start',
    padding: 4,
  },
  b: {
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  img: {
    borderRadius: 300,
    height: 100,
    width: 100,
    objectFit: 'cover',
    backgroundColor: '#eee',
  },
  m: {
    gap: 16,
  },
  top: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  texts: {
    color: 'black',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 24,
    textAlign: 'center',
  },
  textx: {
    color: '#3b3b3b',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    // textAlign: 'center',
  },
});
