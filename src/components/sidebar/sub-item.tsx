import React, { ReactNode, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

interface ISubItem {
  name: string;
  path: string;
  icon?: ReactNode
}

const SubMenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path, icon } = item;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
      className={`text-sm hover:bg-gray-200 dark:hover:bg-Darksidebar-slate-400 cursor-pointer p-2 my-1 rounded-lg ${isActive
          ? " dark:bg-Darksidebar-blue-100 bg-sidebar-lightBlue  text-sidebar-lightBlue2"
          : "dark:text-sidebar-offwhite"
        }`}
      onClick={onClick}
    >

      <div className="flex items-center space-x-2">

        {React.cloneElement(icon as React.ReactElement, {
          isActive: isActive,
        })}

        <p className="text-sm">{name}</p>
      </div>
    </div>
  );
};

export default SubMenuItem;
