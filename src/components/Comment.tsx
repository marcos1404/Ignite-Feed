import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentPost {
   content: string;
   onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentPost) {
   const [likeCount, setLikeCount] = useState(0)

   function handleDeleteComment() {
      onDeleteComment(content)
   }
   function handleLikeComment() {
      setLikeCount(likeCount + 1)
   }

   return (
      <div className={styles.comment}>
         <img className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/50412001?v=4'
         />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>

                  <div className={styles.authorAndTime}>
                     <strong>Marcos Vinicius</strong>
                     <time title="23/12/2023" dateTime="">Cerca de 1h atrás</time>
                  </div>

                  <button onClick={() => handleDeleteComment()} title="Deletar comentário">
                     <Trash size={24} />
                  </button>
               </header>

               <p>{content}</p>
            </div>

            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir
                  <span>{likeCount}</span>
               </button>
            </footer>

         </div>
      </div>
   )
}