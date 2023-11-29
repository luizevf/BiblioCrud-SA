

const CadastroDoAluno = () => {
    const handleClick =()=>{
        return(
            console.log("cadastrado")
        )
    }
    return (
        <div className="home h1">

            <h2 className="h2">Cadastro De Alunos</h2>
            <div className="card">

                <div className="card-body">
                    <p className="p">Nome</p>

                    <input className="myInput" placeholder="Nome"></input>
                    <br />
                    <p className="p">Data de Nascimento</p>

                    <input className="myInput" placeholder="Data de Nascimento"></input>

                    <p className="p">Matricula</p>

                    <input className="myInput" placeholder="Matricula"></input>

                    
                </div><br />
                <button className="botao" onClick={handleClick}>Cadastrar</button>
            </div>

        </div>
    )
}
export default CadastroDoAluno;