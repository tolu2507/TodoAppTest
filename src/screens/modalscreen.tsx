import { PlatformPressable } from '@react-navigation/elements';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import Send from '../assets/send.svg';
import Buttons from '../assets/buttons.svg';
import { TextInput } from 'react-native-gesture-handler';
import { Todo, useAuth, User, useTodo } from '../hooks';

export default function ModalScreen({ navigation }: { navigation: any }) {
  const data: Todo[] = useTodo((state: any) => state.todo);
  const setAdd = useTodo((state: any) => state.add);
  const task: Todo = useTodo((state: any) => state.task);
  const setTask = useTodo((state: any) => state.updateTask);
  const user: User = useAuth((state: any) => state.token);
  return (
    <PlatformPressable
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0} // tweak this if needed
      >
        <View style={styles.body}>
          <View style={styles.b}>
            <TextInput
              style={styles.input}
              placeholder={'eg: Meeting with client'}
              autoCapitalize="none"
              autoCorrect={false}
              value={task.todo}
              onChangeText={(val: string) => setTask({ ...task, todo: val })}
              multiline={true}
              placeholderTextColor={'#a6aaaa'}
            />
            <TextInput
              style={styles.input}
              placeholder={'Description'}
              autoCapitalize="none"
              autoCorrect={false}
              value={task.todo}
              onChangeText={(val: string) =>
                setTask({ ...task, todo: val })
              }
              multiline={true}
              placeholderTextColor={'#a6aaaa'}
            />
            <View style={styles.flex}>
              <PlatformPressable>
                <Buttons />
              </PlatformPressable>
              <PlatformPressable
                onPress={() => {
                  setAdd(task.todo, user.id, data);
                  navigation.goBack();
                }}
              >
                <Send />
              </PlatformPressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  input: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  b: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: { flex: 1 },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00000058',
    justifyContent: 'flex-end',
  },
});
