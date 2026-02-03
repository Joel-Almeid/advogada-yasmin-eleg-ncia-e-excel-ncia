import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#processo", label: "Processo" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col">
          <span className="font-serif text-lg md:text-xl tracking-[0.2em] text-cream-light">
            YASMIM DE PAULA
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
            Advogada
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.15em] uppercase text-cream-light/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-xs tracking-wider uppercase text-gold hover:text-gold-light transition-colors"
        >
          <Phone size={14} />
          <span>Contato</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream-light p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-charcoal border-t border-charcoal-light transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-cream-light/80 hover:text-gold transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4 justify-center"
          >
            <Phone size={16} />
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
