import { Heart, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Escuta Sensível",
    description: "Uma presença genuína e acolhedora em cada sessão.",
  },
  {
    icon: Shield,
    title: "Espaço Seguro",
    description: "Sigilo, ética e respeito como pilares do atendimento.",
  },
  {
    icon: Users,
    title: "Olhar Integral",
    description:
      "Considerando emoções, relações e o contexto de vida de cada um.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Text side */}
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-violet-600 bg-violet-100 rounded-full mb-5">
              Sobre mim
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Cuidado que coloca{" "}
              <span className="gradient-text">o ser humano</span> no centro
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Me chamo{" "}
                <strong className="text-slate-800">Suellen Rodrigues</strong>,
                psicóloga clínica e acredito em um cuidado que coloca o ser
                humano no centro do processo terapêutico. Meu trabalho é
                orientado por uma escuta sensível e acolhedora, com foco em um
                atendimento humanizado e individualizado, respeitando a
                singularidade de cada pessoa.
              </p>
              <p>
                Entendo que cada indivíduo possui sua própria história,
                experiências e formas de lidar com o mundo. Por isso, meu olhar
                clínico considera o sujeito como um todo, integrando aspectos
                emocionais, comportamentais e relacionais.
              </p>
              <p>
                Ofereço um espaço seguro, ético e de confiança, onde você pode
                se expressar livremente e construir, junto comigo, novas possibilidades.
              </p>
              <p className="italic text-violet-600 font-medium border-l-4 border-violet-300 pl-4">
                "Se você procura um acompanhamento psicológico baseado no
                respeito, na empatia e na escuta genuína, será um prazer
                caminhar ao seu lado."
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col items-center sm:items-start gap-2 p-4 rounded-xl bg-violet-50 border border-violet-100"
                >
                  <div className="p-2 rounded-lg gradient-primary">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="font-semibold text-sm text-slate-800">
                    {title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
