import React from 'react';
import '../../App.scss'
import './Users.scss'
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../Redux/usersReducer";


type MapStateToPropsType = {
   users: Array<UserType>
}
type MapDispatchToPropsType = {
   follow: (userId:number) => void
   unfollow: (userId:number) => void
   setUsers: (users:Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
   return {
      users: state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
   return {
      follow: (userId:number) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId:number) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users:Array<UserType>) => {
         dispatch(setUsersAC(users))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
