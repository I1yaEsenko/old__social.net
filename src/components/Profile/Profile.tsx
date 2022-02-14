import React from 'react';
import '../../App.scss'
import './Profile.scss'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GeneralType, PostsType} from "../../Redux/state";

export type ProfileType = {
  posts: Array<PostsType>
  message: string
  dispatch: (action: GeneralType) => void
}

const Profile = ({posts,  message, dispatch}: ProfileType) => {

  return (
    <section className="profile section">
      <div className="profile__wrapper">
        <div className="profile__title content-text">Homepage</div>
        <div className="profile__profile info">
          <ProfileInfo/>
        </div>
        <div className="profile__posts posts">
          <MyPost posts={posts}
                  message={message} dispatch={dispatch}/>
        </div>
      </div>
    </section>
  );
};

export default Profile;