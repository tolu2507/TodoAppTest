/* eslint-disable react-native/no-inline-styles */
import { PlatformPressable, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import Search from '../assets/search.svg';
import Back from '../assets/caretleft.svg';
import { useAuth } from '../hooks';

export default function Header({
  navigation,
  text,
}: {
  navigation: any;
  text: string;
}) {
  const switchs = useAuth((state: any) => state.switchs);
  return (
    <View style={styles.between}>
      <PlatformPressable
        style={{ backgroundColor: '#eee', borderRadius: 100, padding: 4 }}
        onPress={() => navigation.goBack()}
      >
        <Back />
      </PlatformPressable>
      <Text
        style={[styles.text, switchs && { color: 'white' }]}
        adjustsFontSizeToFit={true}
        allowFontScaling={true}
      >
        {text}
      </Text>
      {text === 'Settings' ? (
        <PlatformPressable
          style={{ backgroundColor: '#eee', borderRadius: 100, padding: 4 }}
        >
          <Search />
        </PlatformPressable>
      ) : text === 'Upcoming' ? (
        <PlatformPressable
          style={{ backgroundColor: '#eee', borderRadius: 100, padding: 4 }}
        >
          <Search />
        </PlatformPressable>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
