import React, {ChangeEvent} from "react";
import {Post} from "./Post";
import {ProfileType} from "../Profile";
import {addPostAC, updatePostMessageAC} from "../../../Redux/state";

export const MyPost = ({posts, message, dispatch}: ProfileType) => {


  /*=================Отрисовка всех постов=================*/
  let postsElement = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

  /*=================Добавление постов=================*/
  const addPost = () => {
    dispatch(addPostAC(message))
  }
  /*=================Изменение данных в текстэрии=================*/
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updatePostMessageAC(e.currentTarget.value))
  }


  return (
    <>
      <h3 className="posts__title content-text">My posts</h3>
      <div className="posts__body">
        <textarea className="posts__textarea" onChange={onPostChange} value={message}/>
        <button className="posts__add" onClick={addPost}>Add</button>
      </div>
      <div className="posts__items">
        {postsElement}
      </div>
    </>
  )
}

