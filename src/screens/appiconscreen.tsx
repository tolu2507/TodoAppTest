/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Auth, useAuth, User } from '../hooks';
import Header from '../component/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../component/input';
import { PlatformPressable, Text } from '@react-navigation/elements';
import Task from '../assets/task.svg';

const Card = ({ item }: { item: string }) => (
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
        backgroundColor: item,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Task />
    </View>
  </PlatformPressable>
);

export default function AppIconScreen({ navigation }: { navigation: any }) {
  const auth: Auth = useAuth((state: any) => state.auth);
  const user: User = useAuth((state: any) => state.token);
  const switchs = useAuth((state: any) => state.switchs);
  const data: string[] = [
    'yellow',
    'red',
    'green',
    'black',
    'grey',
    '#eee',
    'blue',
    'gray',
    '#24A19C',
    '#701f1f',
    '#437943',
    '#360404',
    '#3d1f1f',
    '#eee',
    '#040457',
    '#fd5b5b',
    '#61eef8',
    '#67772c',
    '#91db06',
    '#2cc406',
    '#ff00bf',
    '#920780',
    '#24A19C',
    '#3a0c0c',
    '#a2b6a2',
    '#c43a3a',
    '#3d1f1f9e',
    '#4f9c47',
    '#191924',
    '#531e1e8b',
  ];
  return (
    <SafeAreaView
      style={[styles.container, switchs && { backgroundColor: 'black' }]}
    >
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={it => it}
        ListHeaderComponent={
          <Header navigation={navigation} text={'App Icon'} />
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
          Save Icons
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100,
    width: 30,
    height: 30,
    backgroundColor: '#eee',
  },
  u: {
    width: '100%',
    overflow: 'hidden',
    padding: 14,
    gap: 10,
    flexDirection: 'row',
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    marginBottom: 20,
  },
  rod: {
    backgroundColor: '#24A19C',
    height: 40,
    width: '100%',
  },
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
