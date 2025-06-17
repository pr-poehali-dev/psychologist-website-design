import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArticlesSection = () => {
  const articles = [
    {
      title: "Что такое экзистенциальная тревога и как с ней справиться",
      excerpt:
        "Разбираемся в природе глубинной тревоги и находим способы трансформировать её в движущую силу развития",
      readTime: "5 мин",
      date: "15 декабря",
    },
    {
      title: "Поиск смысла в современном мире",
      excerpt:
        "Как обрести направление жизни в эпоху бесконечных возможностей и информационного шума",
      readTime: "7 мин",
      date: "8 декабря",
    },
    {
      title: "Принятие неопределенности как путь к свободе",
      excerpt:
        "Почему неопределенность — это не проблема, а пространство для творчества и аутентичного выбора",
      readTime: "6 мин",
      date: "1 декабря",
    },
  ];

  const socialLinks = [
    {
      name: "Telegram",
      icon: "MessageCircle",
      url: "#",
      description: "Ежедневные размышления и короткие заметки о психологии",
    },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "#",
      description: "Визуальные истории и практические упражнения",
    },
    {
      name: "YouTube",
      icon: "Play",
      url: "#",
      description: "Глубокие разборы и лекции о экзистенциальной терапии",
    },
  ];

  return (
    <section
      id="articles"
      className="py-20 section-padding bg-gradient-to-b from-white/50 to-sky-blue-50/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            <span className="gradient-text">Статьи и материалы</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Делюсь знаниями и размышлениями о глубинных вопросах человеческого
            существования
          </p>
        </div>

        {/* Статьи */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-lg group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                  <span>{article.date}</span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-slate-800 leading-tight group-hover:text-sky-blue-700 transition-colors">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-sky-blue-600 font-medium text-sm group-hover:text-sky-blue-700">
                  <span>Читать далее</span>
                  <Icon
                    name="ChevronRight"
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Социальные сети */}
        <div className="bg-gradient-to-br from-white/80 to-sky-blue-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-montserrat font-semibold text-slate-800 mb-4">
              Следите за обновлениями
            </h3>
            <p className="text-lg text-slate-600">
              Присоединяйтесь к сообществу людей, интересующихся глубинной
              психологией
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-blue-100 to-beige-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon
                    name={social.icon}
                    size={28}
                    className="text-sky-blue-600"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-slate-800 mb-2">
                    {social.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    {social.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50"
                  >
                    Подписаться
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
