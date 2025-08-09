import { Todo, User } from '../hooks';

class AppService {
  async logUserIn(email: string, password: string): Promise<User> {
    console.log({ email, password });
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: 'include', // Include cookies (e.g., accessToken) in the request
    });
    const data = await response.json();
    console.log(data);
    return data as User;
  }

  async addTodo(todo: string, userId: number): Promise<Todo> {
    const response = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo,
        completed: false,
        userId,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data as Todo;
  }
  async getTodos(userId: string): Promise<Todo[]> {
    /* getting todos of user with id 5 */
    const response = await fetch(`https://dummyjson.com/todos/user/${userId}`);
    const data = await response.json();
    console.log(data);
    return data.todos as Todo[];
  }
}

const appService = new AppService();
export default appService;
