import './App.css';
import Home from './Paginas/Home/Home';
import Aluno from './Paginas/Aluno/Aluno';
import Cadastro from './Paginas/Cadastro/cadastro';
import Login from './Paginas/Login/Login';
import LoginFuncionario from './Paginas/LoginFuncionario/LoginFuncionario';
import Funcionario from './Paginas/Funcionario/Funcionario';
import Livros from './Paginas/Livros/Livros';
import CadastroDeLivros from './Paginas/CadastroDeLivros/CadastroDeLivros';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDoAluno from './Paginas/CadastroDoAluno/CadastroDoAluno';
import Rodape from './Componentes/Rodape/Rodape';





function App() {

  return (
    <BrowserRouter>
   
    
    <div className='App'>
             <div className='container'>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Aluno' element={<Aluno />} />
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/LoginFuncionario' element={<LoginFuncionario/>}/>
        <Route path='/Funcionario' element={<Funcionario/>}/>
        <Route path='/Livros' element={<Livros/>}/>
        <Route path='/CadastroDeLivros' element={<CadastroDeLivros/>}/>
        <Route path='/CadastroDoAluno' element={<CadastroDoAluno/>}/>
     


      </Routes>
     
    </div>
    <Rodape/>
    </div>
    </BrowserRouter>

  )
}

export default App
