import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SearchSvg from '../icons/searchSvg';
import ToggleButtonSvg from '../icons/toggleButtonSvg';
import ChevronRightSvg from '../icons/chevronRightSvg';
import TickSvg from '../icons/tickSvg';

interface MenuItem {
    label: string;
    href?: string;
    shortcut?: string;
    submenu?: MenuItem[];
    border?: boolean;
    profilePic?: string;
}

interface MenuCategory {
    label: string;
    items: MenuItem[];
}

interface SidebarHeaderProps {
    userName: string;
    profilePic: string;
}

const menuData: MenuCategory[] = [
    {
        label: 'Preferences',
        items: [
            { label: 'Preferences', href: '/preferences', shortcut: 'G then S', border: true },
        ],
    },
    {
        label: 'Workspace',
        items: [
            { label: 'Workspace settings', href: '/workspace-settings' },
            { label: 'Invite and manage members', href: '/invite-members', border: true },
        ],
    },
    {
        label: 'Download Desktop App',
        items: [
            { label: 'Download desktop app', href: '/download-app', border: true },
        ],
    },
    {
        label: 'Account',
        items: [
            {
                label: 'Switch workspace', submenu: [
                    { label: 'Stepsharp', href: '/stepsharp', profilePic: '/images/w-1.png' },
                    { label: 'Talha Sultan Dev', href: '/talha-sultan-dev', profilePic: '/images/w-2.png' },
                ]
            },
            { label: 'Log out', href: '/logout' },
        ],
    }
];

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ userName, profilePic }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState<{ top: number; left: number } | null>(null);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(null);  // Track selected workspace
    const modalRef = useRef<HTMLDivElement | null>(null);
    const toggleButtonRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const closeModal = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node) &&
            toggleButtonRef.current &&
            !toggleButtonRef.current.contains(event.target as Node)
        ) {
            setIsModalOpen(false);
        }
    };

    React.useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', closeModal);
        } else {
            document.removeEventListener('mousedown', closeModal);
        }
        return () => document.removeEventListener('mousedown', closeModal);
    }, [isModalOpen]);

    const handleToggleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (toggleButtonRef.current) {
            const rect = toggleButtonRef.current.getBoundingClientRect();
            setModalPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        }
        setIsModalOpen((prev) => !prev);
    };

    const handleWorkspaceClick = (workspaceLabel: string, workspaceHref: string) => {
        setSelectedWorkspace(workspaceLabel);
        router.push(workspaceHref);
    };

    return (
        <div className="flex space-x-2 items-center w-full justify-between pb-4 text-sidebar-darkGray dark:text-sidebar-offwhite2">
            <div className="flex items-center justify-between px-2 bg-white dark:bg-Darksidebar-darkgray shadow-md rounded-lg border-sidebar-lightGray3 dark:border-transparent h-10">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Image
                            src={profilePic}
                            alt="User Profile"
                            width={24}
                            height={24}
                            className="rounded-full object-cover"
                        />
                    </div>
                    <span className="font-medium truncate max-w-[90px]">{userName}</span>
                </div>

                <div
                    ref={toggleButtonRef}
                    onClick={handleToggleClick}
                    className="cursor-pointer pl-2"
                >
                    <ToggleButtonSvg />
                </div>
                {isModalOpen && modalPosition && (
                    <motion.div
                        key={isModalOpen ? "open" : "closed"}
                        ref={modalRef}
                        className="fixed bg-white dark:bg-Darksidebar-slate-100 py-4 shadow-lg text-sm rounded-lg z-50 w-[260px]  border-sidebar-lightGray3 dark:border-Darksidebar-slate-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            top: '63px',
                            left: '16px',
                        }}
                    >
                        <div className="space-y-2">
                            <div className="px-4 flex items-center space-x-4 justify-between py-1">
                                <p className="">Dark Mode</p>
                                <label className="switch">
                                    <input
                                        onClick={handleToggle}
                                        type="checkbox"
                                        checked={isDarkMode}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            {menuData.map((category) => (
                                <div key={category.label}>
                                    {category.items.length > 0 && (
                                        <div className="space-y-2 ">
                                            {category.items.map((item) => (
                                                <div
                                                    key={item.label}
                                                    className={`relative group ${item.border ? 'border-b border-sidebar-lightGray3 dark:border-Darksidebar-slate-300' : ''} `}
                                                    onMouseEnter={() => item.submenu && setHoveredMenu(item.label)}
                                                    onMouseLeave={() => item.submenu && setHoveredMenu(null)}
                                                >
                                                    <a
                                                        href={item.href || '#'}
                                                        className={`px-2 py-2 flex items-center justify-between cursor-pointer transition mx-2 ${item.submenu && hoveredMenu === item.label ? 'bg-sidebar-offwhite dark:bg-Darksidebar-slate-400 rounded-md' : ''}`}
                                                    >
                                                        <span>{item.label}</span>
                                                        {item.shortcut && <span className="text-[10px] text-sidebar-lightGray">{item.shortcut}</span>}
                                                        {item.submenu && (
                                                            <ChevronRightSvg />
                                                        )}
                                                    </a>

                                                    {/* sebmenu of workspace switch */}
                                                    {item.submenu && hoveredMenu === item.label && (
                                                        <div className="absolute left-full top-0 bg-white dark:bg-Darksidebar-darkgray border-sidebar-lightGray3 dark:border-Darksidebar-slate-300 rounded-md shadow-lg z-40 w-[238px]">
                                                            {item.submenu.map((subItem, index) => (
                                                                <a
                                                                    key={subItem.label}
                                                                    href="#"
                                                                    onClick={() =>
                                                                        handleWorkspaceClick(subItem.label, subItem.href || '#')
                                                                    }
                                                                    className="block px-4 py-2 hover:bg-sidebar-offwhite dark:hover:bg-Darksidebar-slate-400  flex justify-between items-center space-x-3"
                                                                >
                                                                    <div className="flex space-x-3 items-center">
                                                                        {subItem.profilePic && (
                                                                            <Image
                                                                                src={subItem.profilePic}
                                                                                alt={subItem.label}
                                                                                width={24}
                                                                                height={24}
                                                                                className="rounded-full object-cover"
                                                                            />
                                                                        )}
                                                                        <span>{subItem.label}</span>
                                                                    </div>
                                                                    {selectedWorkspace === subItem.label && (
                                                                        <TickSvg />
                                                                    )}
                                                                </a>
                                                            ))}

                                                            <div className="border-sidebar-lightGray3 dark:border-Darksidebar-slate-300 border-t"></div>

                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 hover:bg-sidebar-offwhite dark:hover:bg-Darksidebar-slate-400 flex justify-between items-center space-x-3"
                                                            >
                                                                <span>Create or Join a Workspace</span>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="block px-4 pt-2 pb-3 hover:bg-sidebar-offwhite dark:hover:bg-Darksidebar-slate-400 flex justify-between items-center space-x-3"
                                                            >
                                                                <span>Add an Account</span>
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>

                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="bg-white dark:bg-Darksidebar-darkgray shadow-md flex items-center rounded-lg border-sidebar-lightGray3 dark:border-transparent p-2 h-10">
                <SearchSvg />
            </div>
        </div>
    );
};

export default SidebarHeader;
