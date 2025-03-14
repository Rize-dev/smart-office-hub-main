
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface PlanFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  agentsCount: number;
  btnText: string;
  promoLabel?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "R$ 250",
    originalPrice: "R$ 497",
    description: "Ideal para empreendedores individuais e startups.",
    agentsCount: 3,
    btnText: "Garanta Essa Oferta",
    promoLabel: "Promoção por tempo limitado!",
    features: [
      { text: "3 Agentes de IA", included: true, tooltip: "Marketing, Atendimento e Vendas" },
      { text: "Acesso a 3 salas virtuais", included: true },
      { text: "1 usuário humano", included: true },
      { text: "50 automatizações/mês", included: true },
      { text: "Chatbot básico", included: true },
      { text: "Site institucional básico", included: true },
      { text: "Suporte por email", included: true },
      { text: "Personalização limitada", included: false },
      { text: "Integrações avançadas", included: false },
      { text: "Relatórios avançados", included: false },
    ]
  },
  {
    name: "Professional",
    price: "R$ 997",
    description: "Perfeito para pequenas e médias empresas em crescimento.",
    agentsCount: 7,
    highlighted: true,
    btnText: "Escolher Plano",
    features: [
      { text: "7 Agentes de IA", included: true, tooltip: "Marketing, Atendimento, Vendas, Finanças, Design, Desenvolvimento e RH" },
      { text: "Acesso a 7 salas virtuais", included: true },
      { text: "5 usuários humanos", included: true },
      { text: "200 automatizações/mês", included: true },
      { text: "Chatbot avançado", included: true },
      { text: "Site completo personalizado", included: true },
      { text: "Suporte prioritário", included: true },
      { text: "Personalização básica", included: true },
      { text: "Integrações avançadas", included: true },
      { text: "Relatórios avançados", included: false },
    ]
  },
  {
    name: "Enterprise",
    price: "R$ 1.997",
    description: "Para empresas estabelecidas que buscam automação completa.",
    agentsCount: 10,
    btnText: "Fale Conosco",
    features: [
      { text: "10 Agentes de IA", included: true, tooltip: "Todos os agentes disponíveis" },
      { text: "Acesso a todas as salas", included: true },
      { text: "Usuários ilimitados", included: true },
      { text: "Automatizações ilimitadas", included: true },
      { text: "Chatbot personalizado", included: true },
      { text: "E-commerce + site completo", included: true },
      { text: "Suporte VIP 24/7", included: true },
      { text: "Personalização completa", included: true },
      { text: "Integrações ilimitadas", included: true },
      { text: "Análise de dados avançada", included: true },
    ]
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/5543991900405?text=Quero%20saber%20mais%20sobre%20o%20smart%20office.", "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-office">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-office-blue text-sm font-medium mb-4">
            Planos e Preços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o Plano Ideal para seu Negócio</h2>
          <p className="text-xl text-gray-600">
            Planos flexíveis que crescem com sua empresa, com preços acessíveis e funcionalidades que geram resultados.
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                billingCycle === "monthly" 
                  ? "bg-white text-office-blue shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center",
                billingCycle === "annual" 
                  ? "bg-white text-office-blue shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              Anual
              <span className="ml-1 text-xs py-0.5 px-1.5 bg-green-100 text-green-700 rounded-full">-20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TooltipProvider>
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={cn(
                  "border relative card-hover overflow-hidden",
                  plan.highlighted 
                    ? "ring-2 ring-office-blue shadow-xl" 
                    : "shadow-md"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-office-blue text-white text-center text-sm py-1">
                    Mais Popular
                  </div>
                )}
                {plan.promoLabel && (
                  <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center text-sm py-1">
                    {plan.promoLabel}
                  </div>
                )}
                
                <CardHeader className={cn(
                  "p-6",
                  (plan.highlighted || plan.promoLabel) ? "pt-9" : "pt-6"
                )}>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-extrabold">
                        {billingCycle === "annual" 
                          ? `R$ ${Math.floor(parseInt(plan.price.replace("R$ ", "")) * 0.8)}`
                          : plan.price
                        }
                      </span>
                      <span className="ml-1 text-gray-500">/mês</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-red-600 font-medium">
                        <span className="line-through">{plan.originalPrice}</span>
                        <span className="ml-2">Economize 50%!</span>
                      </div>
                    )}
                    {billingCycle === "annual" && (
                      <div className="text-sm text-green-600 font-medium">
                        Economize 20% no plano anual
                      </div>
                    )}
                    <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="col-span-2 bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-600">Agentes de IA</div>
                      <div className="text-xl font-bold text-office-blue">{plan.agentsCount}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className={cn(
                          "mt-0.5 mr-3 h-5 w-5 flex-shrink-0",
                          feature.included ? "text-office-blue" : "text-gray-300"
                        )}>
                          <Check className="h-5 w-5" />
                        </div>
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                          {feature.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="ml-1 text-gray-400 hover:text-gray-600">
                                  <HelpCircle className="h-3.5 w-3.5" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs max-w-xs">{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className={cn(
                      "w-full",
                      plan.highlighted || plan.promoLabel
                        ? "bg-gradient-cta hover:opacity-90 transition-opacity shadow-md btn-glow" 
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    )}
                    onClick={handleWhatsAppRedirect}
                  >
                    {plan.btnText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TooltipProvider>
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p>
            Todos os planos incluem: Suporte técnico, atualizações gratuitas e garantia de satisfação.
          </p>
          <p className="mt-2">
            Precisa de um plano personalizado? <a href="#contact" className="text-office-blue hover:underline">Entre em contato</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
