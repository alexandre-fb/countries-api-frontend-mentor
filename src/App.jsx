import { ThemeContextProvider } from "./contexts/themeContext";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </>
  );
}

export default App;
