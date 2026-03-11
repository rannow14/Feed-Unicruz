import Comment from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

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

    const [comments, setComments] = useState(['Muito bom esse post'])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDate = publishedAt
    const publishedDateFormatted = format(publishedDate, "d 'de' LLLL 'às' HH:mm",{locale: ptBR,})
    
    const publishedDateRelativeToNow = formatDistanceToNow(
        publishedDate, {
            locale: ptBR,
            addSuffix: true,
        }
    )

    function handleCreateNewComment(event: any){
        event.preventDefault()

        //...comments = espalha comenarios que já existem
        //setComments([...comments, comments.length + 1])
        //console.log(comments)
        // IMATUBILIDADE = nunca alterar o valor diretamente

        //Programação imperativa
        //console.log(event.target.comment.value)
        //const newCommentText = event.target.comment.value

        //setComments([...comments, newCommentText])
        //event.target.comment.value = ''

        //Programação declarativa
        setComments(prevComments => [...prevComments, newCommentText])
        setNewCommentText('')

    }

    function handleNewCommentChange(event: any){
        setNewCommentText(event.target.value)
        console.log(newCommentText)
    }

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

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea
                name="comment"
                placeholder="Deixe um comentário"
                onChange={handleNewCommentChange}
                value={newCommentText}
                required
                />
                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(
                        <Comment key={comment} content={comment} />
                    )
                })}
            </div>
        </article>
    )
}