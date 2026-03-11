import styles from './Post.module.css'

export default function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/130321292?v=4" 
                    alt="Avatar" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Victor</strong>
                        <span>Aspirante de Gamedev</span>
                    </div>
                </div>
                
                <time title="10 de Março de 2026" dateTime="2026-03-10 00:00:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#"> 👉link.com/totalmentereal</a></p>
                <p>
                    <a href="#">#hashtag</a>{' '}
                    <a href="#">#hashtag2</a>{' '}
                    <a href="#">#jogodavelha</a>{' '}
                </p>
            </div>
        </article>
    )
}