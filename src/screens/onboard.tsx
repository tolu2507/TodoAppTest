import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../component/input';
import { Auth, useAuth } from '../hooks';

export default function OnboardScreen() {
  const auth: Auth = useAuth((state: any) => state.auth);
  const updateAuth = useAuth((state: any) => state.updateAuth);
  const signin = useAuth((state: any) => state.signin);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <View>
          <Text
            style={styles.text}
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
          >
            Welcome Back!
          </Text>
          <Text
            style={styles.texts}
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
          >
            Your work faster and structured with Todyapp
          </Text>
        </View>
        <View style={styles.input}>
          <Input
            text={'Email Address'}
            value={auth.email + ''}
            onChange={(val: string) => updateAuth({ ...auth, email: val })}
            error={false}
          />
          <Input
            text={'Password'}
            value={auth.password}
            onChange={(val: string) => updateAuth({ ...auth, password: val })}
            error={false}
          />
        </View>
      </View>
      <Pressable onPress={() => signin(auth.email+'',auth.password)} style={styles.button}>
        <Text
          style={styles.buttonText}
          adjustsFontSizeToFit={true}
          allowFontScaling={true}
        >
          Login
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    gap: 20,
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
  texts: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
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
});
