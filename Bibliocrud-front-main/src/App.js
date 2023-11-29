import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Menu from './componentes/Menu';
import Contatos from './componentes/Contatos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />



          <Route path="*" element={<div>Pagina não encontrada</div>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
