import {NavLink} from "react-router-dom";
import React from "react";
import '../Dialogs.scss'
import { DialogsType} from "../../../Redux/state";

export const DialogsItem = ({id, name}: DialogsType) => {
   const path = '/dialogs/' + id

   return (
      <div className="dialogs__item">
         <NavLink to={path}
                  className={({isActive}) => isActive ? 'dialogs__item-link active-link' : 'dialogs__item-link'}>{name}</NavLink>
      </div>
   )
}