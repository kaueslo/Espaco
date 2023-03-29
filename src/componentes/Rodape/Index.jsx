import React from "react";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Rodape.module.scss";

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook} alt="ícone do facebook" />
                </a>

                <a 
                    href="https://twitter.com/" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt="ícone do twitter" />
                </a>

                <a 
                    href="https://www.instagram.com/kaueslo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="ícone do Instagram" />
                </a>
            </div>
            <p>Desenvolvido por Kaueslo</p>
        </footer>
    )
}