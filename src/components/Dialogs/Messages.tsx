import React from "react";
import '../../App.scss'

type MessagesType = {
   message: string
}
export const Messages = ({message}: MessagesType) => {
   return (
      <div className="dialogs__message content-text">{message}</div>
   )
}