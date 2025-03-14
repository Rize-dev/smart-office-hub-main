
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import RoomCapabilityList from './RoomCapabilityList';
import { Room } from '@/data/roomsData';

interface MobileRoomCardProps {
  room: Room;
}

const MobileRoomCard: React.FC<MobileRoomCardProps> = ({ room }) => {
  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className="grid grid-cols-1">
        <div className="h-64 md:h-72">
          <img 
            src={room.image} 
            alt={`Sala de ${room.title}`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <CardContent className="p-6">
            <div className="mb-4">
              <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full", `bg-${room.iconColor.split('-')[1]}-100`, room.iconColor)}>
                {room.icon}
                <span className="font-medium">Sala de {room.title}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{room.title}</h3>
            <p className="text-gray-600 mb-4">{room.description}</p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Funcionalidades:</h4>
              <RoomCapabilityList 
                capabilities={room.capabilities} 
                iconColor={room.iconColor} 
              />
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default MobileRoomCard;
