import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

// eslint-disable-next-line react/prop-types
function Footer({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  // Dark mode ve light mode için stiller
  const styles = darkMode
    ? {
        bgColor: 'bg-gray-500',
        textColor: 'text-white',
        buttonBgColor: 'bg-gray-700',
        buttonTextColor: 'text-white',
      }
    : {
        bgColor: 'bg-gray-100',
        textColor: 'text-black',
        buttonBgColor: 'bg-white',
        buttonTextColor: 'text-black',
      };

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="max-w-[1140px] h-auto mx-auto p-5">
        {/* İlk Div: Yazı */}
        <div className="w-full sm:w-[45%]">
          <h2 className="text-3xl sm:text-4xl font-bold text-left">{content.footer.heading}</h2>
        </div>

        {/* İkinci Div: Paragraf ve butonlar */}
        <div className="w-full mt-5 flex flex-wrap sm:flex-nowrap items-center">
          {/* Paragraf sola yaslı ve genişliğini kaplar */}
          <p className="flex-grow text-left mt-5 sm:mt-0 text-base sm:text-lg">{content.footer.paragraph}</p>

          {/* Butonların olduğu div sağa yaslanır */}
          <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-0 w-full sm:w-auto sm:text-right">
            <button className={`px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor}`}>
              {content.footer.buttons.personalBlog}
            </button>

            {/* Github button */}
            <button className="px-4 py-2 rounded bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-in-out">
              {content.footer.buttons.github}
            </button>

            {/* Linkedin button - Maviden mora geçiş */}
            <button className="px-4 py-2 rounded bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-in-out">
              {content.footer.buttons.linkedin}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
