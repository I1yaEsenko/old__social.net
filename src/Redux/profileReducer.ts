import {GeneralType, MessagesType, PostsType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: GeneralType) => {


  switch (action.type) {
    case 'ADD-POST':
      const newPost: PostsType = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText
  }

  return state
}

/*=================Action Creators=================*/
export const addPostAC = (message: string) => {
  return {
    type: 'ADD-POST',
    newPostText: message
  } as const
}
export const updatePostMessageAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
  } as const
}