import React from 'react';
import '../../App.scss'
import './Profile.scss'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../state/state";

const Profile = ({posts}: ProfilePageType) => {

   return (
      <section className="profile section">
         <div className="profile__wrapper">
            <div className="profile__title content-text">Homepage</div>
            <div className="profile__profile info">
               <ProfileInfo/>
            </div>
            <div className="profile__posts posts">
               <MyPost posts={posts}/>
            </div>
         </div>
      </section>
   );
};

export default Profile;