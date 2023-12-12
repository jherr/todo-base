import React, { useState } from 'react';
import { createTheme, ThemeProvider, PaletteType } from '@material-ui/core';
import TopBar from './components/TopBar';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [themeMode, setThemeMode] = useState<PaletteType>('light');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1,
        text,
      },
    ]);
  };

  const theme = createTheme({
    palette: {
      type: themeMode,
    },
  });

  const toggleTheme = () => {
    console.log('toggleTheme function called');
    setThemeMode((prevMode) => {
      const nextMode = prevMode === 'light' ? 'dark' : 'light';
      console.log(`Changing theme from ${prevMode} to ${nextMode}`);
      return nextMode;
    });
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <TopBar toggleTheme={toggleTheme} />
      <TodoList todos={todos} removeTodo={removeTodo} />
      <TodoAdd addTodo={addTodo} />
    </ThemeProvider>
  );
}

export default App;
