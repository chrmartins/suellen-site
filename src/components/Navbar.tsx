import { cn } from "@/lib/utils";
import { useNavStore } from "@/store/useNavStore";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
          >
            <img
              src="/assets/logo.png"
              alt="Suellen Rodrigues Psicóloga"
              className="h-10 w-10 object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-violet-700 tracking-wide">
                Suellen Rodrigues
              </p>
              <p className="text-xs text-slate-500">Psicóloga Clínica</p>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick("#contato")}
                className="ml-2 px-5 py-2 text-sm font-semibold text-white rounded-lg gradient-primary shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Agendar consulta
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-violet-600 hover:bg-violet-50 transition-colors"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-80 pb-4" : "max-h-0",
          )}
        >
          <ul className="flex flex-col gap-1 bg-white rounded-xl shadow-lg p-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-1">
              <button
                onClick={() => handleNavClick("#contato")}
                className="w-full px-4 py-3 text-sm font-semibold text-white rounded-lg gradient-primary text-center"
              >
                Agendar consulta
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
