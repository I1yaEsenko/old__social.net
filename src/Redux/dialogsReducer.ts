import {DialogsPageType, GeneralType, MessagesType} from "./state";

export const dialogsReducer = (state:DialogsPageType, action: GeneralType) => {

  switch (action.type) {
    case 'ADD-MESSAGE-DIALOG':
      let newMessage: MessagesType = {
        id: 1,
        message: action.newMessage
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
