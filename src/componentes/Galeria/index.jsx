import React from 'react'
import Tags from '../Tags/Index'
import styles from './Galeria.module.scss'
import Cards from './Cards'
import fotos from './fotos.json'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards fotos={fotos} styles={styles}/>
    </section>
  )
}
