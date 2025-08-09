import { create } from 'zustand';
import appService from '../service';
import { getRandomFutureDateTime } from '../utils/dategenerator';
export interface Auth {
  email?: string;
  username?: string;
  password: string;
}
const auth: Auth = {
  email: '',
  password: '',
  username: '',
};
export interface User {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
}
const token: User = {
  accessToken: '',
  email: '',
  firstName: '',
  gender: '',
  id: 0,
  image: '',
  lastName: '',
  refreshToken: '',
  username: '',
};
export interface Todo {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
  time: string;
  date: string;
}
const todo: Todo[] = [];
const task: Todo = {
  completed: false,
  id: 0,
  todo: '',
  userId: 0,
  time: '',
  date: '',
};
const switchs: boolean = false;

export const useAuth = create(set => ({
  auth,
  token,
  switchs,
  updateSwitch: (val: boolean) => set({ switchs: val }),
  updateAuth: (newToken: Auth) => set({ auth: { ...auth, ...newToken } }),
  login: (email: string, password: string, callback: () => void) => {
    if (email && password) {
      return callback();
    }
    throw new Error('Email and password are required');
  },
  logout: () => set({ auth: { ...auth, email: '', password: '' }, token }),
  reset: () =>
    set({
      auth,
      token: {
        accessToken: '',
        email: '',
        firstName: '',
        gender: '',
        id: 0,
        image: '',
        lastName: '',
        refreshToken: '',
        username: '',
      },
    }),
  signin: async (email: string, password: string) => {
    await appService
      .logUserIn(email, password)
      .then((res: User) => set({ token: res }));
  },

  updateToken: (newToken: User) => set({ token: newToken }),
}));

export const useTodo = create(set => ({
  todo,
  task,
  updateTodo: (val: Todo[]) => set({ todo: val }),
  updateTodos: (id: any, updates: Partial<Todo>) =>
    set((state: any) => ({
      todo: state.todo.map((item: any) =>
        item.id === id ? { ...item, ...updates } : item,
      ),
    })),
  updateTask: (val: Todo) => set({ task: { ...task, ...val } }),
  add: async (todos: string, userId: number, val: Todo[]) => {
    const date = getRandomFutureDateTime(30);
    console.log(date);
    await appService.addTodo(todos, userId).then(res =>
      set({
        todo: [
          ...val,
          {
            ...res,
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
          },
        ],
        task,
      }),
    );
  },
  get: async (id: string) => {
    const date = getRandomFutureDateTime(30);
    console.log(date);
    await appService.getTodos(id).then(res =>
      set({
        todo: res.map(it => ({
          ...it,
          date: date.toLocaleDateString(),
          time: date.toLocaleTimeString(),
        })),
      }),
    );
  },
}));
