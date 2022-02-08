import Image from "../../System/Image/Image";
import bg from "../../../img/bg_profile.jpg";
import avatar from "../../../img/Avatar.jpg";
import React from "react";

export const ProfileInfo = () => {
   return (
      <>
         <Image src={bg} alt={'bg_img'} className={'profile__img'} width={1000} height={200}/>
         <div className="profile__info">
            <div className="profile__img">
               <Image src={avatar} alt={avatar} className={'profile__avatar-img'} width={150} height={150}
                      circle={true}/>
            </div>
            <div className="profile__name content-text">Ilya Esenko</div>
         </div>
      </>
   )
}