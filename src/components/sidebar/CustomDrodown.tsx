"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion'; 
import { ArrowLeft } from "lucide-react";


interface SubLink {
  label: string;
  path: string;
}

interface Item {
  label: string;
  icon: string;
  sublinks?: SubLink[];
}

interface CustomDropdownProps {
  label: string;
  dropdownIcon: string;
  workspaceIcon: string;
  items: Item[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, dropdownIcon, workspaceIcon, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null); 
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleSublinkClick = (path: string) => {
    router.push(path);
    setOpenSubmenu(null); // Close the submenu when a sublink is clicked
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2 cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center justify-start">
          <span className="ml-3">{label}</span>
          <span className={`ml-3 transform transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
            <Image src={dropdownIcon} alt="dropdown_arrow" width={7} height={6} />
          </span>
        </div>
      </h3>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[180px]' : 'max-h-0'}`} style={{ transitionProperty: 'max-height' }}>
        {items.map((item, index) => (
          <div key={index}>
            <div
              className="cursor-pointer flex items-center p-2 rounded-md h-[27px] transition-all duration-300 pl-[18px] bg-gray-mw-500 mb-0"
              onClick={() => item.sublinks ? toggleSubmenu(index) : null}
            >
              <Image src={item.icon} alt={item.label} width={16} height={16} />
              <span className="ml-3">{item.label}</span>
            </div>

            {item.sublinks && openSubmenu === index && (
              <AnimatePresence>
                <motion.div
                  className="absolute inset-0 dark:bg-slate-700 bg-neutral-100 z-30"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <div
                    className="cursor-pointer text-blue-600 flex items-center space-x-2 pb-4"
                    onClick={() => setOpenSubmenu(null)} 
                  >
                    <ArrowLeft size={15} />
                    <span className="font-semibold">{item.label}</span>
                  </div>

                  {item.sublinks.map((subItem) => (
                    <div
                      key={subItem.path}
                      className="cursor-pointer py-2 px-3 hover:bg-gray-200 rounded-md"
                      onClick={() => handleSublinkClick(subItem.path)}
                    >
                      <span className="ml-3">{subItem.label}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
