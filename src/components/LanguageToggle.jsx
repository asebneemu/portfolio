import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Dil context'ini kullanıyoruz
import { ToastContainer, toast } from 'react-toastify'; // Toastify import
import 'react-toastify/dist/ReactToastify.css'; // Toastify'nin CSS dosyasını import

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext); // Context'ten language ve toggleLanguage alıyoruz

  const handleToggleLanguage = () => {
    toggleLanguage(); // Dil değiştirme işlemini yapıyoruz

    // setTimeout ile toast mesajını gösteriyoruz
    setTimeout(() => {
      toast(language === 'en' ? 'Dil Türkçeye Geçti!' : 'Language Switched to English!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 100); // 100ms gecikme ekledik
  };


  return (
    <button
      onClick={handleToggleLanguage}
      className="text-[14] font-normal p-4  text-black rounded"
    >
      <ToastContainer />
      {language === 'en' ? (
        <>
          <span className="text-[#FFFF00]">Türkçe</span> {/* Neon sarı sadece Türkçe kelimesi */}
          ye Geç
        </>
      ) : (
        'Switch to English'
      )}
    </button>
  );
}

export default LanguageToggle;
