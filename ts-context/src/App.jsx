import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Hello');
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = name
    console.log('>>>>> UseEffect');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', clichBtn);
    return () => {
      btn.removeEventListener('click', clichBtn)
      console.log('removed');
    }
  }, [name])

  const changeName = (e) => {
    setName(e)
  }

  const changeAge = (e) => {
    setAge(e)
  }

  const clichBtn = (e) => {
    console.log('asd')
  }
  return (
    <>
      <input value={name} onChange={(e) => changeName(e.target.value)} />
      <input value={age} type="number" onChange={(e) => changeAge(e.target.value)} />
      <button id='btn'>Click ME!</button>
    </>
  )
}

export default App
