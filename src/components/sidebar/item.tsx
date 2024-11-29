import { ChevronDown, LucideIcon } from "lucide-react";
import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

interface SidebarItemProps {
  item: ISidebarItem;
  onClick: (item: ISidebarItem) => void;
  isActive: boolean;
}

const SidebarItem = ({ item, onClick, isActive }: SidebarItemProps) => {
  const { name, icon: Icon, items, path } = item;
  const router = useRouter();
  const pathname = usePathname();

  const isItemActive = useMemo(() => {
    if (items && items.length > 0) {
      return items.some((subItem) => subItem.path === pathname);
    }
    return path === pathname;
  }, [items, path, pathname]);

  const handleClick = () => {
    if (items && items.length > 0) {
      onClick(item);
      router.push(path);
    } else {
      router.push(path);
    }
  };

  return (
    <div
      className={`flex my-1 items-center p-2 sidebar-item rounded-lg text-sm hover:bg-gray-200 cursor-pointer duration-200 justify-between
      ${isActive || isItemActive ? "bg-blue-100 text-blue-600" : "text-neutral-600"}`} 
      onClick={handleClick}
    >
      <div className="flex items-center space-x-2">
        <Icon size={20} className="sidebar-icon" />
        <p className="text-sm font-medium">{name}</p>
      </div>
  
    </div>
  );
};

export default SidebarItem;
