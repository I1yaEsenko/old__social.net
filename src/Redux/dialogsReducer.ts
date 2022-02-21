import {DialogsPageType, GeneralType, MessagesType} from "./store";


let initialState: DialogsPageType = {
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
  }

export const dialogsReducer = (state = initialState, action: GeneralType) => {

  switch (action.type) {
    case 'ADD-MESSAGE-DIALOG':
      let newMessage: MessagesType = {
        id: 1,
        message: state.newDialogMessage
      }
      state.messages.push(newMessage)
      state.newDialogMessage = '';
      return state
    case 'UPDATE-NEW-DIALOG-TEXT':
      state.newDialogMessage = action.newMessageText
      return state
  }

  return state
}

export const addMessageDialogAC = () => {
  return {
    type: 'ADD-MESSAGE-DIALOG',
  } as const
}
export const updateMessageDialogAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-DIALOG-TEXT',
    newMessageText: newText
  } as const
}
