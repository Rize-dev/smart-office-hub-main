
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DollarSign, Calculator, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonItem {
  name: string;
  traditionalCost: number;
  smartOfficeCost: number;
  savings: number;
  savingsPercentage: number;
}

const monthlyData: ComparisonItem[] = [
  { 
    name: "Equipe Humana", 
    traditionalCost: 15000, 
    smartOfficeCost: 5000, 
    savings: 10000,
    savingsPercentage: 67
  },
  { 
    name: "Infraestrutura", 
    traditionalCost: 7000, 
    smartOfficeCost: 2000, 
    savings: 5000,
    savingsPercentage: 71
  },
  { 
    name: "Software", 
    traditionalCost: 5000, 
    smartOfficeCost: 1500, 
    savings: 3500,
    savingsPercentage: 70
  },
  { 
    name: "Marketing", 
    traditionalCost: 8000, 
    smartOfficeCost: 3000, 
    savings: 5000,
    savingsPercentage: 63
  }
];

const yearlyData: ComparisonItem[] = monthlyData.map(item => ({
  ...item,
  traditionalCost: item.traditionalCost * 12,
  smartOfficeCost: item.smartOfficeCost * 12,
  savings: item.savings * 12,
  savingsPercentage: item.savingsPercentage
}));

const CostComparisonSection = () => {
  const [timeframe, setTimeframe] = useState<"monthly" | "yearly">("monthly");
  
  const data = timeframe === "monthly" ? monthlyData : yearlyData;
  
  const totalTraditional = data.reduce((sum, item) => sum + item.traditionalCost, 0);
  const totalSmartOffice = data.reduce((sum, item) => sum + item.smartOfficeCost, 0);
  const totalSavings = totalTraditional - totalSmartOffice;
  const totalSavingsPercentage = Math.round((totalSavings / totalTraditional) * 100);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const chartData = data.map(item => ({
    name: item.name,
    "Plataformas Tradicionais": item.traditionalCost,
    "SmartOffice": item.smartOfficeCost,
  }));

  return (
    <section id="cost-comparison" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Economia Comprovada
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare e Economize com SmartOffice</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Veja quanto sua empresa pode economizar substituindo múltiplos serviços e plataformas pela nossa solução integrada.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs defaultValue="monthly" className="w-full max-w-2xl" onValueChange={(value) => setTimeframe(value as "monthly" | "yearly")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Economia Mensal</TabsTrigger>
              <TabsTrigger value="yearly">Economia Anual</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="pt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                      <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-6 text-center">
                        <DollarSign className="w-10 h-10 mx-auto mb-2 text-green-600 dark:text-green-400" />
                        <h3 className="text-lg font-medium mb-1">Economia Total</h3>
                        <p className="text-3xl font-bold text-green-600 dark:text-green-400">{formatCurrency(totalSavings)}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">por mês</p>
                      </div>
                      <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-6 text-center">
                        <TrendingDown className="w-10 h-10 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-medium mb-1">Redução de Custos</h3>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalSavingsPercentage}%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">em média</p>
                      </div>
                      <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-6 text-center">
                        <Calculator className="w-10 h-10 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-lg font-medium mb-1">ROI Estimado</h3>
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3.5x</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">investimento</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="yearly" className="pt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                      <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-6 text-center">
                        <DollarSign className="w-10 h-10 mx-auto mb-2 text-green-600 dark:text-green-400" />
                        <h3 className="text-lg font-medium mb-1">Economia Total</h3>
                        <p className="text-3xl font-bold text-green-600 dark:text-green-400">{formatCurrency(totalSavings)}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">por ano</p>
                      </div>
                      <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-6 text-center">
                        <TrendingDown className="w-10 h-10 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-medium mb-1">Redução de Custos</h3>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalSavingsPercentage}%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">em média</p>
                      </div>
                      <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-6 text-center">
                        <Calculator className="w-10 h-10 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-lg font-medium mb-1">ROI Estimado</h3>
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">4.2x</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">investimento</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Comparativo de Gastos</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis 
                  tickFormatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                />
                <Tooltip 
                  formatter={(value: any) => [`R$ ${value.toLocaleString('pt-BR')}`, undefined]}
                  labelFormatter={(label) => `Categoria: ${label}`}
                />
                <Legend />
                <Bar dataKey="Plataformas Tradicionais" fill="#ef4444" />
                <Bar dataKey="SmartOffice" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {data.map((item, index) => (
            <Card key={index} className={cn(
              "overflow-hidden border",
              "hover:shadow-md transition-shadow duration-300"
            )}>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Custo Tradicional:</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">{formatCurrency(item.traditionalCost)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Custo SmartOffice:</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">{formatCurrency(item.smartOfficeCost)}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Sua Economia:</p>
                    <div className="flex justify-between items-center">
                      <p className="text-green-600 dark:text-green-400 font-bold">{formatCurrency(item.savings)}</p>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                        {item.savingsPercentage}% menos
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostComparisonSection;
