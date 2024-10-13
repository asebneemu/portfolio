import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

// eslint-disable-next-line react/prop-types
function SkillItems({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  // Dark mode ve light mode için stiller
  const styles = darkMode
    ? {
        bgColor: 'bg-gray-700',
        textColor: 'text-white',
        cardBgColor: 'bg-gray-700',
        cardTextColor: 'text-white',
      }
    : {
        bgColor: 'bg-white',
        textColor: 'text-black',
        cardBgColor: 'bg-white',
        cardTextColor: 'text-gray-700',
      };

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="max-w-[1140px] h-auto mx-auto p-5 mt-[100px] min-h-[450px]">
        <h1 className="text-left text-3xl sm:text-4xl md:text-5xl font-bold pb-5 mt-10 mb-10 text-left">
          {content.skillss.skillsTitle}
        </h1>

        {/* Flexbox ile öğeleri yan yana diziyoruz, küçük ekranlarda alt alta geçecek */}
        <div className="flex flex-wrap gap-4 justify-center">
          {content.skills.map((skill) => (
            <div
              key={skill.id}
              className={`p-6 rounded-lg shadow-md w-full sm:w-[48%] md:w-[30%] text-center ${styles.cardBgColor} ${styles.cardTextColor}`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">{skill.title}</h3>
              <p className="text-sm sm:text-base md:text-lg">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Mavi tonlarında ince bir çizgi */}
        <div className="w-full h-[2px] bg-gradient-to-r from-green-400 to-purple-600 mt-10 mx-auto"></div>
      </div>
    </div>
  );
}

export default SkillItems;
