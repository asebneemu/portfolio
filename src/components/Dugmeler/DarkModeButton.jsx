import LanguageToggle from '../LanguageToggle'; // Dil değiştirme butonunu import ediyoruz

import { ToastContainer, toast } from 'react-toastify'; // Toastify import
import 'react-toastify/dist/ReactToastify.css'; // Toastify'nin CSS dosyasını import

// eslint-disable-next-line react/prop-types
function DarkModeButton({ darkMode, toggleDarkMode }) {


  const handleToggleDarkMode = () => {
    // Önce darkMode'u değiştiriyoruz
    toggleDarkMode();
    
    // setTimeout kullanarak toast mesajını darkMode durumundan hemen sonra gösteriyoruz
    setTimeout(() => {
      toast(darkMode ? 'Light Mode Activated!' : 'Dark Mode Activated!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 100); // 100ms'lik bir gecikme
  };

  return (
    <div
      className={`w-full flex justify-center items-center h-[100px] ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}
    >
      {/* Toastify Container */}
      <ToastContainer />
      {/* 1140px genişliğinde ortalanmış div */}
      <div className="w-[1140px] h flex justify-end items-center space-x-4 pr-4">
        {/* Türkçeye Geç Butonu */}
        <LanguageToggle />

        {/* Dark Mode Butonu */}
        <div className="flex items-center space-x-4 pr-[8%]">
          <div
            onClick={handleToggleDarkMode} // Toggle Dark Mode
            className={`relative w-[65px] h-[24px] border-2 border-[#a499ee] rounded-full bg-[#a499ee] flex items-center cursor-pointer`}
          >
            <div
              className={`absolute top-0 w-[20px] h-[20px] rounded-full transition-all duration-300 ${darkMode
                  ? "left-0 bg-white"  // Dark mode: Daire beyaz
                  : "left-[40px] bg-[#ffff68]"  // Light mode: Daire sarı
                }`}
            ></div>
          </div>
          <span
            className={`ml-2 flex items-center ${darkMode ? "text-white" : "text-black"
              }`}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DarkModeButton;
