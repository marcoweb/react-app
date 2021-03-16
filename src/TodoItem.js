
export function TodoItem({todo, index, removeTodo}) {
    return (
        <div>
            {todo.text}
            <button onClick={() => removeTodo(index)}>X</button>
        </div>

    );
}