import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Sobre from "./pages/sobre/Sobre"
import Cadastro from './pages/cadastro/Cadastro'
import Navbar from "./components/navbar/Navbar"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />          
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/logar" element={<Login/>} />
        </Route>
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
