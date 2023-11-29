

import NavBar from '../../Componentes/NavBar';
import Rodape from '../../Componentes/Rodape/Rodape';
import './Funcionario.css';


const Funcionário = () => {

    return ( 
        <div>
           
            <div>
              <NavBar/>
               
                <div className="card">
                    <a href="/cadastro" className='text'>+ Adiocionar Funcionário</a>
                    <h3 className='text2'>Funcionário</h3>
                    <br/>
                    <br/>
                    <div className='card2'>
                    <h4 className='text3'>Nome</h4>
                    <h4 className='text'>Nivel do Acesso</h4>
                    <h4 className='text4'>Data do registro</h4>
                    </div>
                    
                   
                </div>
                
                                
            </div>
            <Rodape/>


        </div>
    )
}
export default Funcionário;