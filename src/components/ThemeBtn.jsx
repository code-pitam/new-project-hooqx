import React from 'react'
import { FaMoon } from "react-icons/fa6";
import useTheme from '../contexts/theme';






function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme}= useTheme()

const onChangeBtn = () =>{

    if(themeMode == "light"){
        darkTheme()
    }else{
        lightTheme()
    }


}


  return (
    <>
      <div className="fixed  bottom-4  left-4 m-10 ml-5 flex w-fit justify-center bg-black dark:bg-white rounded-md items-center z-[1000000000]  text-slate-400 p-2">
        <FaMoon  onClick={onChangeBtn}/>
      </div>
    </>
  );
}

export default ThemeBtn