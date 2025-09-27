import {ADD_TODO,EDIT_TODO,REMOVE_TODO} from '../constants/index'

const initialState = [
//     {
//     id:1,
//     title:'lokesh'
// },
// {
//     id:2,
//     title:'manish'
// }
]
function todoReducer(todos = initialState, action){
    if(action.type == ADD_TODO){
        return [ ...todos,{id:action.payload.id, title:action.payload.title}]
    }
    if(action.type == EDIT_TODO){
        return todos.filter(todo => (todo.id != action.payload))
    }
    if(action.type == REMOVE_TODO){
        return todos.map(todo => {
            if(todo.id == action.payload.id){
                todo.title = action.payload.title;
            }
            return todo
            })
    }
    return todos;
}
export default todoReducer;