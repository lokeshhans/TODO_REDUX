import { useSelector } from "react-redux"
import Todo from "../Todo/Todo"
import InputTodo from "../InputTodo/InputTodo"
function TodoList() {
    const TodoList = useSelector((state)=> state.todos)
  return ( <>
      <InputTodo />
      {TodoList && TodoList.map((todo) => <Todo title={todo.title} key={todo.id} /> )}  
    </>
  )
}

export default TodoList