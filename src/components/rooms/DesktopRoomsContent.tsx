
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import DesktopRoomCard from './DesktopRoomCard';
import { Room } from '@/data/roomsData';
import { Tabs } from "@/components/ui/tabs";

interface DesktopRoomsContentProps {
  rooms: Room[];
  activeTab: string;
}

const DesktopRoomsContent: React.FC<DesktopRoomsContentProps> = ({ rooms, activeTab }) => {
  return (
    <div className="lg:col-span-4 hidden lg:block">
      <Tabs value={activeTab} className="w-full">
        {rooms.map((room) => (
          <TabsContent 
            key={room.id} 
            value={room.id} 
            className="animate-fade-in mt-0"
          >
            <DesktopRoomCard room={room} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DesktopRoomsContent;
