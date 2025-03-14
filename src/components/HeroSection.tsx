
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useRef } from "react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayVideo = () => {
    if (iframeRef.current) {
      // Create a new src with autoplay=1 parameter
      const currentSrc = iframeRef.current.src;
      const newSrc = currentSrc.includes('?') 
        ? `${currentSrc}&autoplay=1` 
        : `${currentSrc}?autoplay=1`;
      
      iframeRef.current.src = newSrc;
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left space-y-4 md:space-y-6 max-w-xl mx-auto lg:mx-0">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-office-blue text-xs md:text-sm font-medium mb-2 md:mb-4 animate-fade-in">
              Plataforma de Escritório Virtual com IA
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight animate-fade-in">
              Transforme sua Empresa com um <span className="gradient-text">Escritório Virtual Inteligente</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 animate-fade-in delay-100">
              Automação, IA e eficiência reunidas em um ambiente 3D interativo para revolucionar sua maneira de trabalhar.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 animate-fade-in delay-200">
              <Button 
                className="bg-gradient-cta hover:opacity-90 transition-opacity text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg shadow-lg group btn-glow"
                onClick={() => window.open("https://wa.me/5543991900405?text=Quero%20saber%20mais%20sobre%20o%20smart%20office.", "_blank")}
              >
                Aproveite a Promoção
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-office-blue text-office-blue hover:bg-office-blue/5 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg group"
                onClick={handlePlayVideo}
              >
                Ver Demonstração
                <Play className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            
            <div className="text-xs md:text-sm text-gray-500 animate-fade-in delay-300">
              * Promoção limitada: 50% de desconto no plano Starter.
            </div>
          </div>
          
          <div className="relative mt-6 lg:mt-0 animate-float shadow-xl md:shadow-2xl rounded-xl md:rounded-2xl overflow-hidden">
            <div className="aspect-video bg-office-blue-light/20 rounded-xl md:rounded-2xl overflow-hidden">
              <iframe 
                ref={iframeRef}
                className="w-full h-full object-cover animate-fade-in-slow"
                src="https://www.youtube.com/embed/YcbU8HL66oM"
                title="Demonstração de Escritório Virtual 3D"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-white/80 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mr-1 md:mr-2 animate-pulse"></div>
                <span className="text-xs md:text-sm font-medium">Demonstração em Tempo Real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
