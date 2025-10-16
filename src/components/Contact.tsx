import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone muito longo"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem muito longa")
});

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { ref: info1Ref, isVisible: info1Visible } = useScrollReveal();
  const { ref: info2Ref, isVisible: info2Visible } = useScrollReveal();
  const { ref: info3Ref, isVisible: info3Visible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação de segurança
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.error(firstError.message);
      return;
    }
    
    const validatedData = validation.data;
    const emailSubject = "Solicitação de Orçamento - Casa das Máquinas";
    const emailBody = `Nome: ${validatedData.name}\nE-mail: ${validatedData.email}\nTelefone: ${validatedData.phone}\n\nMensagem:\n${validatedData.message}`;
    
    window.location.href = `mailto:netoparrille@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    toast.success("Abrindo seu cliente de e-mail para enviar o orçamento!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card ref={formRef} className={`transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardHeader>
                <CardTitle>Solicite um Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário e nossa equipe entrará em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Seu telefone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Conte-nos sobre sua necessidade"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card ref={info1Ref} className={`transition-all duration-700 delay-100 ${info1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(11) 947883073</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card ref={info2Ref} className={`transition-all duration-700 delay-200 ${info2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">netoparrille@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card ref={info3Ref} className={`transition-all duration-700 delay-300 ${info3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground">R. Vicente Navarro 70 - Campo Limpo, São Paulo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
