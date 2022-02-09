import React from "react";
import '../../../App.scss'

export type MessagesType = {
   id:number
   message: string
}
export const Messages = ({id,message}: MessagesType) => {
   return (
      <div className="dialogs__message content-text">{message}</div>
   )
}