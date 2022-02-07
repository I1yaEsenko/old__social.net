import React, {useState} from 'react';
import './Sidebar.scss'
import 'boxicons'

export type modeType = {
   changeMode: ()=>void
}

const Sidebar = ({changeMode}:modeType) => {
   //open|close sidebar
   const [close, setClose] = useState<boolean>(false)

   const addCloseClass = () => {
      setClose(!close)
   }
   const openSidebarHandler = () =>{
      setClose(!close)
   }

   return (

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
                        <a href="#" className="menu__link">
                           <i className='bx bx-home-alt icon'></i>
                           <span className='menu__text text'>Homepage</span>
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link">
                           <i className='bx bx-message-alt icon'></i>
                           <span className='menu__text text'>Messages</span>
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link">
                           <i className='bx bx-chat icon'></i>
                           <span className='menu__text text'>Dialogs</span>
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link">
                           <i className='bx bx-pie-chart-alt icon'></i>
                           <span className='menu__text text'>Analytics</span>
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link">
                           <i className='bx bx-heart icon'></i>
                           <span className='menu__text text'>Like</span>
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="#" className="menu__link">
                           <i className='bx bx-wallet icon'></i>
                           <span className='menu__text text'>Wallets</span>
                        </a>
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


   );
};

export default Sidebar;

