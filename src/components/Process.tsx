import { Phone, Calendar, FileText, PenTool, Users, Presentation } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Primeiro Contato",
    description: "Entre em contato conosco",
  },
  {
    icon: Calendar,
    number: "2",
    title: "Agendamento",
    description: "Agendamos uma consulta",
  },
  {
    icon: FileText,
    number: "3",
    title: "Parecer do Caso",
    description: "Análise jurídica detalhada",
  },
  {
    icon: PenTool,
    number: "4",
    title: "Assinaturas",
    description: "Formalização do contrato",
  },
  {
    icon: Users,
    number: "5",
    title: "Reunião Decisória",
    description: "Alinhamento de estratégias",
  },
  {
    icon: Presentation,
    number: "6",
    title: "Apresentação",
    description: "Acompanhamento do processo",
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-20 md:py-28 bg-charcoal">
      <div className="container">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="section-title text-gold">Metodologia</p>
          <h2 className="heading-section text-cream-light">Conheça o Processo</h2>
        </AnimatedSection>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
                className="relative group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-gold/50 to-gold/20" />
                )}
                
                {/* Step content */}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center mb-4 group-hover:border-gold transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-xs text-gold mb-1">{step.number}.</span>
                  <h4 className="font-serif text-sm text-cream-light mb-1 tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-xs text-cream-light/60">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Staggered grid */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 80}
                className={`flex flex-col items-center text-center p-4 ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-xs text-gold mb-1">{step.number}.</span>
                <h4 className="font-serif text-sm text-cream-light mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-cream-light/60">{step.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
