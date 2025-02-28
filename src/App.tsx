import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaViagens from './components/viagens/listarviagens/ListarViagens'

function App() {
  return (
    <>   
        <BrowserRouter>
            <Routes>
            <Route path="/viagens" element={<ListaViagens />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
