import { MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 md:py-16 bg-charcoal">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-serif text-xl md:text-2xl tracking-wide text-cream-light text-center md:text-left">
            Fale Agora com uma Especialista
          </h3>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta jurídica."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold whitespace-nowrap"
          >
            <MessageCircle size={18} />
            Solicitar Orientação Jurídica
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
