import React from 'react';
import './Dialogs.scss'
import '../../App.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {DialogsPageType} from "../../state/state";


const Dialogs = ({dialogs,messages}:DialogsPageType) => {

   /*=================Отрисовка элементов диалога и сообщений=================*/
   let dialogElement =  dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)
   let messageElement = messages.map(m => <Messages id={m.id} message={m.message}/>)

   return (
      <section className="dialogs section">
         <div className="dialogs__title section__text">Dialogs</div>
         <div className="dialogs__wrapper">
            <div className="dialogs__items">
               {dialogElement}
            </div>
            <div className="dialogs__messages">
               {messageElement}
            </div>
         </div>
      </section>
   );
};

export default Dialogs;