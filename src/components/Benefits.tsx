import { CheckCircle, Truck, HeadphonesIcon, DollarSign } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Garantia de Serviço",
      description: "Todos os serviços realizados com garantia e peças de qualidade",
    },
    {
      icon: Truck,
      title: "Atendimento Rápido",
      description: "Resposta ágil para minimizar o tempo de inatividade dos seus equipamentos",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Profissionais experientes em máquinas para vidros automotivos",
    },
    {
      icon: DollarSign,
      title: "Preços Justos",
      description: "Orçamentos transparentes com os clientes",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por Que Escolher a W.S?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossos diferenciais que fazem a diferença no seu negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
