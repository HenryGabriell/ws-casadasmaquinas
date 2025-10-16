import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Wrench } from "lucide-react";
import electricImage from "@/assets/machine-electric-new.png";
import manualImage from "@/assets/machine-manual.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Products = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal();
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Manutenção especializada para todas as necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card ref={card1Ref} className={`overflow-hidden hover:shadow-lg transition-all duration-700 ${card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="h-48 md:h-56 overflow-hidden bg-secondary">
              <img 
                src={electricImage} 
                alt="Máquina Elétrica para Vidros Automotivos" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                </div>
                <CardTitle className="text-lg md:text-xl">Manutenção de Máquinas Elétricas</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Serviços completos para manter seu equipamento em alta performance
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 mb-4 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Revisão completa do sistema elétrico
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Calibração e ajustes de precisão
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Teste de funcionamento completo
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full">
                Solicitar Orçamento
              </Button>
            </CardContent>
          </Card>

          <Card ref={card2Ref} className={`overflow-hidden hover:shadow-lg transition-all duration-700 delay-200 flex flex-col ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="h-48 md:h-56 overflow-hidden bg-secondary">
              <img 
                src={manualImage} 
                alt="Máquina Manual para Vidros Automotivos" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="flex-grow pb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Wrench className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                </div>
                <CardTitle className="text-lg md:text-xl">Manutenção de Máquinas Manuais</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Cuidados especializados para máquinas manuais
              </CardDescription>
              <ul className="space-y-2 mt-4 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Lubrificação de componentes
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Substituição de peças de desgaste
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Inspeção de segurança
                </li>
              </ul>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <Button onClick={scrollToContact} className="w-full">
                Solicitar Orçamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
