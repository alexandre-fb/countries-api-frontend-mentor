import { ThemeContextProvider } from "./contexts/themeContext";
import { AppRoutes } from "./pages/routes";
import { GlobalStyle } from "./styles/global-styles";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeContextProvider>
    </>
  );
}

export default App;
