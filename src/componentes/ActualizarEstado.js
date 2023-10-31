
const ActualizarEstado = ({Todos, setTodo})=>{
    return(
        <div>
            <ul>
                {Todos.map(todo =>
                    <li key={todo} className={todo} >
                        {todo}
                        <button onClick={()=>{
                            let index = Todos.indexOf(todo)
                            console.log(index)
                        }}>Actualizar</button>
                    </li>)
                }
            </ul>
        </div>
    )
}
export default ActualizarEstado