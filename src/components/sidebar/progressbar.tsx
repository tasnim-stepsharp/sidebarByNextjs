import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  current: number;
  total: number;
  icon: React.ReactNode; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, current, total, icon }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="w-full mb-3 text-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="">{icon}</span>
          <span className="">{label}</span>
        </div>
        <span className="text-[10px] text-sidebar-lightGray">{`${current} of ${total}`}</span>
      </div>
      <div className="w-full h-1 bg-white rounded-full">
        <motion.div
          className="h-full bg-sidebar-lightBlue2 rounded-full"
          initial={{ width: 0 }} 
          animate={{ width: `${progressPercentage}%` }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
        />
      </div>
    </div>
  );
};

export default ProgressBar;
