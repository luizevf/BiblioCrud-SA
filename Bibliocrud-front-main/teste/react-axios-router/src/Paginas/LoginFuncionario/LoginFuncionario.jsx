import './LoginFuncionario.css'


const LoginFuncionario = () => {

    const handleClick = () => {
        var novaURL = "/Funcionario";
        window.location.href = novaURL;
    };
    const Voltar = () => {
        var novaURL = "/";
        window.location.href = novaURL;
    };
    return (
        
        <div className="home h1">
            <div>
              
            </div>

            <h1 className="h2">Acesso Ao Portal</h1>

            <div className="card3">
                <h2>Funcionário</h2>
                <br/>
            
                <div className="card-body">
                    <p className="p">Login</p>

                    <input className="myInput" placeholder="Login"></input>
                    <br />
                    <p className="p">Senha</p>

                    <input className="myInput" placeholder="Senha"></input>
                </div><br />
                <button className="btn" onClick={handleClick}>Entrar</button>
                <button className='btn2' onClick={Voltar}>Voltar</button>
            </div> 
        </div>
    )
}
export default LoginFuncionario;