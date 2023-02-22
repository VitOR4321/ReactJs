// bibioteka do randomowych id do konsoli wpisz: npm i uuid

import React, { useState, useRef, useEffect  } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

    const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App(){
    const [todos, setTodos] = useState([])
    
    // pobiera dane z inputa
    const todoNameRef = useRef()

    // wyswietla dane po refreshu strony
    useEffect(()=>{
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos){
            setTodos(storedTodos)
        }
    }, [])

    //zapisanie listy w pliku JSON
    useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])


    // funkcja do zanaczania czy wykonane zadanie czy nie
    function toggleTodo(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e){
        const name = todoNameRef.current.value
        if(name === ''){
            return
        }
        setTodos(prevTodos =>{
            // uuidv4 losuje id 
            return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }
    // czyście wykonane zadania 
    function handleClearTodos(){
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (
        //html do apki w pliku TodoList.js
      <>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Completed Todos</button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      </>
    )
}

export default App;