/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { PlatformPressable, Text } from '@react-navigation/elements';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Settings from '../assets/settings.svg';
import Plus from '../assets/plus.svg';
import { useNavigation } from '@react-navigation/native';
import { Todo, useAuth, User, useTodo } from '../hooks';
import { useEffect } from 'react';

const Header = ({ switchs }: { switchs: boolean }) => (
  <View style={styles.header}>
    <View>
      <Text
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[styles.text, styles.big, switchs && { color: 'white' }]}
      >
        Today
      </Text>
      <Text
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[styles.text, switchs && { color: 'white' }]}
      >
        Best platform for creating todo lists
      </Text>
    </View>
    <PlatformPressable pressColor="#24A19C" pressOpacity={0.5}>
      <Settings width={24} height={24} />
    </PlatformPressable>
  </View>
);

const Footer = ({ navigation, switchs }: any) => (
  <PlatformPressable
    onPress={() => {
      console.log('navigate');
      navigation.navigate('Modal');
    }}
    style={styles.card}
    pressColor="#24A19C"
    pressOpacity={0.5}
  >
    <View
      style={[styles.rod, { backgroundColor: switchs ? '#eee' : 'black' }]}
    />
    <View>
      <PlatformPressable
        onPress={() => {
          console.log('navigate');
          navigation.navigate('Modal');
        }}
        style={styles.button}
      >
        <Plus />
        <Text
          style={[styles.text, { fontWeight: '800', marginBottom: 0 }]}
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
        >
          Tap plus to create new task
        </Text>
      </PlatformPressable>
      <View style={[styles.header, { padding: 14 }]}>
        <Text
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
          style={[styles.text, { fontSize: 12 }]}
        >
          Add Your tasks
        </Text>
        <Text
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
          style={[styles.text, { fontSize: 12 }]}
        >
          Today Mon 20 July , 2025
        </Text>
      </View>
    </View>
  </PlatformPressable>
);

const Card = ({ item, navigation }: { item: Todo; navigation: any }) => (
  <PlatformPressable
    style={styles.card}
    pressColor="#24A19C"
    pressOpacity={0.5}
    onPress={() => {
      console.log('navigate');
      navigation.navigate('Modal');
    }}
  >
    <View style={styles.rod} />
    <View
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: 14,
        gap: 10,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Plus />
        <Text
          style={[styles.text, { fontWeight: '800', marginBottom: 0 }]}
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
        >
          {item.todo}
        </Text>
      </View>
      <Text
        style={[styles.text, { fontWeight: '800', marginBottom: 0 }]}
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
      >
        {item.id}
      </Text>
      <View style={[styles.header]}>
        <Text
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
          style={[styles.text, { fontSize: 16 }]}
        >
          {item.date}
        </Text>
        <Text
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
          style={[styles.text, { fontSize: 12 }]}
        >
          {item.time}
        </Text>
      </View>
    </View>
  </PlatformPressable>
);

export default function DashboardScreen() {
  const navigation = useNavigation();
  const data: Todo[] = useTodo((state: any) => state.todo);
  const user: User = useAuth((state: any) => state.token);
  const getTodo = useTodo((state: any) => state.get);
  const switchs = useAuth((state: any) => state.switchs);
  useEffect(() => getTodo(user.id), []);
  return (
    <SafeAreaView
      style={[styles.container, switchs && { backgroundColor: 'black' }]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={it => it.id + ''}
        ListHeaderComponent={<Header switchs={switchs} />}
        ListFooterComponent={
          <Footer navigation={navigation} switchs={switchs} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  big: { fontSize: 30, fontWeight: '800', lineHeight: 40 },
  button: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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
    gap: 10,
  },
  rod: {
    backgroundColor: '#24A19C',
    height: 40,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
