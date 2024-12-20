import { ChevronDown, LucideIcon } from "lucide-react";
import { ReactNode, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface MainItem {
  name: string;
  path: string;
  icon: ReactNode;
  items?: SubItem[];
}

interface SubItem {
  name: string;
  path: string;
}

interface SidebarItemProps {
  mainItem: MainItem;
  onClick: (item: MainItem) => void;
  isActive: boolean;
}

const SidebarItem = ({ mainItem, onClick, isActive }: SidebarItemProps) => {
  const { name, icon, items, path } = mainItem;
  const router = useRouter();
  const pathname = usePathname();

  const isItemActive = useMemo(() => {
    if (items && items.length > 0) {
      return items.some((mainItem) => mainItem.path === pathname);
    }
    return path === pathname;
  }, [items, path, pathname]);

  const handleClick = () => {
    if (items && items.length > 0) {
      onClick(mainItem);
      router.push(path);
    } else {
      router.push(path);
    }
  };

  return (
    <div
      className={`flex my-1 items-center p-2 sidebar-item rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-Darksidebar-slate-400  cursor-pointer duration-200 justify-between
      ${isActive || isItemActive ? "dark:bg-Darksidebar-blue-100 bg-sidebar-lightBlue  text-sidebar-lightBlue2" : "text-sidebar-darkGray dark:text-sidebar-offwhite"}`}
      onClick={handleClick}>
      <div className="flex items-center space-x-2">

        {React.cloneElement(icon as React.ReactElement, {
          isActive: isItemActive,
        })}

        <p className="text-sm">{name}</p>
      </div>
    </div>
  );
};

export default SidebarItem

