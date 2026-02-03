import { Check } from "lucide-react";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";
import AnimatedSection from "./AnimatedSection";

const differentials = [
  "Atendimento online para todo o Brasil",
  "Consultoria e assessoria completa e personalizada",
  "Qualidade e transparência nos serviços prestados",
  "Agilidade na solução",
  "Acompanhamento integral do processo",
  "Equipe experiente e especializada",
];

const Differentials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-right" className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={lawyerPortrait}
                alt="Dra. Yasmim de Paula"
                className="w-full h-full object-cover object-top grayscale-img"
              />
            </div>
            {/* Gold accent line */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-gold" />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={150} className="order-1 lg:order-2">
            <p className="section-title">Por que nos escolher</p>
            <h2 className="heading-section mb-8">Diferenciais</h2>
            
            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
