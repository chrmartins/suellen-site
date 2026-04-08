import { Mail, Phone } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Phone, href: "https://wa.me/5521971331197", label: "WhatsApp" },
  {
    icon: Mail,
    href: "mailto:psicologasuellenrodrigues05@gmail.com",
    label: "E-mail",
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-slate-700">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.png"
                alt="Logo Suellen Rodrigues"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-bold text-white">Suellen Rodrigues</p>
                <p className="text-xs text-slate-400">Psicóloga Clínica</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Atendimento psicológico humanizado, com escuta genuína e cuidado
              individualizado para você.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              Contato
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-violet-600 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* <div className="mt-5 space-y-1 text-sm text-slate-400">
              <p>Seg – Sex: 8h – 20h</p>
              <p>Sábado: 8h – 13h</p>
              <p className="mt-2 text-xs text-slate-500">CRP 05/85974</p>
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Suellen Rodrigues Psicóloga. Todos os
            direitos reservados.
          </p>
          <p>Atendimento online e presencial</p>
        </div>
      </div>
    </footer>
  );
}
