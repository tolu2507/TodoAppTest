/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from '../hooks';

export default function Input({
  text = '',
  value,
  onChange,
  error,
}: {
  text?: string;
  value: string;
  onChange: (val: string) => void;
  error: boolean;
}) {
  const switchs = useAuth((state: any) => state.switchs);
  const place: string = text ? 'Enter your ' + text : 'Enter your ' + 'topic';
  return (
    <View>
      {text && (
        <Text
          style={[styles.textx, switchs && { color: 'white' }]}
          adjustsFontSizeToFit={true}
          allowFontScaling={true}
        >
          {text}
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={'#000'}
        placeholder={place}
        keyboardType={text === 'Email Address' ? 'email-address' : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={(tex: string) => onChange(tex)}
        secureTextEntry={text === 'Password'}
      />
      {error && (
        <Text
          style={styles.errorText}
          adjustsFontSizeToFit={true}
          allowFontScaling={true}
        >
          Error occured, please try again later
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 50,
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  textx: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  errorText: { color: 'red', fontSize: 12, fontWeight: 'bold' },
});
