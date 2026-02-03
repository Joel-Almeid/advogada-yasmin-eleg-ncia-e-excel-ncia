import { MessageCircle } from "lucide-react";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-charcoal overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal to-charcoal/80" />

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="section-title text-gold mb-4 animate-fade-in">
              Advogada Especialista
            </p>
            <h1 className="heading-display text-cream-light mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Direito do Consumidor <br />
              <span className="text-gold-light">&</span> Previdenciário
            </h1>
            <p className="font-body text-cream-light/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Atuação especializada na defesa dos seus direitos. 
              Pós-graduada em Direito do Consumidor e Previdenciário, 
              com atendimento personalizado e comprometido com resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold justify-center"
              >
                <MessageCircle size={18} />
                Solicitar Orientação
              </a>
              <a href="#servicos" className="btn-outline-light justify-center">
                Conheça os Serviços
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full" />
              <img
                src={lawyerPortrait}
                alt="Dra. Yasmim de Paula - Advogada"
                className="relative w-64 md:w-80 lg:w-96 h-auto object-cover grayscale-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-light/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream-light/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
