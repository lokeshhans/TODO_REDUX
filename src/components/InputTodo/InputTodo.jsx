import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo } from '../../actions'


function InputTodo() {
    const [todoText,setTodoText] = useState('')
    const todoList = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    function inputTodo(){
        const lastId = (todoList.length == 0)? 0 : todoList[todoList.length - 1].id
        dispatch(addTodo({title:todoText, id:lastId}))
        setTodoText('')
    }
  return ( <>
        <input type="text"
        placeholder='Add Todo.....'
        value={todoText}
        onChange={(e)=>setTodoText(e.target.value)}
        />
        <button onClick={inputTodo}> Add</button>
    </>
  )
}

export default InputTodo