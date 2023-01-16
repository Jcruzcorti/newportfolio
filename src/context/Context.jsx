import React,{createContext, useState} from 'react'


export const Context = createContext()

function ContextProvider({children}) {


    const [themeColor,setThemeColor] = useState(true)

    const handleChangeThemeColor = () =>{
      themeColor ? setThemeColor(false) : setThemeColor(true)
    }


  return (
    <>
        <Context.Provider value={{themeColor,handleChangeThemeColor}}>
            {children}
        </Context.Provider>
    </>
  )
}

export default ContextProvider;