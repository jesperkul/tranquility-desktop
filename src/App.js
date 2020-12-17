import React, { useState } from "react";
import { GlobalStyles, lightTheme, darkTheme, classicTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import WindowManager from './components/WindowManager';

function App() {
  const [theme, setTheme] = useState("dark");
  const [background, setBackground] = useState("url('https://images.unsplash.com/photo-1497536003283-519132e25a7d')");
  const [scale, setScale] = useState(1);

  let themeMode = lightTheme;
  switch(theme){
    case 'dark':
      themeMode = darkTheme;
      break;
    case 'classic':
      themeMode = classicTheme;
      break;
    case 'platinum':
      break;
    default:
      break;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles background={background} scale={scale}/>
        <WindowManager theme={theme} setTheme={setTheme} background={background} setBackground={setBackground} scale={scale} setScale={setScale}/>
      </div>
    </ThemeProvider>
  );
}

export default App;

