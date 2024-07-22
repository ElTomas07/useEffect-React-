import { useEffect, useState } from 'react'
import './Counter.css'

export function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Numero de clicks : ${count}`
  }, [count])

  return (
    <>
      <div className="card">
        <h2 className='title-count'>Haz click para iniciar la cuenta</h2>
        <button className='btn-counter' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}