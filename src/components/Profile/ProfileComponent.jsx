import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

// eslint-disable-next-line react/prop-types
function ProfileComponent({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  // Dark mode ve light mode için stiller
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

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="max-w-[1140px] h-auto mx-auto p-5 mb-[100px]">
        <h1 className="text-left text-4xl xs:text-5xl sm:text-6xl font-bold">{content.profile.title}</h1>

        {/* Alt div - Ekran küçüldükçe alt alta geçecek iki div */}
        <div className="flex flex-wrap justify-between mt-10 gap-4">
          {/* İlk Div: Profile bilgileri */}
          <div className={`w-full sm:w-[48%] p-5 rounded shadow-lg ${styles.bgColor} ${styles.textColor}`}>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-5">{content.profile.title}</h3>
            <ul className="list-none space-y-4 text-sm xs:text-base sm:text-lg">
              <li><strong>{content.profile.dogumTarihi}</strong> {content.profile.birthDate}</li>
              <li><strong>{content.profile.lokasyon}</strong> {content.profile.location}</li>
              <li><strong>{content.profile.ogrenimDurumu}</strong> {content.profile.education}</li>
              <li><strong>{content.profile.rol}</strong> {content.profile.preferredRole}</li>
            </ul>
          </div>

          {/* İkinci Div: About Me kısmı */}
          <div className={`w-full sm:w-[48%] p-5 rounded shadow-lg ${styles.bgColor} ${styles.textColor}`}>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-5">{content.profile.altBaslik}</h3>
            <p className={`text-sm xs:text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {content.profile.aboutMe}
            </p>
          </div>
        </div>

        {/* Mavi tonlarında ince bir çizgi */}
        <div className="w-full h-[2px] bg-gradient-to-r from-green-400 to-purple-600 mt-10 mx-auto"></div>
        
        {/* Bir buton örneği */}
        <button className={`mt-5 px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor}`}>
          {content.profile.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ProfileComponent;
