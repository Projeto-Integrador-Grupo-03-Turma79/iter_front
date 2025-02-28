import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/cadastro/Cadastro'

function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes> 
        <Route path="/" element={<Cadastro/>} />
          <Route path="/cadastrar" element={<Cadastro/>} />

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
