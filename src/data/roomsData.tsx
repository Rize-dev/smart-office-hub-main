
import { 
  Megaphone, 
  Paintbrush, 
  Code, 
  Headphones, 
  Users, 
  PiggyBank, 
  ShoppingCart,
  Truck,
  Lightbulb,
  BarChart
} from "lucide-react";
import { ReactNode } from "react";

export interface Room {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  capabilities: string[];
  color: string;
  iconColor: string;
  image: string;
}

// Define a separate function to create room objects to avoid JSX in a .ts file
export const createRooms = (): Room[] => [
  {
    id: "marketing",
    icon: Megaphone && <Megaphone className="h-5 w-5" />,
    title: "Marketing",
    description: "Estratégias, campanhas e automação de marketing digital otimizadas por IA.",
    capabilities: [
      "Criação de estratégias de marketing baseadas em dados",
      "Automação de campanhas em múltiplos canais",
      "Análise de performance e otimização contínua",
      "Criação de conteúdo inteligente para redes sociais"
    ],
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-500",
    image: "https://placehold.co/600x400/e2e8f0/a18cd1?text=Marketing+IA"
  },
  {
    id: "design",
    icon: Paintbrush && <Paintbrush className="h-5 w-5" />,
    title: "Design",
    description: "Criação visual e identidade de marca com assistência de inteligência artificial.",
    capabilities: [
      "Criação de identidade visual consistente",
      "Design de materiais de marketing e apresentações",
      "Mockups de produtos e embalagens",
      "Edição e otimização de imagens"
    ],
    color: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-500",
    image: "https://placehold.co/600x400/e2e8f0/ff9a9e?text=Design+IA"
  },
  {
    id: "development",
    icon: Code && <Code className="h-5 w-5" />,
    title: "Desenvolvimento",
    description: "Criação de sites, sistemas e automações com suporte de engenharia avançada.",
    capabilities: [
      "Desenvolvimento de websites e aplicativos",
      "Criação de automações personalizadas para processos",
      "Integração com APIs e sistemas externos",
      "Manutenção e otimização de performance"
    ],
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-500",
    image: "https://placehold.co/600x400/e2e8f0/0acffe?text=Desenvolvimento+IA"
  },
  {
    id: "support",
    icon: Headphones && <Headphones className="h-5 w-5" />,
    title: "Atendimento ao Cliente",
    description: "Chatbots e suporte automatizado para resolver problemas com eficiência.",
    capabilities: [
      "Chatbots inteligentes para atendimento 24/7",
      "Sistema de tickets automatizado",
      "Respostas inteligentes baseadas em histórico",
      "Análise de sentimento e satisfação do cliente"
    ],
    color: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-500",
    image: "https://placehold.co/600x400/e2e8f0/aff57a?text=Atendimento+IA"
  },
  {
    id: "hr",
    icon: Users && <Users className="h-5 w-5" />,
    title: "Recursos Humanos",
    description: "Gestão de equipes e recrutamento assistido por inteligência artificial.",
    capabilities: [
      "Recrutamento e seleção de candidatos",
      "Onboarding automatizado e treinamentos",
      "Gestão de performance e feedback",
      "Análise de clima organizacional"
    ],
    color: "from-orange-500/20 to-orange-600/5",
    iconColor: "text-orange-500",
    image: "https://placehold.co/600x400/e2e8f0/ffa67b?text=RH+IA"
  },
  {
    id: "finance",
    icon: PiggyBank && <PiggyBank className="h-5 w-5" />,
    title: "Finanças",
    description: "Controle financeiro e automação de pagamentos com segurança e precisão.",
    capabilities: [
      "Gestão de receitas e despesas",
      "Automação de cobranças e pagamentos",
      "Relatórios financeiros detalhados",
      "Previsões e análises de tendências"
    ],
    color: "from-teal-500/20 to-teal-600/5",
    iconColor: "text-teal-500",
    image: "https://placehold.co/600x400/e2e8f0/80cbc4?text=Finanças+IA"
  },
  {
    id: "sales",
    icon: ShoppingCart && <ShoppingCart className="h-5 w-5" />,
    title: "Vendas",
    description: "Automação de leads e funil de vendas para maximizar conversões.",
    capabilities: [
      "Automação de prospecção e qualificação de leads",
      "CRM inteligente com acompanhamento de pipeline",
      "Previsão de vendas baseada em IA",
      "Estratégias personalizadas para fechamento"
    ],
    color: "from-red-500/20 to-red-600/5",
    iconColor: "text-red-500",
    image: "https://placehold.co/600x400/e2e8f0/ff7170?text=Vendas+IA"
  },
  {
    id: "logistics",
    icon: Truck && <Truck className="h-5 w-5" />,
    title: "Logística",
    description: "Gestão e otimização de entregas e estoque com eficiência operacional.",
    capabilities: [
      "Otimização de rotas e entregas",
      "Gestão de estoque e inventário",
      "Automação de processos logísticos",
      "Previsão de demanda e necessidades"
    ],
    color: "from-yellow-500/20 to-yellow-600/5",
    iconColor: "text-yellow-500",
    image: "https://placehold.co/600x400/e2e8f0/ffd86f?text=Logística+IA"
  },
  {
    id: "rd",
    icon: Lightbulb && <Lightbulb className="h-5 w-5" />,
    title: "Pesquisa e Desenvolvimento",
    description: "Inovação e testes de novas soluções para crescimento contínuo.",
    capabilities: [
      "Pesquisa de mercado e tendências",
      "Desenvolvimento de produtos inovadores",
      "Testes A/B e validação de conceitos",
      "Análise de feedback e implementação de melhorias"
    ],
    color: "from-indigo-500/20 to-indigo-600/5",
    iconColor: "text-indigo-500",
    image: "https://placehold.co/600x400/e2e8f0/a5b4fc?text=P&D+IA"
  },
  {
    id: "management",
    icon: BarChart && <BarChart className="h-5 w-5" />,
    title: "Diretoria",
    description: "Controle estratégico e acompanhamento de performance com dashboard executivo.",
    capabilities: [
      "Dashboard executivo com indicadores-chave",
      "Análise de performance de todas as áreas",
      "Planejamento estratégico assistido por IA",
      "Relatórios automatizados para tomada de decisão"
    ],
    color: "from-gray-500/20 to-gray-600/5",
    iconColor: "text-gray-700",
    image: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Diretoria+IA"
  }
];

// Export the rooms array
export const rooms = createRooms();
