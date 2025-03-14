
import React from 'react';
import { cn } from "@/lib/utils";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Room } from '@/data/roomsData';

interface RoomNavigationProps {
  rooms: Room[];
  activeTab: string;
}

const RoomNavigation: React.FC<RoomNavigationProps> = ({ rooms, activeTab }) => {
  return (
    <TabsList className="flex lg:flex-col h-auto w-full bg-gray-100/80 p-1 rounded-lg overflow-auto scrollbar-hide mb-4 lg:mb-0">
      {rooms.map((room) => (
        <TabsTrigger 
          key={room.id} 
          value={room.id}
          className={cn(
            "flex items-center gap-2 whitespace-nowrap py-3 px-4 w-full justify-start",
            activeTab === room.id ? `${room.iconColor} border-l-0 lg:border-l-4 border-current` : ""
          )}
        >
          <span className={cn("h-4 w-4 shrink-0", room.iconColor)}>{room.icon}</span>
          <span className="truncate">{room.title}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default RoomNavigation;
