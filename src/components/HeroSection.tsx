import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Текстовая часть */}
        <div className="space-y-8 animate-slide-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
              <span className="gradient-text">Софья</span>
              <br />
              <span className="text-slate-700">Булгакова</span>
            </h1>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-sky-blue-400 to-beige-400"></div>
              <p className="text-xl text-slate-600 font-medium">
                Экзистенциальный психолог
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            Помогаю людям найти смысл и направление в жизни, работаю с
            глубинными вопросами существования и личностным ростом
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 hover:from-sky-blue-600 hover:to-sky-blue-700 text-white px-8"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Узнать больше
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 px-8"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Связаться со мной
            </Button>
          </div>
        </div>

        {/* Фотография */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-blue-200 to-beige-200 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c6d4e2d4?w=500&h=600&fit=crop&crop=face"
                alt="Софья Булгакова - экзистенциальный психолог"
                className="w-80 h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
