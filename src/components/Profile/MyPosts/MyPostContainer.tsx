import React from "react";
import {addPostAC, PostsType, updatePostMessageAC} from "../../../Redux/profileReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
  posts:Array<PostsType>
  message:string

}

type MapDispatchPropsType = {
  addPost:()=>void
  updateNewPostText:(text:string)=>void
}

export type MyPostType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStatePropsType =>{
  return {
    posts: state.profilePage.posts,
    message: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType =>{
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    updateNewPostText: (text:string) => {
      dispatch(updatePostMessageAC(text))
    }
  }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)