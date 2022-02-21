import React, {ChangeEvent} from 'react';
import './Dialogs.scss'
import '../../App.scss'
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/store";
import {addMessageDialogAC, updateMessageDialogAC} from "../../Redux/dialogsReducer";

type DialogsContainerType = {
  store: StoreType
}

const DialogsContainer = ({store}:DialogsContainerType) => {
  const state = store.getState()

  /*=================Добавление сообещния=================*/
  let addMessage = () => {
    store.dispatch(addMessageDialogAC())
  }
  /*=================Изменение данных в текстэрии=================*/
  const messageDialogChangeHandler = (text: string) => {
    store.dispatch(updateMessageDialogAC(text))
  }

  return (
    <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
             newDialogMessage={state.dialogsPage.newDialogMessage} addMessage={addMessage}
             onChangeMessage={messageDialogChangeHandler}/>
  );
};

export default DialogsContainer;