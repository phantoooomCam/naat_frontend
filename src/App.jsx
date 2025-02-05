import { useState } from 'react'
import Register from './pages/Register/register.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Route path="/registro" element={<Register />} />
      </div>
    </>
  )
}

export default App
