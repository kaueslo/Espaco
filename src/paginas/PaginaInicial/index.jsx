import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";

//Essa Tag aberta e fechando sem nada, é um Fragment, um elemento pai
export default function PaginaInicial(){
    return(
        <>
            <Cabecalho />
            <Menu />
        </>
    )
}