import React,{ useContext,createContext } from "react";

export const themeContext = React.createContext({
  themeMode:"light",
  darkTheme: ()=>{},
  lightTheme: ()=>{}})  // we can also give default value



export const ThemeProvider = themeContext.Provider

export default function useTheme() {
  return useContext(themeContext)
}
