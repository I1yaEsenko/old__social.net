import React from "react";
import {Post} from "./Post";

export const MyPost = () => {
   return (
      <>
         <h3 className="posts__title content-text">My Posts</h3>
         <div className="posts__body">
            <textarea name="postarea" id="post" className="posts__textarea">Enter text</textarea>
            <button className="posts__add">Add</button>
         </div>
         <div className="posts__items">
            <Post message={'Hello!!!!'}/>
            <Post message={'How are you???!!!!'}/>
         </div>
      </>
   )
}

