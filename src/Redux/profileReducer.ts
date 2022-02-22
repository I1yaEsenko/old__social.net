export type PostsType = {
  id: number
  message: string
  likesCount: number
}
export type initialStateType = {
  posts: Array<PostsType>
  newPostText: string
}
type GeneralType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostMessageAC>


let initialState: initialStateType = {
  posts: [
    {id: 1, message: 'Hello!!!!', likesCount: 12},
    {id: 2, message: 'How are you???!!!!', likesCount: 5},
  ],
  newPostText: 'blablabla',
}

export const profileReducer = (state = initialState, action: GeneralType): initialStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      const newPost: PostsType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      return {...state, posts: [...state.posts, newPost], newPostText:''}
    }
    case 'UPDATE-NEW-POST-TEXT': {
      return {...state, newPostText: action.newText}
    }

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