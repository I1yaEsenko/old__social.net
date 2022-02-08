import React from "react";
import Image from "../../System/Image/Image";
import avatar from "../../../img/Avatar.jpg";

type PostType = {
   message: string
}
export const Post = ({message}: PostType) => {
   return (
      <div className='posts__item item-post'>
         <Image src={avatar} alt={avatar} className={'item-post__avatar'} width={50} height={50} circle={true}/>
         <div className="item-post__message content-text">{message}</div>
      </div>
   )
}

