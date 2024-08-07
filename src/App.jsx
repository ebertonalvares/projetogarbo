import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contato from './components/Contato'
import Produtos from './components/Produtos'
import ScrollToAnchor from './components/ScrollToAnchor'


//links de importação

export default function App() {
  return (
    <Router>
      <ScrollToAnchor/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/produtos' element={<Produtos/>} />
      </Routes>
    </Router>
  )
}