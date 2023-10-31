
const ListTodo = ({Todos, setTodos}) => {
    return (
        <div>
          <ul>
            {Todos.map(todo =>
              <li key={todo.id} className={todo}>
                {todo.name}
              <button onClick={() => {
                let index = Todos.indexOf(todo)
                Todos.splice(index, 1) //At position index, remove n=1 items
                setTodos([...Todos])
              }}>
              Eliminar</button> 
              <button onClick={()=>{
                let index = Todos.indexOf(todo)
                console.log(index)
                const UpdateTodos = Todos.map((todo)=>{
                  
                })
                
              }}>Actualizar</button>
              <input/>

                
                </li>
                
            )}
        </ul>
        
       </div>
    )
}

export default ListTodo;