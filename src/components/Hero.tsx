import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-sky-50"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-violet-600 bg-violet-100 rounded-full mb-5">
              Psicóloga Clínica · CRP 06/XXXXX
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-2">
              Suellen
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text leading-tight mb-6">
              Rodrigues
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Um espaço seguro para o seu cuidado emocional.{" "}
              <span className="font-medium text-violet-700">
                Escuta genuína, atendimento humanizado
              </span>{" "}
              e acompanhamento individualizado para{" "}
              <span className="font-medium text-violet-700">
                adolescentes e adultos.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToContact}>
                Agendar consulta
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToAbout}>
                Conhecer mais
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-12">
              {[
                { value: "Online", label: "e Presencial" },
                { value: "Humanizado", label: "Atendimento" },
                { value: "Individual", label: "e personalizado" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-lg font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Blob background */}
              <div className="absolute inset-0 gradient-primary blob-shape opacity-20 scale-110" />
              <div className="relative z-10 blob-shape overflow-hidden w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[460px] shadow-2xl">
                <img
                  src="/assets/foto.png"
                  alt="Suellen Rodrigues, Psicóloga Clínica"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-violet-500 transition-colors animate-bounce"
            aria-label="Rolar para baixo"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Saiba mais
            </span>
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
