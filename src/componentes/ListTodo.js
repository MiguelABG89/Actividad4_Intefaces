
const ListTodo = ({Todos, setTodos}) => {
  return (
      <div>
        <ul>
          {Todos.map(todo =>
            <li key={todo.id} className={todo}>
              {todo.name}
            <button onClick={() => {
              let index = Todos.indexOf(todo)
              Todos.splice(index, 1) 
              setTodos([...Todos])
            }}>
            Eliminar</button> 
            <button onClick={()=>{
              let index = Todos.indexOf(todo)
              console.log(index)
              const UpdateTodos = Todos.map((todo)=>{
                if(index === todo.id){                   
                
                  return({...todo, isCompleted:true});  
                  
                }
                else{
                
                    return({...todo});                  
                  
                }
              })
              setTodos(UpdateTodos);
            }}>Actualizar</button>
            <span style={{ background: todo.isCompleted ? 'green' : 'red' }}>{todo.isCompleted ? 'Hecho' : 'Pendiente'}</span>

              
              </li>
              
          )}
      </ul>
      
     </div>
  )
}

export default ListTodo;