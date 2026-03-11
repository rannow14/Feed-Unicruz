import Comment from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from './Post.module.css'
import Avatar from "./Avatar";

interface PostProps {
    author: {
        avatarUrl: string
        name: string
        role: string
    }
    content: {
        type: 'paragraph' | 'link'
        content: string
    }[]
    publishedAt: Date
}

export default function Post({ author, content, publishedAt }: PostProps){

    const publishedDate = publishedAt
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
                    <Avatar src={author.avatarUrl} hasBorder/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
                    Publicado {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}