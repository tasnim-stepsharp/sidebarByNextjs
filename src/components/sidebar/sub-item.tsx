import React, { useMemo } from "react";
import { LucideIcon } from "lucide-react"; 
import { usePathname, useRouter } from "next/navigation";

interface ISubItem {
  name: string;
  path: string;
  icon?: LucideIcon; 
}

const SubMenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path, icon: Icon } = item;  
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
      className={`text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 cursor-pointer p-2 my-1 rounded-lg font-medium${
        isActive ? " bg-blue-100 dark:bg-gray-600  text-blue-600 dark:text-gray-200" : " text-neutral-600 dark:text-gray-200"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {Icon && <Icon size={16} className="" />}
        <span>{name}</span>
      </div>
    </div>
  );
};

export default SubMenuItem;
