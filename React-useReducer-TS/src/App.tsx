import './App.css'
import Counter from './Counter'
import { CounterProvider, initState } from './context/CounterContext'

function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <div className="App">
          <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
        </div>
      </CounterProvider>

    </>
  )
}

export default App
