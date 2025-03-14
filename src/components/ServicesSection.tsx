
import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  Code, 
  MessageSquare, 
  TrendingUp, 
  Palette
} from "lucide-react";

const services = [
  {
    icon: <Layers className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Criação de sites padrão ou personalizados",
    description: "Sites institucionais, landing pages, blogs e e-commerce com design responsivo e otimizados para SEO."
  },
  {
    icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Desenvolvimento de automações personalizadas",
    description: "Automatize processos repetitivos e reduza custos operacionais com nossas soluções de automação sob medida."
  },
  {
    icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Chatbots para atendimento automático",
    description: "Atendimento 24/7 com chatbots inteligentes que aprendem com cada interação e resolvem dúvidas instantaneamente."
  },
  {
    icon: <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Estratégias de marketing digital e vendas",
    description: "Campanhas de marketing e estratégias de vendas baseadas em dados para maximizar seus resultados."
  },
  {
    icon: <Palette className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Design gráfico e identidade visual",
    description: "Criação de identidade visual completa, incluindo logo, paleta de cores, tipografia e materiais de marketing."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-office-blue text-xs md:text-sm font-medium mb-3 md:mb-4">
            Serviços Adicionais
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Tudo o que Você Precisa em Um Só Lugar</h2>
          <p className="text-base md:text-lg text-gray-600">
            Além do escritório virtual, oferecemos serviços complementares para impulsionar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 card-hover h-full">
              <CardContent className="p-4 pt-6 md:p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-blue-50 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
