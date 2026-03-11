import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'
import { Trash } from '@phosphor-icons/react'

export default function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/130321292?v=4" alt="Avatar" />

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

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam, deserunt quidem suscipit</p>
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