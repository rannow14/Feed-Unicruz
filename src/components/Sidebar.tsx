import { PencilLineIcon } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export default function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://avatars.githubusercontent.com/u/130321292?v=4" 
                alt=""
            />
            
            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/130321292?v=4" alt="" />
                <strong>Victor</strong>
                <span>Aspirante de Gamedev</span>
            </div>
            <footer>  
                <a href="#">
                    <PencilLineIcon size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}