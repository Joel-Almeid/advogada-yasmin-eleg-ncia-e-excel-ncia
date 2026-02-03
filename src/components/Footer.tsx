import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      toast({
        title: "Erro",
        description: "Por favor, insira um nome válido.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast({
        title: "Erro",
        description: "Por favor, insira uma mensagem com pelo menos 10 caracteres.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Erro",
        description: "Você precisa aceitar a política de privacidade.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Nova mensagem do site*\n\n` +
      `*Nome:* ${formData.name.trim()}\n` +
      `*E-mail:* ${formData.email.trim()}\n` +
      `${formData.phone ? `*Telefone:* ${formData.phone.trim()}\n` : ""}` +
      `\n*Mensagem:*\n${formData.message.trim()}`
    );

    // Open WhatsApp with prefilled message
    const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;
    
    // Simulate a small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete o envio da mensagem pelo WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    });
    
    setIsSubmitting(false);
  };

  return (
    <footer id="contato" className="py-16 md:py-20 bg-charcoal">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <AnimatedSection animation="fade-right">
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
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={100}>
            <p className="text-cream-light/60 text-sm mb-6">
              Se preferir, envie sua mensagem pelo formulário abaixo:
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nome *"
                maxLength={100}
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail *"
                maxLength={255}
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Telefone"
                maxLength={20}
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mensagem *"
                rows={4}
                maxLength={1000}
                className="w-full bg-charcoal-light border border-charcoal-light px-4 py-3 text-cream-light placeholder:text-cream-light/40 focus:border-gold focus:outline-none transition-colors resize-none"
                required
              />
              <label className="flex items-start gap-3 text-xs text-cream-light/60 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
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
                disabled={isSubmitting}
                className="btn-gold w-full justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <MessageCircle size={16} />
                    Enviar via WhatsApp
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-16 pt-8 border-t border-charcoal-light text-center">
            <p className="font-serif text-lg tracking-[0.2em] text-cream-light mb-2">
              YASMIM DE PAULA
            </p>
            <p className="text-xs text-cream-light/40 tracking-wider">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
