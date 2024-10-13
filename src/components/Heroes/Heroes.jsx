import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

// eslint-disable-next-line react/prop-types
function Heroes({ darkMode }) {
  // Dark mode'a göre stilleri ayarlıyoruz
  const styles = darkMode
    ? {
        bgColor: 'bg-gray-800',
        textColor: 'text-white',
        buttonBgColor: 'bg-gray-700',
        buttonTextColor: 'text-white',
        circleBgColor: 'bg-[#EEEBFF]',
        circleTextColor: 'text-[#3730A3]',
        buttonBorderColor: 'border-transparent',
        buttonHoverBorderColor: 'hover:border-white',
      }
    : {
        bgColor: 'bg-white',
        textColor: 'text-black',
        buttonBgColor: 'bg-white',
        buttonTextColor: 'text-[#3730A3]',
        circleBgColor: 'bg-[#EEEBFF]',
        circleTextColor: 'text-[#3730A3]',
        buttonBorderColor: 'border-transparent',
        buttonHoverBorderColor: 'hover:border-white',
      };

  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  // Buton verilerini bir dizi olarak tanımlıyoruz
  const buttons = [
    { text: content.heroes.skillsText },
    { text: content.heroes.projectsText },
    { text: content.heroes.hireMeText },
  ];

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="max-w-[1140px] h-[62px] flex justify-between items-center mx-auto px-4 mt-[70px] mb-8 sm:px-4 md:px-6 lg:px-4">
        {/* "A" butonu: En küçük ekranlarda (sm ve altı) gizlenecek */}
        <button className={`hidden sm:flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full ${styles.circleBgColor}`}>
          <span className={`text-base sm:text-lg md:text-xl lg:text-2xl font-normal ${styles.circleTextColor}`}>A</span>
        </button>

        {/* İkinci div: Üç adet buton, dinamik olarak map ile render ediliyor */}
        <div className="flex-grow flex justify-end items-center space-x-4 pr-[7%]">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1 lg:px-4 lg:py-1 border-2 ${styles.buttonBorderColor} rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonHoverBorderColor}`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Heroes;
