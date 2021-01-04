import React, { useState, useEffect } from "react";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
  classicTheme,
} from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import WindowManager from "./components/WindowManager";
import { SettingsProvider, useSettings } from "./components/SettingsContext";

function App() {
  const [background, setBackground] = useState(
    "url(https://images.unsplash.com/photo-1497536003283-519132e25a7d)"
  );

  const settings = useSettings().customizeSettings;

  let themeMode = lightTheme;
  switch (settings.theme) {
    case "dark":
      themeMode = darkTheme;
      break;
    case "classic":
      themeMode = classicTheme;
      break;
    default:
      break;
  }

  return (
    <SettingsProvider>
      <ThemeProvider theme={themeMode}>
        <div>
          <GlobalStyles
            background={background}
            scale={settings.scale}
            customizeSettings={settings}
          />
          <WindowManager
            background={background}
            setBackground={setBackground}
            customizeSettings={settings}
          />
        </div>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;

/*

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem('customizeSettings'));
    if(storedSettings != null){
      useSettings.setCustomizeSettings(storedSettings);
    }
  }, []);


*/
