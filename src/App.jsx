import "./App.css";
import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
// eslint-disable-next-line no-unused-vars
import ProfileComponent from './components/Profile/ProfileComponent';
import SkillItems from './components/Skills/SkillItems';
// eslint-disable-next-line no-unused-vars
import Projects from "./components/Projects/Projects";
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer/Footer';
import DarkModeButton from "./components/Dugmeler/DarkModeButton";
import { useState } from "react";
import { LanguageProvider } from './context/LanguageContext';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Dark mode'u toggle eden fonksiyon
  };

  return (
    <LanguageProvider>
      <div className={`App flex flex-col items-center ${darkMode ? 'dark bg-slate-900 text-white' : 'bg-white text-black'}`}>
        {/* Dark Mode Button */}
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Heroes darkMode={darkMode} />
        <Header darkMode={darkMode} />
        <SkillItems darkMode={darkMode} />
        <ProfileComponent darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Footer darkMode={darkMode} />{/**/}
      </div >
    </LanguageProvider>
  );
}

export default App;
