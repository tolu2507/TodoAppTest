/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Auth, useAuth, User } from '../hooks';
import Header from '../component/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../component/input';
import { Text } from '@react-navigation/elements';

export default function AccountScreen({ navigation }: { navigation: any }) {
  const auth: Auth = useAuth((state: any) => state.auth);
  const user: User = useAuth((state: any) => state.token);
  const switchs = useAuth((state: any) => state.switchs);
  const data: any[] = [1];
  return (
    <SafeAreaView
      style={[styles.container, switchs && { backgroundColor: 'black' }]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.input}>
            <Input
              text={'Full Name'}
              value={user.firstName + ' ' + user.lastName}
              onChange={(val: string) => {}}
              error={false}
            />
            <Input
              text={'Email Address'}
              value={auth.email + ''}
              onChange={(val: string) => {}}
              error={false}
            />
            <Input
              text={'Password'}
              value={auth.password}
              onChange={(val: string) => {}}
              error={false}
            />
          </View>
        )}
        keyExtractor={it => it + ''}
        ListHeaderComponent={
          <Header navigation={navigation} text={'Accounts'} />
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
          Save Changes
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
