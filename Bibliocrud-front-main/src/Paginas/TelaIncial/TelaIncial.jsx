import './TelaInicial.css';

import Card from "../../Componentes/Card/Card";


const TelaIncial = () => {

    const imagem1 = () => {

        var novaURL = "/LoginFuncionario"; 

            window.location.href = novaURL;
    };
    const imagem2 = () => {

        var novaURL = "/Livros"; 

            window.location.href = novaURL;
    };
    const imagem3 = () => {

        console.log("Imagem clicada")
    };
    return (



        <div className="cardContainer">

            <Card
                onclick={imagem1}
                imageUrl="https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-male-avatar-vector-icon-png-image_691595.jpg"
            />
            <Card
                onclick={imagem2}
                imageUrl="https://img2.gratispng.com/20180407/zfq/kisspng-emoji-book-review-sticker-salt-sugar-fat-how-the-books-5ac8c9e40c5689.8916766815231083240505.jpg"
            />
            <Card
                onclick={imagem3}
                imageUrl="https://img.freepik.com/icones-gratis/grupo-meninos-de-perto-esboco_318-39627.jpg"
            />
        </div>

    )
}
export default TelaIncial;