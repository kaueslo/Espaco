import banner from './banner.png'
import styles from './PaginaInicial.module.scss'
//Conseguimos excluir o ../../ por conta do jsconfig.json
import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Rodape from 'componentes/Rodape/Index';
import Galeria from 'componentes/Galeria';
import Populares from 'componentes/Populares';

//Essa Tag aberta e fechando sem nada, é um Fragment, um elemento pai
export default function PaginaInicial(){
    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}