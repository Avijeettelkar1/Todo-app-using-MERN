import { CreateTodo } from "./Components/CreateTodo.jsx"
import {Todos} from "./Components/Todos.jsx"

function App() {


  return (
    <>
      <div>
        <CreateTodo/>
        <Todos todos={[
          { 
            title:"avijeet",
            description:"gym",
            completed:false
          }      
        ]}></Todos>
      </div>
    </>
  )
}

export default App
