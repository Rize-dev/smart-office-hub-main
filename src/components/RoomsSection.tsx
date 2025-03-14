
import { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import { rooms } from "@/data/roomsData";
import RoomNavigation from "./rooms/RoomNavigation";
import MobileRoomsContent from "./rooms/MobileRoomsContent";
import DesktopRoomsContent from "./rooms/DesktopRoomsContent";

const RoomsSection = () => {
  const [activeTab, setActiveTab] = useState("marketing");

  return (
    <section id="rooms" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-office-blue text-sm font-medium mb-4">
            Salas Interativas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Estrutura Completa</h2>
          <p className="text-xl text-gray-600">
            A plataforma conta com 10 salas interativas, cada uma com um agente de IA especializado para suporte e automação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <Tabs 
                defaultValue="marketing" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <RoomNavigation 
                  rooms={rooms} 
                  activeTab={activeTab} 
                />
              </Tabs>
            </div>
          </div>

          <MobileRoomsContent rooms={rooms} activeTab={activeTab} />
          <DesktopRoomsContent rooms={rooms} activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
