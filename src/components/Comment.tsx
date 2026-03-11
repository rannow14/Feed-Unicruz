import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'
import { Trash } from '@phosphor-icons/react'
import Avatar from './Avatar'

interface CommentProps {
    content: string
}

export default function Comment({content}: CommentProps){
    return(
        <div className={styles.comment}>
            < Avatar src="https://github.com/iuri2505.png" hasBorder = {false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor</strong>
                            <time title="1 hora atrás" dateTime="2026-03-01 20:00:00">
                                Publicado há 1h
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}