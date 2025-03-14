
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    position: "CEO",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote: "Implementamos o escritório virtual há 3 meses e já vimos uma redução de 40% nos custos operacionais. A automação de tarefas repetitivas nos permitiu focar no crescimento. Superou todas as expectativas!"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    position: "Diretor de Operações",
    company: "Logística Express",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote: "A sala de logística revolucionou nosso processo de entregas. Conseguimos otimizar rotas, reduzir custos e melhorar o tempo de entrega em 35%. O ROI foi praticamente imediato."
  },
  {
    id: 3,
    name: "Patrícia Oliveira",
    position: "Diretora de Marketing",
    company: "Grupo Inovação",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    quote: "Os agentes de IA do escritório virtual transformaram nossa estratégia de marketing. Conseguimos criar e executar campanhas em tempo recorde, com resultados muito acima da média do mercado."
  },
  {
    id: 4,
    name: "Roberto Almeida",
    position: "Empreendedor",
    company: "StartUp Digital",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    quote: "Como empreendedor solo, o escritório virtual é como ter uma equipe completa sem os custos. Consigo gerenciar todos os aspectos do meu negócio com eficiência e qualidade profissional."
  },
  {
    id: 5,
    name: "Fernanda Costa",
    position: "Gerente de RH",
    company: "Consultoria Global",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    quote: "O módulo de RH automatizou nossos processos de recrutamento e seleção, reduzindo o tempo de contratação em 60% e melhorando significativamente a qualidade dos candidatos."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-radial from-blue-50 to-transparent overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-office-blue text-sm font-medium mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600">
            Confira como o escritório virtual está transformando empresas de diferentes segmentos.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-full">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <Card className="border-0 shadow-lg overflow-hidden">
                        <div className="p-8 md:p-12">
                          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                            <div className="flex-shrink-0">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-md" 
                              />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <div className="flex justify-center md:justify-start mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={cn(
                                      "h-5 w-5 mr-1", 
                                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                    )} 
                                  />
                                ))}
                              </div>
                              <blockquote className="text-xl italic text-gray-700 mb-6">
                                "{testimonial.quote}"
                              </blockquote>
                              <div>
                                <div className="font-bold text-lg">{testimonial.name}</div>
                                <div className="text-gray-600">{testimonial.position}, {testimonial.company}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-office-blue hover:bg-office-blue hover:text-white transition-colors"
              aria-label="Anterior"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    index === activeIndex 
                      ? "w-8 bg-office-blue" 
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-office-blue hover:bg-office-blue hover:text-white transition-colors"
              aria-label="Próximo"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
