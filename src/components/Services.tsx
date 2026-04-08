import { Button } from "@/components/ui/button";
import { Brain, Clock, Leaf, Smile, Users, Video } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psicoterapia Individual",
    description:
      "Acompanhamento psicológico individual para adultos.",
  },
  {
    icon: Video,
    title: "Atendimento Online",
    description:
      "Sessões via plataformas seguras, sem sair de casa. Comodidade e privacidade para o seu cuidado emocional.",
  },
  {
    icon: Clock,
    title: "Saúde Mental",
    description:
      "Atendimento a demandas como ansiedade, depressão, estresse, luto e outras questões emocionais.",
  }
];

export default function Services() {
  const scrollToContact = () => {
    const el = document.querySelector("#contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 bg-gradient-to-br from-violet-50 via-white to-sky-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-violet-600 bg-violet-100 rounded-full mb-5">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 leading-tight">
            Como posso <span className="gradient-text">te ajudar</span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Ofereço atendimento psicológico com escuta qualificada e abordagem
            individualizada, ajustada às necessidades únicas de cada pessoa.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-violet-100 hover:shadow-lg hover:border-violet-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl gradient-primary shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-600 mb-5 text-lg">
            Pronto para começar sua jornada de autoconhecimento?
          </p>
          <Button size="lg" onClick={scrollToContact}>
            Agendar minha consulta
          </Button>
        </div>
      </div>
    </section>
  );
}
