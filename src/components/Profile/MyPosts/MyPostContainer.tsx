import React from "react";

import {addPostAC, updatePostMessageAC} from "../../../Redux/profileReducer";
import {StoreType} from "../../../Redux/store";
import {MyPost} from "./MyPost";

type MyPostContainer = {
  store: StoreType
}

export const MyPostContainer = ({store}: MyPostContainer) => {
  let state = store.getState()
  /*=================Добавление постов=================*/
  const addPost = () => {
    store.dispatch(addPostAC())
  }
  /*=================Изменение данных в текстэрии=================*/
  const onPostChange = (text: string) => {
    store.dispatch(updatePostMessageAC(text))
  }


  return (
    <MyPost addPost={addPost} updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            message={state.profilePage.newPostText}
    />
  )
}

