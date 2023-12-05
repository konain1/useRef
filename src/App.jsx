import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const mailRef = useRef(null)

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(mailRef.current.value)
  }

  return (
    <>
     <div>
      <h2>form using useRef</h2>

      <form onSubmit={submitHandler}>
        <input ref={mailRef} type='text' placeholder='email here ' />
        <input type='password' placeholder='password here' />

      <button> submit </button>
      </form>
     </div>
    </>
  )
}

export default App
