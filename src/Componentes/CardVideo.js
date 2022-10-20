import { Imagem } from "./styled";
import { BoxPaginaPrincipal, Titulo } from "./styled";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPaginaPrincipal onClick={reproduzVideo}>
      <Imagem src={props.image1} alt={props.textoAlternativo} />
      <Titulo>{props.titulo}</Titulo>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
