export type DialogsType = {
  id: number
  name: string
}
export type MessagesType = {
  id: number
  message: string
}
export type InitialStateType = typeof initialState
type GeneralType = ReturnType<typeof addMessageDialogAC> | ReturnType<typeof updateMessageDialogAC>

let initialState = {
  dialogs: [
    {id: 1, name: 'Ilya'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Svetlana'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Valera'},
  ] as Array<DialogsType>,
  messages: [
    {id: 6, message: 'Hello'},
    {id: 7, message: 'How are you?'},
    {id: 8, message: 'Where you gonna?'},
    {id: 9, message: 'Can you push my bag?'},
    {id: 10, message: 'Yes, I can!'},
  ] as Array<MessagesType>,
  newDialogMessage: '',
}

export const dialogsReducer = (state = initialState, action: GeneralType): InitialStateType => {

  switch (action.type) {
    case 'ADD-MESSAGE-DIALOG': {

      let newMessage: MessagesType = {
        id: 1,
        message: state.newDialogMessage
      }
      return {
        ...state,
        newDialogMessage: '',
        messages: [...state.messages, newMessage]
      }

    }

    case 'UPDATE-NEW-DIALOG-TEXT': {
      return {...state, newDialogMessage: action.newMessageText}
    }
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
