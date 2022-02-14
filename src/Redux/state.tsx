import exp from "constants";

export type DialogsType = {
  id: number
  name: string
}
export type MessagesType = {
  id: number
  message: string
}
export type PostsType = {
  id: number
  message: string
  likesCount: number
}
export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newDialogMessage: string

}
export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
}
export type StateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
}
/*=================ACTIONS TYPE=================*/
export type AddPostType = ReturnType<typeof addPostAC>
export type UpdatePostType = ReturnType<typeof updatePostMessageAC>
export type AddMessageType = ReturnType<typeof addMessageDialogAC>
export type  UpdateNewMessageText = ReturnType<typeof updateMessageDialogAC>

export type GeneralType = AddPostType | UpdatePostType | AddMessageType | UpdateNewMessageText


export type StoreType = {
  _state: StateType
  addPost: () => void
  rerenderEntireTree: () => void
  updateNewPostText: (newText: string) => void
  addMessageDialog: () => void
  updateNewMessageText: (newText: string) => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action: GeneralType) => void
}

let store: StoreType = {
  _state: {
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Valera'},
      ],
      messages: [
        {id: 6, message: 'Hello'},
        {id: 7, message: 'How are you?'},
        {id: 8, message: 'Where you gonna?'},
        {id: 9, message: 'Can you push my bag?'},
        {id: 10, message: 'Yes, I can!'},
      ],
      newDialogMessage: '',
    },

    profilePage: {
      posts: [
        {id: 1, message: 'Hello!!!!', likesCount: 12},
        {id: 2, message: 'How are you???!!!!', likesCount: 5},
      ],
      newPostText: 'blablabla',
    },

  },
  rerenderEntireTree() {
    console.log('Hellow')
  },
  subscribe(observer: () => void) {
    this.rerenderEntireTree = observer
  },
  getState() {
    return this._state
  },

  addPost() {
    let newPost: PostsType = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this.rerenderEntireTree()
  },

  updateNewPostText(text: string) {
    this._state.profilePage.newPostText = text
    this.rerenderEntireTree()
  },

  addMessageDialog() {
    let newMessage: MessagesType = {
      id: 1,
      message: this._state.dialogsPage.newDialogMessage
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newDialogMessage = ''
    this.rerenderEntireTree()
  },
  updateNewMessageText(newText: string) {
    this._state.dialogsPage.newDialogMessage = newText
    this.rerenderEntireTree()
  },
  dispatch(action) { // type : 'ADD-POST'
    if (action.type === 'ADD-POST') {

      const newPost: PostsType = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this.rerenderEntireTree()

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this.rerenderEntireTree()

    } else if (action.type === 'ADD-MESSAGE-DIALOG') {
      let newMessage: MessagesType = {
        id: 1,
        message: action.newMessage
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newDialogMessage = ''
      this.rerenderEntireTree()

    } else if (action.type === 'UPDATE-NEW-DIALOG-TEXT') {
      this._state.dialogsPage.newDialogMessage = action.newMessageText
      this.rerenderEntireTree()
    }

  },
}


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
export const addMessageDialogAC = (message: string) => {
  return {
    type: 'ADD-MESSAGE-DIALOG',
    newMessage: message
  } as const
}
export const updateMessageDialogAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-DIALOG-TEXT',
    newMessageText: newText
  } as const
}
export default store
