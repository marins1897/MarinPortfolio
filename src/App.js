import { Route, Routes } from 'react-router';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from './components/Themes';

/* COMPONENTS */
import Main from './components/Main';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { AnimatePresence } from 'framer-motion';



function App() {
  return <>

  <GlobalStyle />

  <ThemeProvider theme={lightTheme}>

  <AnimatePresence exitBeforeEnter >

   <Routes>
     <Route path="/" element={<Main/>} />
     <Route path="/contact" element={<ContactPage/>} />
     <Route path="/about" element={<AboutPage/>} />
     <Route path="/work" element={<WorkPage/>} />
     <Route path="/skills" element={<MySkillsPage/>} />
     
   </Routes>
   </AnimatePresence>

  </ThemeProvider>
   
    </>
    
};

export default App

