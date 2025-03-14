
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart, FileText, MessageSquare, Timer } from "lucide-react";

interface FlowStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface UseCase {
  id: string;
  title: string;
  description: string;
  steps: FlowStep[];
  benefits: string[];
}

const useCases: UseCase[] = [
  {
    id: "marketing",
    title: "Automação de Marketing",
    description: "Como criar e gerenciar campanhas de marketing automatizadas utilizando IA",
    steps: [
      {
        title: "Defina sua estratégia",
        description: "Use a sala de Marketing para definir objetivos e público-alvo com recomendações da IA.",
        icon: <BarChart className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Crie seu conteúdo",
        description: "O assistente de IA gera textos, imagens e designs para todos os canais.",
        icon: <FileText className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Automatize o envio",
        description: "Configure a distribuição automática do conteúdo nos horários ideais.",
        icon: <Timer className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Analise resultados",
        description: "Acompanhe métricas e receba sugestões de otimização da IA.",
        icon: <BarChart className="h-8 w-8 text-office-blue" />
      }
    ],
    benefits: [
      "Economia de 30h semanais em criação de conteúdo",
      "Aumento médio de 45% nas taxas de engajamento",
      "Redução de 70% nos custos com equipe de marketing"
    ]
  },
  {
    id: "support",
    title: "Atendimento ao Cliente",
    description: "Como implementar um sistema de suporte 24/7 com chatbots inteligentes",
    steps: [
      {
        title: "Configure seu chatbot",
        description: "Use a sala de Atendimento para personalizar o chatbot com o tom da sua marca.",
        icon: <MessageSquare className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Integre suas bases",
        description: "Conecte o chatbot com suas bases de conhecimento e sistemas internos.",
        icon: <FileText className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Automatize respostas",
        description: "Configure fluxos automatizados para perguntas frequentes e processos comuns.",
        icon: <Timer className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Monitore a satisfação",
        description: "Acompanhe métricas de satisfação e receba insights para melhoria contínua.",
        icon: <BarChart className="h-8 w-8 text-office-blue" />
      }
    ],
    benefits: [
      "Disponibilidade 24/7 sem custos adicionais",
      "Resolução de 85% das dúvidas sem intervenção humana",
      "Aumento de 60% na satisfação dos clientes"
    ]
  },
  {
    id: "finance",
    title: "Gestão Financeira",
    description: "Como automatizar processos financeiros e obter insights em tempo real",
    steps: [
      {
        title: "Integre suas contas",
        description: "Conecte contas bancárias e sistemas financeiros na sala de Finanças.",
        icon: <FileText className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Configure automações",
        description: "Automatize lançamentos, conciliações e geração de relatórios.",
        icon: <Timer className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Monitore em tempo real",
        description: "Acompanhe indicadores financeiros e receba alertas inteligentes.",
        icon: <BarChart className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Obtenha insights",
        description: "Receba recomendações da IA para otimização de custos e investimentos.",
        icon: <MessageSquare className="h-8 w-8 text-office-blue" />
      }
    ],
    benefits: [
      "Redução de 90% no tempo de processamento financeiro",
      "Eliminação de 95% dos erros em lançamentos manuais",
      "Economia média de 25% em custos operacionais"
    ]
  },
  {
    id: "sales",
    title: "Automação de Vendas",
    description: "Como implementar um funil de vendas automatizado que converte mais",
    steps: [
      {
        title: "Configure seu funil",
        description: "Defina etapas do funil e critérios de qualificação na sala de Vendas.",
        icon: <BarChart className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Automatize follow-ups",
        description: "Configure sequências de e-mails e mensagens personalizadas.",
        icon: <MessageSquare className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Priorize leads",
        description: "A IA classifica automaticamente os leads por potencial de conversão.",
        icon: <FileText className="h-8 w-8 text-office-blue" />
      },
      {
        title: "Otimize abordagens",
        description: "Receba insights sobre as melhores estratégias para cada perfil de cliente.",
        icon: <BarChart className="h-8 w-8 text-office-blue" />
      }
    ],
    benefits: [
      "Aumento médio de 55% na taxa de conversão",
      "Redução de 80% no tempo de ciclo de vendas",
      "Capacidade de gerenciar 3x mais leads com o mesmo time"
    ]
  }
];

const UseCasesSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState("marketing");
  const [currentStep, setCurrentStep] = useState(0);
  
  const selectedCase = useCases.find(uc => uc.id === activeCase) || useCases[0];
  
  const handleNextStep = () => {
    if (currentStep < selectedCase.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-office-blue text-xs md:text-sm font-medium mb-3 md:mb-4">
            Exemplos Práticos
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Como Utilizar o Escritório Virtual</h2>
          <p className="text-base md:text-lg text-gray-600">
            Veja exemplos reais de como empresas estão economizando tempo e dinheiro com nossa plataforma.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <Tabs value={activeCase} onValueChange={setActiveCase} className="w-full">
            <div className="border-b">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-transparent h-auto p-0">
                {useCases.map((useCase) => (
                  <TabsTrigger 
                    key={useCase.id}
                    value={useCase.id} 
                    className="py-3 md:py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-office-blue data-[state=active]:shadow-none"
                    onClick={() => setCurrentStep(0)}
                  >
                    {useCase.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-0 p-0">
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Como funciona:</h4>
                        <div className="relative">
                          <div className="flex overflow-x-auto pb-4 hide-scrollbar">
                            <div className="flex space-x-2">
                              {useCase.steps.map((step, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentStep(index)}
                                  className={`px-3 py-1.5 rounded-full whitespace-nowrap text-sm ${
                                    currentStep === index
                                      ? "bg-office-blue text-white"
                                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                  }`}
                                >
                                  Etapa {index + 1}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Card className="mb-6 border-0 shadow-md">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-blue-50">
                              {useCase.steps[currentStep].icon}
                            </div>
                            <div>
                              <h5 className="font-semibold text-lg">
                                Etapa {currentStep + 1}: {useCase.steps[currentStep].title}
                              </h5>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-6">{useCase.steps[currentStep].description}</p>
                          <Button 
                            onClick={handleNextStep}
                            className="bg-office-blue hover:bg-office-blue/90"
                          >
                            {currentStep < useCase.steps.length - 1 ? "Próxima Etapa" : "Recomeçar"}
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Benefícios:</h4>
                      <Card className="border-0 shadow-md">
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {useCase.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="rounded-full bg-green-500 p-1 mt-1">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
