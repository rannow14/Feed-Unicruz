import styles from './Header.module.css'
import logoUnicruz from '../assets/Unicruz1.svg'

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={logoUnicruz} alt="Logo Unicruz" />
            <strong>
                Ciência da Computação - UNICRUZ
            </strong>
        </div>
    )
}