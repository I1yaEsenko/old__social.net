import React, {useState} from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";
import state from './state/state';

function App() {
   const [mode, setMode] = useState(false)
   const changeModeHandler = () => {
      setMode(!mode)
   }

   return (
      <main className={mode ? `${'dark'}` : ''}>
         <div className='container'>
            <Routes>
               <Route path='/' element={<Sidebar changeMode={changeModeHandler}/>}>
                  <Route index element={<Profile posts={state.profilePage.posts}/>}/>
                  <Route path='dialogs/*' element={<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
                  <Route path='music' element={<Music/>}/>
                  <Route path='video' element={<Video/>}/>
                  <Route path='analytics' element={<Analytics/>}/>
                  <Route path='settings' element={<Settings/>}/>
               </Route>
            </Routes>
         </div>
      </main>
   );
}

export default App;
