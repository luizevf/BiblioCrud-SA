

const CadastroDeLivros = () => {
    const handleClick =()=>{
        return(
            console.log("cadastrado")
        )
    }
    return (
        <div className="home h1">

            <h2 className="h2">Cadastro De Livros</h2>
            <div className="card">

                <div className="card-body">
                    <p className="p">Nome</p>

                    <input className="myInput" placeholder="Nome"></input>
                    <br />
                    <p className="p">Autor</p>

                    <input className="myInput" placeholder="Autor"></input>

                    <p className="p">ISBN</p>

                    <input className="myInput" placeholder="ISBN"></input>

                    <p className="p">Editora</p>

                    <input className="myInput" placeholder="Editora"></input>

                    <p className="p">Data Do Registro</p>

                    <input className="myInput" placeholder="Data do Registro "></input>

                    
                </div><br />
                <button className="botao" onClick={handleClick}>Cadastrar</button>
            </div>

        </div>
    )
}
export default CadastroDeLivros;