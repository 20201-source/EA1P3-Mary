import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Preguntas from './pages/Preguntas';
import Productos from './pages/Productos';
import Header from './componentes/Header'; 

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preguntas" element={<Preguntas />} />
      <Route path="/producto" element={<Productos />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
