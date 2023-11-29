import './Aluno.css';
import NavBar from '../../Componentes/NavBar';

const Aluno = () =>{
    const emprestimo = {
        titulo: 'Anderson Nunes',
        status: 'Em dia',
        data: '01/01/2023',

        titulo2:'André',
        status2:'Atrasado',
        data2:'08/03/2023'
    };
    
    return(
        <div>
            <NavBar/>
            <br/>
        <div className="card">
            <h3 className='text2'>Empréstimo:</h3>
            <br/>
            <br/>
            <div className='card2'>
                <ul className='ul'>
                <li className='li'><strong className='li strong'>Titulo:</strong> {emprestimo.titulo}</li>
                <li><strong>Status:</strong> {emprestimo.status}</li>
                <li><strong>Data:</strong> {emprestimo.data}</li>
            </ul>
            </div>
            <div className='card2'>
                <ul className='ul'>
                <li className='li'><strong className='li strong'>Titulo:</strong> {emprestimo.titulo2}</li>
                <li><strong>Status:</strong> {emprestimo.status2}</li>
                <li><strong>Data:</strong> {emprestimo.data2}</li>
            </ul>
            </div>


            
        </div>
    </div>
    )
}
export default Aluno;