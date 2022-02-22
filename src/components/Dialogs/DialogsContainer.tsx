import React from 'react';
import './Dialogs.scss'
import '../../App.scss'
import Dialogs from "./Dialogs";
import {
  addMessageDialogAC,
  DialogsType,
  MessagesType,
  updateMessageDialogAC
} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newDialogMessage: string
}
type MapDispatchToPropsType = {
  addMessage: () => void
  onChangeMessage: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newDialogMessage: state.dialogsPage.newDialogMessage,
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addMessage: () => {
      dispatch(addMessageDialogAC())
    },
    onChangeMessage: (text: string) => {
      dispatch(updateMessageDialogAC(text))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;