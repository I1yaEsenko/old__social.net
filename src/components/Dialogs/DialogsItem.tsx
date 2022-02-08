import {NavLink} from "react-router-dom";
import React from "react";
import './Dialogs.scss'

type DialogsItemType = {
   id: number
   name: string
}

export const DialogsItem = ({id, name}: DialogsItemType) => {
   const path = '/dialogs/' + id

   return (
      <div className="dialogs__item">
         <NavLink to={path} className={({isActive}) => isActive ? 'dialogs__item-link active-link' : 'dialogs__item-link'}>{name}</NavLink>
      </div>
   )
}