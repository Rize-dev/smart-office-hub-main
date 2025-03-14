
import React from 'react';
import { cn } from "@/lib/utils";

interface RoomCapabilityListProps {
  capabilities: string[];
  iconColor: string;
}

const RoomCapabilityList: React.FC<RoomCapabilityListProps> = ({ capabilities, iconColor }) => {
  return (
    <ul className="space-y-2">
      {capabilities.map((capability, index) => (
        <li key={index} className="flex items-start">
          <div className={cn("mt-1 mr-3 h-4 w-4 shrink-0", iconColor)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span>{capability}</span>
        </li>
      ))}
    </ul>
  );
};

export default RoomCapabilityList;
