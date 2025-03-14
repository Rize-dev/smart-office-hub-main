
import { Lightbulb, Clock, DollarSign, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Automação Inteligente",
    description: "Delegue tarefas repetitivas para agentes de IA especializados e focados em aumentar a produtividade da sua equipe.",
    color: "from-blue-500/20 to-blue-600/5"
  },
  {
    icon: <Clock className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Ambiente 3D Interativo",
    description: "Trabalhe como se estivesse em um escritório real, com interações naturais entre colaboradores e agentes virtuais.",
    color: "from-indigo-500/20 to-indigo-600/5"
  },
  {
    icon: <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Redução de Custos",
    description: "Otimize operações sem precisar de equipe extensa, reduzindo custos com infraestrutura e pessoal em até 70%.",
    color: "from-green-500/20 to-green-600/5"
  },
  {
    icon: <Settings className="h-8 w-8 md:h-10 md:w-10 text-office-blue" />,
    title: "Personalização Completa",
    description: "Adaptável para qualquer nicho de mercado, com configurações específicas para seu setor de atuação.",
    color: "from-purple-500/20 to-purple-600/5"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div className={`animate-fade-in delay-${index * 100}`}>
      <Card className="overflow-hidden border border-gray-100 h-full card-hover">
        <div className={cn(`bg-gradient-to-br ${feature.color} p-4 md:p-6 flex justify-center`)}>
          <div className="rounded-full bg-white/90 p-3 md:p-4 shadow-md">
            {feature.icon}
          </div>
        </div>
        <CardContent className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 md:py-20 bg-gradient-radial from-blue-50 to-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-office-blue text-xs md:text-sm font-medium mb-3 md:mb-4">
            Funcionalidades Principais
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Benefícios que Transformam seu Negócio</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Nossa plataforma combina tecnologias de ponta para oferecer a melhor experiência de escritório virtual do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
