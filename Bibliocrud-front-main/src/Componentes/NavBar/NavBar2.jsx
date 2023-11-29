import { Link } from 'react-router-dom';
import './NavBar2.css';

const NavLink = () => {
    return (
        <nav className='navbar2'>

            <h2>
                <Link to={'/'}> Bibliocrud </Link>
            </h2>

            <ul>

                <li>
                    <a href='/Menu'>Livros</a></li>
                <li>
                    <a href='/Login'>Alunos</a></li>
                <li>
                    <a href='/LoginFuncionario'>Funcionários</a></li>

            </ul>

        </nav>

    )

}

export default NavLink;