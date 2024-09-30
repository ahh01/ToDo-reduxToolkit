import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "@/store/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  function handleAddTodo(e) {
    e.preventDefault();
    const newTodoText = e.target.elements.todoInput.value.trim();

    if (newTodoText) {
      dispatch(addTodo({ text: newTodoText }));
      e.target.reset();
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoInput" placeholder="Skriv Här" />
        <button type="submit">Lägg till</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
