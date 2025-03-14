
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTJoMXYxaC0xdi0xem0tMiAyaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-xs md:text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm">
            Promoção por Tempo Limitado
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Otimize sua empresa agora mesmo!
          </h2>
          
          <p className="text-base md:text-lg xl:text-xl text-white text-opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Transforme seu negócio com a eficiência da IA e a praticidade de um escritório virtual completo. Aproveite nossa oferta promocional e comece hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button 
              className="bg-white text-office-blue hover:bg-blue-50 transition-colors px-6 py-5 md:px-8 md:py-6 text-sm md:text-base lg:text-lg shadow-lg group btn-glow"
              onClick={() => window.open("https://wa.me/5543991900405?text=Quero%20saber%20mais%20sobre%20o%20smart%20office.", "_blank")}
            >
              Plano Starter por R$ 250
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-colors px-6 py-5 md:px-8 md:py-6 text-sm md:text-base lg:text-lg mt-3 sm:mt-0"
              onClick={() => window.open("https://wa.me/5543991900405?text=Quero%20saber%20mais%20sobre%20o%20smart%20office.", "_blank")}
            >
              Agendar Demonstração
            </Button>
          </div>
          
          <p className="mt-4 md:mt-6 text-xs md:text-sm text-white text-opacity-80">
            Promoção limitada. Preço normal: R$ 497. Economize 50%!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
