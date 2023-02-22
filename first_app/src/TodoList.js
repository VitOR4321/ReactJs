// po zainstalowaniu dodatku do reacta ES7 React/Redux ...
// wpisz w pusty plik 'rfc' i stworzy pusty szablon jak w html
import React from 'react'
import Todo from './Todo'


export default function TodoList({todos, toggleTodo}) {
  // kod do wyświetlenia listy elementów Todo
  // key={todo} jest potrzebne aby każdy element miał unikalną nazwe 
  // brak błedu : Each child in a list should have a unique "key" prop.
    return (
    todos.map(todo=>{
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
