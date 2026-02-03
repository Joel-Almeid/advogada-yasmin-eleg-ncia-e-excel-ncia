import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const servicesData = [
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    items: [
      {
        question: "Cobranças Indevidas",
        answer:
          "Atuação em casos de cobranças abusivas, tarifas não autorizadas e valores cobrados em duplicidade. Garantimos a restituição em dobro quando cabível.",
      },
      {
        question: "Negativação Indevida",
        answer:
          "Defesa em casos de inclusão indevida em cadastros de inadimplentes (SPC/Serasa), com pedido de indenização por danos morais e exclusão imediata.",
      },
      {
        question: "Produtos e Serviços Defeituosos",
        answer:
          "Responsabilização de fornecedores por produtos com defeito, vícios ocultos e serviços mal prestados, garantindo troca, reembolso ou indenização.",
      },
      {
        question: "Contratos Abusivos",
        answer:
          "Revisão de contratos bancários, financiamentos e cláusulas abusivas que prejudicam o consumidor, buscando equilíbrio nas relações de consumo.",
      },
    ],
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    items: [
      {
        question: "Aposentadoria por Tempo de Contribuição",
        answer:
          "Análise completa do histórico contributivo para obtenção da aposentadoria mais vantajosa, incluindo revisões e cálculos de benefício.",
      },
      {
        question: "Aposentadoria por Invalidez",
        answer:
          "Acompanhamento em processos de incapacidade, perícias médicas e recursos administrativos para concessão do benefício.",
      },
      {
        question: "Auxílio-Doença e BPC/LOAS",
        answer:
          "Assistência completa para obtenção de auxílio-doença e Benefício de Prestação Continuada para pessoas com deficiência e idosos.",
      },
      {
        question: "Pensão por Morte",
        answer:
          "Orientação e defesa em casos de pensão por morte, incluindo comprovação de dependência e união estável.",
      },
    ],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="section-title">Especialidades</p>
          <h2 className="heading-section">Nossos Serviços</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {servicesData.map((service, idx) => (
            <AnimatedSection 
              key={service.id} 
              animation={idx === 0 ? "fade-right" : "fade-left"}
              delay={idx * 150}
            >
              <div className="space-y-6">
                <h3 className="font-serif text-xl tracking-wide text-foreground border-b border-gold pb-3">
                  {service.title}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {service.items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${service.id}-${index}`}
                      className="border border-border rounded-sm bg-card px-4"
                    >
                      <AccordionTrigger className="text-left text-sm font-body tracking-wide hover:text-gold py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={300}>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Phone size={16} />
            Tire suas Dúvidas
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
