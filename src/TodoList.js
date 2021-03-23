import { useState } from 'react'
import { TodoItem } from './TodoItem'
import { TodoForm } from './TodoForm'

export function TodoList() {
    const [todos, setTodos] = useState([
        {text: "Limpar a casa", isCompleted: false},
        {text: "Trocar o Óleo do Carro", isCompleted: false},
        {text: "Fazer a Tarefa da Aula", isCompleted: false}
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    return (
        <div>
            {todos.map((t, index) => (
                <TodoItem
                     todo={t}
                     index={index}
                     removeTodo={removeTodo}
                     completeTodo={completeTodo}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
}