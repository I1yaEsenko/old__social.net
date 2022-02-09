import React from "react";
import Image from "../../System/Image/Image";
import avatar from "../../../img/Avatar.jpg";
import {PostsType} from "../../../state/state";


export const Post = ({message, likesCount}: PostsType) => {
   return (
      <div className='posts__item item-post'>
         <Image src={avatar} alt={avatar} className={'item-post__avatar'} width={50} height={50} circle={true}/>
         <div className="item-post__message content-text">{message} <span className={'bx bx-heart'}>{likesCount}</span></div>
      </div>
   )
}

