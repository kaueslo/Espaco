import logo from './logo.png'
import search from './search.png'

export default function Cabecalho(){
    return(
        <header>
            <img src={logo} alt="Logo do space"/>
            <div>
                <input 
                    type="text" 
                    placeholder="O que você procura?"
                />
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    )
}