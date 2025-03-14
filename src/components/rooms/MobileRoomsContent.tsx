
import React from 'react';
import { TabsContent, Tabs } from "@/components/ui/tabs";
import MobileRoomCard from './MobileRoomCard';
import { Room } from '@/data/roomsData';

interface MobileRoomsContentProps {
  rooms: Room[];
  activeTab: string;
}

const MobileRoomsContent: React.FC<MobileRoomsContentProps> = ({ rooms, activeTab }) => {
  return (
    <div className="block lg:hidden">
      <Tabs value={activeTab} className="w-full">
        {rooms.map((room) => (
          <TabsContent 
            key={room.id} 
            value={room.id} 
            className="mt-4 animate-fade-in"
          >
            <MobileRoomCard room={room} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MobileRoomsContent;
