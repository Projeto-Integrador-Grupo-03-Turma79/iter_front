import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListarVeiculos from "./components/veiculos/listaveiculos/ListarVeiculos"
import FormVeiculo from "./components/veiculos/formveiculo/FormVeiculo"
import DeletarVeiculo from "./components/veiculos/deletarveiculo/DeletarVeiculo"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>

            <Route path="/nossosmotoristas" element={<ListarVeiculos />} />
            <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
            <Route path="/editarveiculo/:id" element={<FormVeiculo />} />
            <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
