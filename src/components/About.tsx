import { MessageCircle, Phone } from "lucide-react";
import lawyerWorking from "@/assets/lawyer-working.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-cream-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={lawyerWorking}
                alt="Dra. Yasmim de Paula trabalhando"
                className="w-full h-full object-cover grayscale-img"
              />
            </div>
            {/* Gold accent line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold" />
          </div>

          {/* Content */}
          <div>
            <p className="section-title">Sobre o Escritório</p>
            <h2 className="heading-section mb-6">Dra. Yasmim de Paula</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O escritório Yasmim de Paula Advocacia é especializado em 
                demandas que envolvem o Direito do Consumidor e Direito 
                Previdenciário, oferecendo atendimento personalizado e de 
                alta qualidade.
              </p>
              <p>
                Nossa missão consiste no atendimento humanizado, aliado ao 
                trabalho técnico de excelência, tendo como diferencial o 
                compromisso com o interesse de nossos clientes.
              </p>
              <p>
                <strong className="text-foreground">Formação:</strong> Pós-graduada 
                em Direito do Consumidor e Direito Previdenciário, com atuação 
                focada na defesa dos direitos fundamentais do cidadão.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold justify-center"
              >
                <MessageCircle size={16} />
                Contato via WhatsApp
              </a>
              <a href="tel:+5511999999999" className="btn-outline justify-center">
                <Phone size={16} />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
