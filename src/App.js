import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import About from "./components/About";
import Blog from "./components/Blog";
import Main from "./components/Main";
import MySkills from "./components/MySkills";
import Work from "./components/Work";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="blog/" element={<Blog />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/skills" element={<MySkills />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
