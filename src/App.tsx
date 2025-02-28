import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Sobre from "./pages/sobre/Sobre"
import Cadastro from './pages/cadastro/Cadastro'
import Navbar from "./components/navbar/Navbar"
import ListarVeiculos from "./components/veiculos/listaveiculos/ListarVeiculos"
import FormVeiculo from "./components/veiculos/formveiculo/FormVeiculo"
import DeletarVeiculo from "./components/veiculos/deletarveiculo/DeletarVeiculo"

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />          
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/logar" element={<Login/>} />
        <Route path="/nossosmotoristas" element={<ListarVeiculos />} />
        <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
        <Route path="/editarveiculo/:id" element={<FormVeiculo />} />
        <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
