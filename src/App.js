import Todo from './components/toDo';
import './App.css';
import { useEffect, useState } from 'react';
import { addToDo, getAllTodo , updateToDo , deleteToDo} from './utils/handleApi';



function App() {

  const [toDo, setTodo]= useState([])
  const [text, setText] = useState("")
  const [isUpadting , setIsUpdating] = useState(false)
  const [ toDoId , setToDoId]= useState("")

  useEffect(()=> {
      getAllTodo(setTodo)
  }, [])
  const updateMode = (_id ,text) => {
      setIsUpdating(true)
      setText(text)
      setToDoId(_id)
  }
  return (
    <div className="App">
     <div className="container">
      <h1>TODO APP</h1>

      <div className="top">
        <input type="text" 
        placeholder = "Add todos..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <div onClick={ isUpadting ? () =>updateToDo(  toDoId , text ,setTodo, setText , setIsUpdating) 
        : () => addToDo( text, setText, setTodo)} className='add' 
        >
          {
            isUpadting ? "Upadte" : "Add"
          }
        </div>
      </div>
      <div className="list">
        {toDo.map((item)=> 
        <Todo key={item._id} 
        text={item.text}
        updateMode = {() =>updateMode(item._id, item.text)}
        deleteTodo={() => deleteToDo(item._id , setTodo)}
         />)}
          



      </div>

     </div>
     
    </div>
  );
}

export default App;
