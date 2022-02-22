import {addPostAC, profileReducer, updatePostMessageAC} from "./profileReducer";
import {addMessageDialogAC, dialogsReducer, updateMessageDialogAC} from "./dialogsReducer";

type DialogsType = {
  id: number
  name: string
}
type MessagesType = {
  id: number
  message: string
}
type PostsType = {
  id: number
  message: string
  likesCount: number
}
type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newDialogMessage: string

}
type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
}
type StateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
}


/*=================Store Type=================*/
type StoreType = {
  _state: StateType
  addPost: () => void
  rerenderEntireTree: () => void
  updateNewPostText: (newText: string) => void
  addMessageDialog: () => void
  updateNewMessageText: (newText: string) => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action:any) => void
}

/*=================Store=================*/
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
  dispatch(action) {
    /*=================Reducers=================*/
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this.rerenderEntireTree()
  },
}


