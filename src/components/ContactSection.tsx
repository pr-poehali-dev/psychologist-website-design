import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: "Mail",
      title: "Email",
      value: "sofia.bulgakova@email.com",
      description: "Для записи на консультацию",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@sofia_psychologist",
      description: "Быстрая связь и вопросы",
    },
    {
      icon: "Phone",
      title: "WhatsApp",
      value: "+7 (xxx) xxx-xx-xx",
      description: "Звонки и сообщения",
    },
  ];

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            <span className="gradient-text">Свяжитесь со мной</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Готова ответить на ваши вопросы и обсудить возможность работы вместе
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-blue-100 to-beige-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={method.icon}
                    size={28}
                    className="text-sky-blue-600"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-slate-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-sky-blue-700 font-medium mb-2">
                  {method.value}
                </p>
                <p className="text-sm text-slate-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-blue-50 to-beige-50 rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl font-montserrat font-semibold text-slate-800 mb-4">
            Начать работу над собой — это шаг к более осознанной жизни
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Если вы готовы исследовать глубинные вопросы своего существования и
            найти свой уникальный путь, я буду рада вам помочь
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 hover:from-sky-blue-600 hover:to-sky-blue-700 text-white px-8"
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
