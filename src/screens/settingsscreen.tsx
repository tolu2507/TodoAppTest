/* eslint-disable react-native/no-inline-styles */
import { PlatformPressable, Text } from '@react-navigation/elements';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/header';
import { useAuth, User } from '../hooks';
import Arrow from '../assets/caretright.svg';
import Account from '../assets/account.svg';
import Theme from '../assets/theme.svg';
import AppIcon from '../assets/appicon.svg';
import Productivity from '../assets/productivity.svg';
import Logout from '../assets/logout.svg';
import Mode from '../assets/mode.svg';
import Helpcenter from '../assets/helpcenter.svg';
import Privacy from '../assets/privacy.svg';
import { ReactNode } from 'react';

const Card = ({
  item,
  select,
}: {
  item: { icon: ReactNode; text: string; action: () => void };
  select: boolean;
}) => {
  return (
    <PlatformPressable onPress={item.action} style={[styles.between, styles.b]}>
      <View style={styles.row}>
        {item.icon}
        <Text
          style={[styles.textx, styles.j, select && { color: 'white' }]}
          adjustsFontSizeToFit={true}
          allowFontScaling={true}
        >
          {item.text}
        </Text>
      </View>
      <View>
        {item.text === 'Change Mode' ? (
          <View style={[styles.switch, select && styles.d]}>
            <View style={styles.n} />
          </View>
        ) : (
          <Arrow />
        )}
      </View>
    </PlatformPressable>
  );
};

export default function SettingsScreen({ navigation }: { navigation: any }) {
  const user: User = useAuth((state: any) => state.token);
  const signOut = useAuth((state: any) => state.reset);
  const setSwitches = useAuth((state: any) => state.updateSwitch);
  const switchs = useAuth((state: any) => state.switchs);
  const data: { text: string; icon: ReactNode; action: () => void }[] = [
    {
      text: 'Account',
      icon: <Account />,
      action: () => navigation.navigate('Accounts'),
    },
    {
      text: 'Theme',
      icon: <Theme />,
      action: () => navigation.navigate('Theme'),
    },
    {
      text: 'App Icon',
      icon: <AppIcon />,
      action: () => navigation.navigate('Appicon'),
    },
    {
      text: 'Productivity',
      icon: <Productivity />,
      action: () => {},
    },
    {
      text: 'Change Mode',
      icon: <Mode />,
      action: () => setSwitches(!switchs),
    },
    {
      text: 'Privacy Policy',
      icon: <Privacy />,
      action: () => {},
    },
    {
      text: 'Help Center',
      icon: <Helpcenter />,
      action: () => navigation.navigate('Helpcenter'),
    },
    { text: 'Logout', icon: <Logout />, action: () => signOut() },
  ];
  return (
    <SafeAreaView
      style={[styles.container, switchs && { backgroundColor: 'black' }]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} select={switchs} />}
        keyExtractor={it => it.text}
        ListHeaderComponent={
          <View style={styles.m}>
            <Header navigation={navigation} text={'Settings'} />
            <View style={styles.top}>
              <Image
                source={{ uri: user.image }}
                alt="setting"
                resizeMode="cover"
                style={styles.img}
              />
              <Text
                style={[styles.texts, switchs && { color: 'white' }]}
                adjustsFontSizeToFit={true}
                allowFontScaling={true}
              >
                {user.firstName} {user.lastName}
              </Text>
              <Text
                style={[styles.textx, switchs && { color: 'white' }]}
                adjustsFontSizeToFit={true}
                allowFontScaling={true}
              >
                @{user.username}
              </Text>
            </View>
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
