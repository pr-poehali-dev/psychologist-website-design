import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const specializations = [
    {
      icon: "Heart",
      title: "Поиск смысла жизни",
      description:
        "Помогаю обрести понимание своего предназначения и найти внутреннюю мотивацию",
    },
    {
      icon: "Brain",
      title: "Экзистенциальные кризисы",
      description:
        "Работаю с вопросами одиночества, свободы выбора, тревоги перед неопределенностью",
    },
    {
      icon: "Compass",
      title: "Жизненные переходы",
      description:
        "Сопровождаю в периоды важных изменений и принятия судьбоносных решений",
    },
    {
      icon: "Lightbulb",
      title: "Личностный рост",
      description:
        "Помогаю раскрыть потенциал и обрести аутентичность в отношениях с собой и миром",
    },
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            <span className="gradient-text">С чем я работаю</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Экзистенциальная психология помогает понять глубинные вопросы
            человеческого бытия и найти свой уникальный путь в жизни
          </p>
        </div>

        {/* Карточки специализаций */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specializations.map((item, index) => (
            <Card
              key={index}
              className="card-hover bg-white/70 backdrop-blur-sm border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-blue-100 to-beige-100 rounded-xl flex items-center justify-center">
                    <Icon
                      name={item.icon}
                      size={24}
                      className="text-sky-blue-600"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-montserrat font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="bg-gradient-to-r from-sky-blue-50 to-beige-50 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-montserrat font-semibold text-slate-800">
              Мой подход к терапии
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Я создаю безопасное пространство для исследования глубинных
              вопросов существования. В моей работе нет готовых ответов — есть
              совместный поиск вашей собственной истины и аутентичного способа
              быть в мире.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {[
                "Индивидуальная терапия",
                "Онлайн консультации",
                "Долгосрочное сопровождение",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/70 text-sky-blue-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
