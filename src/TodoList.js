import { useState, useEffect } from 'react'
import { TodoItem } from './TodoItem'
import { TodoForm } from './TodoForm'

import { db } from './index'

export function TodoList() {
    const [todos, setTodos] = useState([
        // {text: "Limpar a casa", isCompleted: false},
        // {text: "Trocar o Óleo do Carro", isCompleted: false},
        // {text: "Fazer a Tarefa da Aula", isCompleted: false}
    ]);

    function loadItems() {
        db.collection('todos').get().then((resultados) => {
            const todoItems = []
            resultados.forEach((doc) => {
                todoItems.push({id: doc.id, text: doc.data()['text'], isCompleted: doc.data()['isCompleted']})
            })
            setTodos(todoItems)
        })
    }

    const addTodo = text => {
        // const newTodos = [...todos, {text}];
        // setTodos(newTodos)
        db.collection('todos').add({
            text: text,
            isCompleted: false
        }).then(() =>{
            loadItems()
        })
    }

    const removeTodo = index => {
        // const newTodos = [...todos];
        // newTodos.splice(index, 1);
        // setTodos(newTodos);
        db.collection('todos').doc(index).delete().then(() =>{
            loadItems()
        })
    }

    const completeTodo = index => {
        // const newTodos = [...todos];
        // newTodos[index].isCompleted = !newTodos[index].isCompleted;
        // setTodos(newTodos);
        db.collection('todos').doc(index).get().then((result) => {
            // console.log(result.data())
            db.collection('todos').doc(index).update({isCompleted: !result.data()['isCompleted']}).then(() => {
                loadItems()
            })
        })
        // db.collection('todos').doc(index).update({isCompleted: true}).then(() => {
        //     loadItems()
        // })
        // console.log(index)
    };

    useEffect(() => {
        loadItems()
    })

    return (
        <div>
            {todos.map((t, index) => (
                <TodoItem
                     todo={t}
                     index={t['id']}
                     removeTodo={removeTodo}
                     completeTodo={completeTodo}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
}