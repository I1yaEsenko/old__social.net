import React, {ChangeEvent} from "react";
import {Post} from "./Post";
import {MyPostType} from "./MyPostContainer";


export const MyPost = ({posts, message, updateNewPostText, addPost}: MyPostType) => {

  /*=================Отрисовка всех постов=================*/
  let postsElement = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

  /*=================Добавление постов=================*/
  const onAddPost = () => {
    addPost()
  }
  /*=================Изменение данных в текстэрии=================*/
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostText(e.currentTarget.value)
  }


  return (
    <>
      <h3 className="posts__title content-text">My posts</h3>
      <div className="posts__body">
        <textarea className="posts__textarea" onChange={onPostChange} value={message}/>
        <button className="posts__add" onClick={onAddPost}>Add</button>
      </div>
      <div className="posts__items">
        {postsElement}
      </div>
    </>
  )
}

