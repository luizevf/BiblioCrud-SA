import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () =>{
    return(
        <nav className='navbar'>

        <h2>
           <Link to={'/'}> Bibliocrud </Link>
        </h2>

        <ul>

            <li>
                <a href='/Menu'>Início</a></li>
            <li>
                <a href='/Login'>Aluno</a></li>
                <li>
                <a href='/LoginFuncionario'>Funcionário</a></li>

        </ul>

        </nav>
        
    )
    
}

export default NavBar;