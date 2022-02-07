import React, {useState} from 'react';
import './App.scss';
import Sidebar from "./components/sidebar/Sidebar";
import MainPage from "./components/MainPage/MainPage";

function App() {

   const [mode, setMode] = useState(false)
   const changeModeHandler = () => {
      setMode(!mode)
   }
   return (
      <main className={mode ? `${'dark'}` : ''}>
         <Sidebar changeMode={changeModeHandler}/>
         <MainPage/>
      </main>
   );
}

export default App;
