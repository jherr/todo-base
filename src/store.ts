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

