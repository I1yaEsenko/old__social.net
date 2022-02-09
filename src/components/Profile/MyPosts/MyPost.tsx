import React from "react";
import {Post} from "./Post";
import {ProfilePageType} from "../../../state/state";

export const MyPost = ({posts}: ProfilePageType) => {
   /*=================Отрисовка всеъ постов=================*/
   let postsElement = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

   return (
      <>
         <h3 className="posts__title content-text">My Posts</h3>
         <div className="posts__body">
            <textarea name="postarea" id="post" className="posts__textarea"></textarea>
            <button className="posts__add">Add</button>
         </div>
         <div className="posts__items">
            {postsElement}
         </div>
      </>
   )
}

