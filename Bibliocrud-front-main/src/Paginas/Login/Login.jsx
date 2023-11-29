
const Login = () =>{
    const handleClick = () => {

        var novaURL = "/Aluno"; 

            window.location.href = novaURL;
    };
    const Voltar = () => {
        var novaURL = "/";
        window.location.href = novaURL;
    };
    return(
        <div className="home h1">
             <h1 className="h2">Acesso Ao Portal</h1>

            
            <div className="card">
                <div>
                   
                </div>
            <h2 className="h2">Aluno</h2>
            <br/>
                <div className="card-body">
                    <p className="p">Login</p>

                    <input className="myInput" placeholder="Login"></input>
                    <br/>
                    <p className="p">Senha</p>

                    <input className="myInput"placeholder="Senha"></input>
                </div><br/>
                <button className="botao" onClick={handleClick}>Entrar</button>
                
                <button className='botao' onClick={Voltar}>Voltar</button>
            </div>
        </div>
    )
}
export default Login;