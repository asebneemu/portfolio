import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

function Projects({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  // Dark mode ve light mode için stiller
  const styles = darkMode
    ? {
        bgColor: 'bg-gray-800',
        textColor: 'text-white',
        cardBgColor: 'bg-gray-700',
        cardTextColor: 'text-white',
        buttonBgColor: 'bg-gray-700',
        buttonTextColor: 'text-white',
        buttonBorderColor: 'border-white',
      }
    : {
        bgColor: 'bg-white',
        textColor: 'text-black',
        cardBgColor: 'bg-white',
        cardTextColor: 'text-black',
        buttonBgColor: 'bg-white',
        buttonTextColor: 'text-[#3730A3]',
        buttonBorderColor: 'border-[#3730A3]',
      };

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="max-w-[1140px] h-auto mx-auto p-5">
        {/* Başlık sola yaslanmış ve büyütülmüş */}
        <h1 className="mt-5 text-left text-4xl sm:text-5xl font-bold mb-10">{content.heroes.projectsText}</h1>

        {/* Proje verilerini map fonksiyonu ile listeliyoruz */}
        <div className="flex flex-wrap sm:flex-wrap justify-around gap-8 mb-10">
          {content.projects.map((project) => (
            <div
              key={project.id}
              className={`w-full sm:w-auto md:w-[30%] p-4 rounded-lg shadow-md ${styles.cardBgColor} ${styles.cardTextColor}`}
            >
              {/* Proje Resmi */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Proje Başlığı */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>

              {/* İlk Div: Üç buton içeren div */}
              <div className="flex gap-4 justify-start mb-4">
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor}`}
                >
                  react
                </button>
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor}`}
                >
                  redux
                </button>
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor}`}
                >
                  axios
                </button>
              </div>

              {/* İkinci Div: İki buton içeren div (Sola ve Sağa yaslı) */}
              <div className="flex justify-between">
                <button className={`border-b-2 px-2 py-1 ${styles.textColor}`}>
                  Github
                </button>
                <button className={`border-b-2 px-2 py-1 ${styles.textColor}`}>
                  View Site
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
