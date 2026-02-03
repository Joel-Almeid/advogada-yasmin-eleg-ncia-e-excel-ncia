import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="py-16 md:py-20 bg-charcoal">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <p className="section-title text-gold">Contato</p>
            <h2 className="heading-section text-cream-light mb-8">
              Entre em Contato
            </h2>

            <div className="space-y-4">
              <a
                href="mailto:contato@yasmimdepaula.adv.br"
                className="flex items-center gap-3 text-cream-light/70 hover:text-gold transition-colors"
              >
                <Mail size={18} className="text-gold" />
                contato@yasmimdepaula.adv.br
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-cream-light/70 hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold" />
                +55 (11) 99999-9999
              </a>
              <div className="flex items-start gap-3 text-cream-light/70">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <span>
                  Rua Exemplo, 123, Sala 456
                  <br />
                  Centro - São Paulo, SP
                  <br />
                  CEP: 01234-567
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream-light/30 flex items-center justify-center text-cream-light/70 hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream-light/30 flex items-center justify-center text-cream-light/70 hover:border-gold hover:text-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="text-cream-light/60 text-sm mb-6">
              Se preferir, envie sua mensagem pelo formulário abaixo:
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome *"
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="E-mail *"
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Mensagem *"
                rows={4}
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors resize-none"
                required
              />
              <label className="flex items-start gap-3 text-xs text-cream-light/60">
                <input
                  type="checkbox"
                  className="mt-1 accent-gold"
                  required
                />
                <span>
                  Aceito a utilização dos dados fornecidos para contato e 
                  orientação jurídica, conforme Política de Privacidade.
                </span>
              </label>
              <button
                type="submit"
                className="btn-outline-light w-full justify-center"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-light text-center">
          <p className="font-serif text-lg tracking-[0.2em] text-cream-light mb-2">
            YASMIM DE PAULA
          </p>
          <p className="text-xs text-cream-light/40 tracking-wider">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
