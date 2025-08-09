/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useAuth } from '../hooks';
import Header from '../component/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../component/input';
import { PlatformPressable, Text } from '@react-navigation/elements';
import Boy from '../assets/boy.svg';
import Girl from '../assets/girl.svg';
import Bell from '../assets/bell.svg';
import Timer from '../assets/timer.svg';
import Message from '../assets/message.svg';
import Monitor from '../assets/monitor.svg';
import { ReactNode } from 'react';

const Card = ({ item }: { item: { text: string; icon: ReactNode } }) => (
  <PlatformPressable
    style={{ flex: 1, padding: 8 }}
    pressColor="#24A19C"
    pressOpacity={0.5}
    onPress={() => {
      console.log('navigate');
    }}
  >
    <View
      style={{
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        gap: 10,
      }}
    >
      {item.icon}
      <Text
        style={styles.textx}
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
      >
        {item.text}
      </Text>
    </View>
  </PlatformPressable>
);

export default function HelpcenterScreen({ navigation }: { navigation: any }) {
  const switchs = useAuth((state: any) => state.switchs);
  const data: { text: string; icon: ReactNode }[] = [
    { text: 'Platforms are used', icon: <Boy /> },
    { text: 'Usage questions', icon: <Message /> },
    { text: 'Application usage', icon: <Girl /> },
    { text: 'Update Time App', icon: <Timer /> },
    { text: 'Cross Platforms Apps', icon: <Monitor /> },
    { text: 'Update Reminder', icon: <Bell /> },
  ];
  return (
    <SafeAreaView
      style={[styles.container, switchs && { backgroundColor: 'black' }]}
    >
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={it => it.text}
        ListHeaderComponent={
          <View style={styles.input}>
            <Header navigation={navigation} text={'Help Center'} />
            <Input
              value={''}
              onChange={function (val: string): void {
                throw new Error('Function not implemented.');
              }}
              error={false}
            />
          </View>
        }
        ListHeaderComponentStyle={styles.f}
        style={{ flex: 1 }}
      />
      <Pressable onPress={() => {}} style={styles.button}>
        <Text
          style={styles.buttonText}
          adjustsFontSizeToFit={true}
          allowFontScaling={true}
        >
          More Topics
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#24A19C',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  input: {
    gap: 20,
  },
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
    textAlign: 'center',
  },
});
