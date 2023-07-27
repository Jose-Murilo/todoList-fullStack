import add from './assets/add.png' 
import list from './assets/list.png'
import './App.css'
import { Prioridades } from './components/Prioridades'
import { Lista } from './components/Lista'
import { useState } from 'react'

import { useForm } from "react-hook-form"

function App() {

  const { register, handleSubmit } = useForm()
  const [ tarefaDados, setTarefadados] = useState('')

  function onSubmit(data) {
        

    setTarefadados(data);
   
  }
  
 

  return (
    <>
    <div className='geral'>

      <div className='container'>
          <section id='titulo'>
            <img src={list} alt="icon" />
            <h1>TodoList</h1>
          </section>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className='designInput'>

          <section id='input'>
            <label htmlFor="tarefa">Tarefa:</label>
            <input type="text" id='tarefa' placeholder='Digite aqui sua tarefa a ser feita...' {...register('tarefa', {required: true})}/>
          </section>
          <button>
              <img src={add} alt="add" />
          </button>
    </div>
     </form>
    <Prioridades/>
    <Lista tarefa={tarefaDados}/>
      </div>
    </div>
    </>
  )
}

export default App
