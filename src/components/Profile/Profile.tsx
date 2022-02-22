import React from 'react';
import '../../App.scss'
import './Profile.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

const Profile = () => {

  return (
    <section className="profile section">
      <div className="profile__wrapper">
        <div className="profile__title content-text">Homepage</div>
        <div className="profile__profile info">
          <ProfileInfo/>
        </div>
        <div className="profile__posts posts">
          <MyPostContainer/>
        </div>
      </div>
    </section>
  );
};

export default Profile;