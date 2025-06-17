import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Звонки принимаю с 10:00 до 20:00",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "sofia@bulgakova-psy.ru",
      description: "Отвечаю в течение 24 часов",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@sofia_bulgakova",
      description: "Быстрая связь и запись на консультацию",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 section-padding bg-gradient-to-br from-sky-blue-50/50 to-beige-50/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            <span className="gradient-text">Свяжитесь со мной</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Готова ответить на ваши вопросы и помочь сделать первый шаг к
            изменениям
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactMethods.map((contact, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-blue-100 to-beige-100 rounded-xl flex items-center justify-center">
                        <Icon
                          name={contact.icon}
                          size={24}
                          className="text-sky-blue-600"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-montserrat font-semibold text-slate-800">
                          {contact.title}
                        </h3>
                        <p className="text-lg font-medium text-sky-blue-700">
                          {contact.value}
                        </p>
                        <p className="text-sm text-slate-600">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-sky-blue-50 to-beige-50 rounded-2xl p-6">
              <h3 className="font-montserrat font-semibold text-slate-800 mb-3">
                📅 Записаться на консультацию
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Первичная консультация длится 50 минут. Мы обсудим ваш запрос и
                определим, подходит ли вам мой подход к терапии.
              </p>
              <Button className="bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 hover:from-sky-blue-600 hover:to-sky-blue-700 text-white">
                Записаться на встречу
              </Button>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl animate-fade-in">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-blue-100 to-beige-100 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Heart" size={32} className="text-sky-blue-600" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-slate-800">
                  Начните путь к себе
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-sky-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-slate-600">
                    Конфиденциальность и безопасность
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-sky-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-slate-600">
                    Индивидуальный подход к каждому
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-sky-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-slate-600">
                    Возможность онлайн консультаций
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-sky-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-slate-600">Гибкий график работы</p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-500 text-center">
                  Лицензия на осуществление медицинской деятельности
                  <br />№ ЛО-77-01-019181 от 12.08.2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
