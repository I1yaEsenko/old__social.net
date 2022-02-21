import {GeneralType, MessagesType, PostsType, ProfilePageType} from "./store";


let initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hello!!!!', likesCount: 12},
    {id: 2, message: 'How are you???!!!!', likesCount: 5},
  ],
  newPostText: 'blablabla',
}

export const profileReducer = (state = initialState, action: GeneralType) => {


  switch (action.type) {
    case 'ADD-POST':
      const newPost: PostsType = {
        id: 5,
        message: state.newPostText,
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
export const addPostAC = () => {
  return {
    type: 'ADD-POST',
  } as const
}
export const updatePostMessageAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
  } as const
}