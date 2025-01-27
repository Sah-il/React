// remember to change config tailwind
import { useEffect,useState } from 'react';
import './App.css'
import { ThemeProvider } from './context/theme';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const [themeMode,setthemeMode] = useState("light")
  const lightTheme = () =>{
    setthemeMode("light")
  }
  const darkTheme = () =>{
    setthemeMode("dark")
  }

  // actual change theme 

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return(
    <>
     <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button></Button>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>
      </div>
     </ThemeProvider>
    </>
  );
}

export default App
