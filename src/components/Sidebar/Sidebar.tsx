import React, {useState} from 'react';
import './Sidebar.scss'
import 'boxicons'
import {NavLink, Outlet} from "react-router-dom";

export type modeType = {
   changeMode: ()=>void
}

const Sidebar = ({changeMode}:modeType) => {
   //open|close Sidebar
   const [close, setClose] = useState<boolean>(false)

   const addCloseClass = () => {
      setClose(!close)
   }
   const openSidebarHandler = () =>{
      setClose(!close)
   }

   return (
   <>
      <nav className={close ? `${'sidebar'} ${'close'}` : 'sidebar'}>
         <div className="sidebar__header header">
            <div className="header__wrapper">
               <div className="header__logo">
                  <span className="header__logo-text">CWL</span>
               </div>
               <div className="header__description description">
                  <div className="description__title text">CodingWithLove</div>
                  <div className="description__profession text">Web developer</div>
               </div>
            </div>
            <i className='bx bx-chevron-left toggle' onClick={addCloseClass}></i>
         </div>

         <div className="sidebar__navbar navbar">
            <div className="navbar__wrapper">
               <li className="navbar__search">
                  <i className='bx bx-search icon' onClick={openSidebarHandler}></i>
                  <input type='text' placeholder='Search...'/>
               </li>

               <ul className="navbar__menu menu">
                  <li className="menu__item">
                     <NavLink to='/' className="menu__link">
                        <i className='bx bx-home-alt icon'></i>
                        <span className='menu__text text'>Homepage</span>
                     </NavLink>
                  </li>
                  <li className="menu__item">
                     <NavLink to='/dialogs/' className="menu__link">
                        <i className='bx bx-message-alt icon'></i>
                        <span className='menu__text text'>Messages</span>
                     </NavLink>
                  </li>
                  <li className="menu__item">
                     <NavLink to='/music' className="menu__link">
                        <i className='bx bx-music icon'></i>
                        <span className='menu__text text'>Music</span>
                     </NavLink>
                  </li>
                  <li className="menu__item">
                     <NavLink to='/video' className="menu__link">
                        <i className='bx bx-video icon'></i>
                        <span className='menu__text text'>Video</span>
                     </NavLink>
                  </li>
                  <li className="menu__item">
                     <NavLink to='/analytics' className="menu__link">
                        <i className='bx bx-analyse icon'></i>
                        <span className='menu__text text'>Analytics</span>
                     </NavLink>
                  </li>
                  <li className="menu__item">
                     <NavLink to='/settings' className="menu__link">
                        <i className='bx bx-server icon'></i>
                        <span className='menu__text text'>Settings</span>
                     </NavLink>
                  </li>
               </ul>
            </div>

            <div className="sidebar__bottom bottom">

               <li className="menu__item">
                  <a className="menu__link" href="#">
                     <i className='bx bx-log-out icon'></i>
                     <span className="menu__text text">Logout</span>
                  </a>
               </li>
               <li className="bottom__mode mode">
                  <div className="mode__light-dark">
                     <i className='bx bx-moon icon moon'></i>
                     <i className='bx bx-sun icon sun'></i>
                  </div>
                  <span className="mode__text-mode text"></span>
                  <div className="mode__toggle-switch">
                     <span className="mode__switch" onClick={changeMode}></span>
                  </div>
               </li>
            </div>
         </div>

      </nav>

      <Outlet/>


   </>


   );
};

export default Sidebar;

