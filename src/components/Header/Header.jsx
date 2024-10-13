import { useLanguage } from '../../context/LanguageContext'; // LanguageContext'i import ediyoruz

function Header({ darkMode }) {
  // Dark mode'a göre stilleri ayarlıyoruz
  const styles = darkMode
    ? {
        bgColor: 'bg-gray-800',
        textColor: 'text-white',
        buttonBgColor: 'bg-gray-700',
        buttonTextColor: 'text-white',
      }
    : {
        bgColor: 'bg-white',
        textColor: 'text-black',
        buttonBgColor: 'bg-white',
        buttonTextColor: 'text-[#3730A3]',
      };

  // Dil yönetimi için useLanguage hook'u
  const { content } = useLanguage(); // Context'ten gelen veriyi kullanıyoruz

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <header className="w-full max-w-[1140px] h-auto flex flex-wrap mx-auto lg:flex-nowrap">
        {/* İlk div: Genişliğin %100'ünü kaplar ve ekran küçükse alta geçer */}
        <div className="w-full lg:w-[55%] flex flex-col justify-start pt-4 pl-4">
          {/* İç div: Çizgi ve Aleyna Şebnem Uçak yazısı */}
          <div className="flex items-center space-x-4">
            {/* 30px uzunluğunda çizgi */}
            <div className={`w-[70px] h-[2px] ${darkMode ? 'bg-white' : 'bg-black'}`}></div>

            {/* İsim yazısı */}
            <span className="text-lg lg:text-xl md:text-lg sm:text-md xs:text-sm font-semibold pl-4">{content.header.name}</span>
          </div>

          {/* H1: Creative thinker, Minimalism lover */}
          <h1 className="mt-4 text-4xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold pt-5 lg:pt-10">
            {content.header.title}
          </h1>

          {/* P: Paragraf metni */}
          <p className="mt-2 text-base lg:text-lg md:text-base sm:text-sm xs:text-xs pt-4 lg:pt-10 pr-5 sm:pr-0">
            {content.header.description}
          </p>

          {/* Div: Üç butondan oluşan container */}
          <div className="mt-4 space-x-2 pt-10 sm:pt-5">
            <button
              className={`px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} hover:bg-[#3730A3] hover:text-white sm:px-3 sm:py-1`}
            >
              {content.header.buttons.hireMe}
            </button>
            <button
              className={`px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} hover:bg-[#3730A3] hover:text-white sm:px-3 sm:py-1`}
            >
              {content.header.buttons.github}
            </button>
            <button
              className={`px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} hover:bg-[#3730A3] hover:text-white sm:px-3 sm:py-1`}
            >
              {content.header.buttons.linkedin}
            </button>
          </div>
        </div>

        {/* İkinci div: Genişliğin %100'ünü kaplar ve küçük ekranlarda alta geçer */}
        <div className="w-full lg:w-[45%] flex justify-center items-center mt-8 lg:mt-0">
          {/* Resim: sm ve daha küçük ekranlarda gizlenecek, md ve daha büyük ekranlarda görünecek */}
          <img src={content.header.image} alt="Placeholder" className="hidden md:block h-[200px] md:h-[320px] lg:h-[428px] object-contain" />
        </div>
      </header>
    </div>
  );
}

export default Header;
