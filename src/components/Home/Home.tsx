import React from 'react';
import '../../App.scss'
import './Home.scss'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


const Home = () => {

   return (
      <section className="home section">
         <div className="home__wrapper">
            <div className="home__title content-text">Homepage</div>
            <div className="home__profile profile">
               <ProfileInfo/>
            </div>
            <div className="home__posts posts">
               <MyPost/>
            </div>
         </div>
      </section>
   );
};

export default Home;