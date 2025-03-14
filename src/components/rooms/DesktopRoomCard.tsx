
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import RoomCapabilityList from './RoomCapabilityList';
import { Room } from '@/data/roomsData';

interface DesktopRoomCardProps {
  room: Room;
}

const DesktopRoomCard: React.FC<DesktopRoomCardProps> = ({ room }) => {
  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <CardContent className="p-8">
            <div className="mb-6">
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1 rounded-full", 
                `bg-${room.iconColor.split('-')[1]}-100`, 
                room.iconColor
              )}>
                {room.icon}
                <span className="font-medium">Sala de {room.title}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{room.title}</h3>
            <p className="text-gray-600 mb-6">{room.description}</p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Funcionalidades:</h4>
              <RoomCapabilityList 
                capabilities={room.capabilities} 
                iconColor={room.iconColor} 
              />
            </div>
          </CardContent>
        </div>
        
        <div className="bg-gradient-to-br h-full">
          <img 
            src={room.image} 
            alt={`Sala de ${room.title}`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

export default DesktopRoomCard;
