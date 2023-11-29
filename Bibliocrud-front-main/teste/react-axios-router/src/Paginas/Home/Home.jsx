
import './Home.css';


const Home = () => {
    const handleClick = () => {

        var novaURL = "/LoginFuncionario"; 

            window.location.href = novaURL;
    };
    const handleClick2 = () => {

        var novaURL = "/Login"; 

            window.location.href = novaURL;
    };
    return (
<di>
    
 
        <div className="home">
           
            <h1 className="h1">Bibliocrud</h1>
            <div className='card3'>
                <button className='btn' onClick={handleClick}>Funcionario</button>
                <br/>
                <button className='btn'onClick={handleClick2}>Aluno</button>
            </div>
        </div>
        
        
        </di>
    )

}

export default Home; 