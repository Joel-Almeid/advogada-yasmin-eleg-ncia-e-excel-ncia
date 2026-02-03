import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Profissional extremamente competente e dedicada. Resolveu meu caso com agilidade e transparência total.",
    name: "Maria Silva",
    area: "Aposentadoria Concedida",
  },
  {
    quote:
      "Assessoria jurídica de altíssimo nível. Me senti muito seguro com o acompanhamento da Dra. Yasmim.",
    name: "João Santos",
    area: "Causa Consumerista",
  },
  {
    quote:
      "Recomendo sem hesitar. Atendimento personalizado e soluções eficazes para questões complexas.",
    name: "Ana Paula Oliveira",
    area: "Revisão de Benefício",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-cream-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-title">Depoimentos</p>
          <h2 className="heading-section">O Que Dizem Nossos Clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-6 md:p-8 border border-border"
            >
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-serif text-foreground">{testimonial.name}</p>
                <p className="text-sm text-gold">{testimonial.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
