import React from 'react';
import '../../App.scss'
import './Users.scss'
import {UsersPropsType} from "./UsersContainer";
import Image from "../System/Image/Image";
import axios from "axios";
import userPhoto from '../../img/user.jpg'

const Users = ({users, follow, unfollow, setUsers}: UsersPropsType) => {

  if (users.length === 0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>
    setUsers(response.data.items))
  }

  return (
    <section className="users section">
      <div className="users__text section__text">Users</div>
      {users.map(u =>
        <div className='users__wrapper'>
          <div className="users__item" key={u.id}>
            <div className="users__avatar">
              <Image src={ u.photos != null ? userPhoto : u.photos  } alt={'avatar'} className='users__img' width={100} height={100} circle={true}/>
              {u.followed ?
                <button onClick={() => {unfollow(u.id)}}>Unfollow</button>:
                <button onClick={() => {follow(u.id)}}>Follow</button>
              }
            </div>
            <div className="users__body">
              <div className="users__info">
                <div className="users__name">{u.name}</div>
                <div className="users__status">{u.status}</div>
              </div>
              <div className="users__location">
                <div className="users__country">"country"</div>
                <div className="users__city">"city"</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Users;