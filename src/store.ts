import { create } from 'zustand';

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Zustand store
interface State {
  todos: Todo[];
}

export const useStore = create<State>((set) => ({
  todos: [],
  addTodo: (text: string) => set((state) => ({ todos: addTodo(state.todos, text) })),
  updateTodo: (id: number, text: string) => set((state) => ({ todos: updateTodo(state.todos, id, text) })),
  toggleTodo: (id: number) => set((state) => ({ todos: toggleTodo(state.todos, id) })),
  removeTodo: (id: number) => set((state) => ({ todos: removeTodo(state.todos, id) })),
}));