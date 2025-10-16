import { Shield, Award, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollReveal();

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a W.S Casa das Maquinas
          </h2>
          <p className="text-lg text-muted-foreground">
            Desde 2003 somos especialistas em manutenção e reparo de vidros automotivos. Nossa missão é manter seus equipamentos funcionando perfeitamente e com qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div ref={card1Ref} className={`bg-gradient-card rounded-lg p-8 text-center border border-border transition-all duration-700 ${card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Qualidade Garantida</h3>
            <p className="text-muted-foreground">
              Todos os nossos serviços são executados com peças de qualidade e garantia de funcionamento.
            </p>
          </div>

          <div ref={card2Ref} className={`bg-gradient-card rounded-lg p-8 text-center border border-border transition-all duration-700 delay-150 ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Experiência</h3>
            <p className="text-muted-foreground">
              Anos de experiência em manutenção de máquinas para vidros automotivos.
            </p>
          </div>

          <div ref={card3Ref} className={`bg-gradient-card rounded-lg p-8 text-center border border-border transition-all duration-700 delay-300 ${card3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Suporte Técnico</h3>
            <p className="text-muted-foreground">
              Assistência completa para garantir o melhor desempenho dos seus equipamentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
