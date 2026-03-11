import { format, formatDistanceToNow } from "date-fns";
import styles from './Post.module.css'
import { ptBR } from "date-fns/locale";

export default function Post(){

    const publishedDate = new Date()
    const publishedDateFormatted = format(publishedDate, "d 'de' LLLL 'às' HH:mm",{locale: ptBR,})
    
    const publishedDateRelativeToNow = formatDistanceToNow(
        publishedDate, {
            locale: ptBR,
            addSuffix: true,
        }
    )


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
                
                <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
                    Publicado {publishedDateRelativeToNow}
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

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>
        </article>
    )
}