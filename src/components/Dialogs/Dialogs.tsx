import React from 'react';
import './Dialogs.scss'
import '../../App.scss'
import {DialogsItem} from "./DialogsItem";
import {Messages} from "./Messages";

const Dialogs = () => {
   return (
      <section className="dialogs section">
         <div className="dialogs__title section__text">Dialogs</div>
         <div className="dialogs__wrapper">
            <div className="dialogs__items">
               <DialogsItem id={1} name={'Ilya'}/>
               <DialogsItem id={2} name={'Valera'}/>
               <DialogsItem id={3} name={'Svetlana'}/>
               <DialogsItem id={4} name={'Alex'}/>
               <DialogsItem id={5} name={'Valera'}/>
            </div>
            <div className="dialogs__messages">
               <Messages message={'Hello'}/>
               <Messages message={'How are you?'}/>
               <Messages message={'Where you gonna?'}/>
               <Messages message={'Can you push my bag?'}/>
            </div>
         </div>
      </section>
   );
};

export default Dialogs;