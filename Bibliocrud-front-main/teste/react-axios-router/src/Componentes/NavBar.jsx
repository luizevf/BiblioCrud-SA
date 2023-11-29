import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className='navbar'>

            <h2>
                <Link to={'/'}> Bibliocrud </Link>
            </h2>

            <ul>
            <li>
                    <a href='/Livros'>Livros</a></li>

                <li>
                    <a href='/Aluno'>Aluno</a></li>
                <li>
                    <a href='/Funcionario'>Funcionário</a></li>

            </ul>

        </nav>

    )

}

export default NavBar;