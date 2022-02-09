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
}
export type ProfilePageType = {
   posts: Array<PostsType>
}
export type StateType = {
   dialogsPage: DialogsPageType
   profilePage: ProfilePageType
}

let state: StateType = {
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
   },

   profilePage: {
      posts: [
         {id: 1, message: 'Hello!!!!', likesCount: 12},
         {id: 2, message: 'How are you???!!!!', likesCount: 5},
      ],
   },

}

export default state