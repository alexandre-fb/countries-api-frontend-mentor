import { ThemeContextProvider } from "./contexts/themeContext";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global-styles";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Home />
      </ThemeContextProvider>
    </>
  );
}

export default App;
