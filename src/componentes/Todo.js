import { useState } from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const InicialTodos = [
    {id: 1, name:"todo1", isCompleted: false},
    {id: 2, name:"todo2", isCompleted: false}
]

const Todo = () => {

    const [todos, addTodos] = useState(InicialTodos);
    const [value, setValue] = useState("");

    function saveValue(event) {
        setValue(event.target.value)
    }
    let contador = todos.length;
    console.log(contador);
    function addList(){
        addTodos([...todos, {id:contador, name:value, isCompleted: false}])
    }

    return (
        <div>
            <InputTodo ChangeInput={saveValue} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={addTodos}/>
        </div>
    )
}


export default Todo;