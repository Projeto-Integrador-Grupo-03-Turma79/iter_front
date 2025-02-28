import Home from './pages/home/Home'
import { AuthProvider } from './contexts/AuthContext'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
