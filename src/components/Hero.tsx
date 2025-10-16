import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workshop.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl animate-fade-in text-center md:text-left mx-auto md:mx-0 flex flex-col justify-center min-h-[50vh] md:min-h-0">
          <h1 className="text-[2.75rem] md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 md:mb-6">
            Manutenção Especializada em Máquinas para Vidros Automotivos
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-8">
            Serviços de manutenção e reparo para máquinas manuais e elétricas. Experiência, qualidade e confiabilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <Button onClick={scrollToContact} size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              Solicitar Orçamento
            </Button>
            <Button onClick={scrollToProducts} size="lg" variant="outline" className="border-primary-foreground text-blue-700 hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
              Ver Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
