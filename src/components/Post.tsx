import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Author {
   name: string;
   role: string;
   avatarUrl: string;
}

interface Content {
   type: string
   content: string
}

interface PostProps {
   author: Author;
   publishedAt: Date;
   content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {

   const [comment, setComment] = useState([
      'Post muito bacana.'
   ])

   const [newCommentText, setNewCommentText] = useState('')

   const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
      locale: ptBR,
   })

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
   })

   function handleCreateNewComment(event: FormEvent) {
      event.preventDefault()
      setComment([...comment, newCommentText])
      setNewCommentText('')
   }

   function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      setNewCommentText(event.target.value)
   }

   function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
      console.log(event)
   }

   function deleteComment(commentToDelete: string) {
      const commentWithourDeleted = comment.filter(comment => {
         return comment != commentToDelete
      })

      setComment(commentWithourDeleted)
   }

   const isNewCommentEmpty = newCommentText.length === 0

   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar
                  src={author.avatarUrl}
               />
               <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
               </div>
            </div>

            <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
               {
                  publishedDateRelativeToNow
               }
            </time>
         </header>

         <div className={styles.content}>
            {
               content.map(contents => {
                  return (
                     contents.type === 'link' ?
                        <p key={contents.content}><a>{contents.content}</a></p>
                        :
                        <p key={contents.content}>{contents.content}</p>
                  )
               })
            }
         </div>

         <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
               name='comment'
               value={newCommentText}
               placeholder='Escreva um comentário...'
               onChange={handleNewCommentChange}
               onInvalid={handleNewCommentInvalid}
               required
            />
            <footer>
               <button
                  type='submit'
                  disabled={isNewCommentEmpty}
               >
                  Publicar
               </button>
            </footer>
         </form>

         <div className={styles.commentList}>
            {
               comment.map(comment => {
                  return (
                     <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                     />
                  )
               })
            }
         </div>

      </article>
   )
}