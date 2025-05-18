import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Music from './Pages/Music'
import Tech from './Pages/Tech/Tech'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/music" element={<Music />} />
        <Route path='/tech' element={<Tech />} />
      </Routes>
    </Router>
  )
}

export default App
