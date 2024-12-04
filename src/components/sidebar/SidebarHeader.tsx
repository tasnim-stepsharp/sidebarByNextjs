import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        // Set selected workspace
        setSelectedWorkspace(workspaceLabel);
        // Navigate to the workspace URL
        router.push(workspaceHref);
    };

    return (
        <div className="flex space-x-2 items-center w-full justify-between pb-4 text-sidebar-darkGray dark:text-sidebar-offwhite2">
            <div className="flex items-center justify-between p-2 bg-white shadow-md rounded-lg border h-10">
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
                    <span className="text-gray-800 font-medium truncate max-w-[90px]">{userName}</span>
                </div>

                {/* Toggle Button */}
                <div
                    ref={toggleButtonRef}
                    onClick={handleToggleClick}
                    className="cursor-pointer pl-2"
                >
                    <Image
                        src="/images/toggleBtn.svg"
                        alt="Toggle Menu"
                        width={20}
                        height={20}
                        className="rounded-full object-cover"
                    />
                </div>
                {isModalOpen && modalPosition && (
                    <motion.div
                        key={isModalOpen ? "open" : "closed"} // Force re-render
                        ref={modalRef}
                        className="fixed bg-white py-4 shadow-lg text-sm rounded-lg z-30 w-[260px] border dark:bg-gray-800 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            top: '60px',
                            left: '16px',
                        }}
                    >
                        {/* Dynamic Menu Items */}
                        <div className="space-y-2">
                            <div className="px-4 flex items-center space-x-4 justify-between py-1">
                                <p className="">Dark Mode</p>
                                <label className="switch">
                                    <input onClick={handleToggle} type="checkbox" />
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
                                                    className={`relative group ${item.border ? 'border-b' : ''} `}
                                                    onMouseEnter={() => item.submenu && setHoveredMenu(item.label)}
                                                    onMouseLeave={() => item.submenu && setHoveredMenu(null)}
                                                >
                                                    <a
                                                        href={item.href || '#'}
                                                        className={`px-2 py-2 flex items-center justify-between cursor-pointer transition mx-2 ${item.submenu && hoveredMenu === item.label ? 'bg-sidebar-offwhite rounded-md' : ''}`}
                                                    >
                                                        <span>{item.label}</span>
                                                        {item.shortcut && <span className="text-gray-400">{item.shortcut}</span>}
                                                        {item.submenu && (
                                                            <Image
                                                                src="/images/chevron-right.svg"
                                                                alt="right arrow"
                                                                width={6}
                                                                height={5}
                                                                className="rounded-full object-cover"
                                                            />
                                                        )}
                                                    </a>

                                                    {/* Submenu */}
                                                    {item.submenu && hoveredMenu === item.label && (
                                                        <div className="absolute left-full top-0 bg-white dark:bg-gray-700 border rounded-md shadow-lg z-40 w-[238px]">
                                                            {/* Workspace Items */}
                                                            {item.submenu.map((subItem, index) => (
                                                                <a
                                                                    key={subItem.label}
                                                                    href="#"
                                                                    onClick={() =>
                                                                        handleWorkspaceClick(subItem.label, subItem.href || '#')
                                                                    }
                                                                    className="block px-4 py-2 text-gray-700 hover:bg-sidebar-offwhite dark:text-gray-200 dark:hover:bg-gray-600 flex justify-between items-center space-x-3"
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
                                                                        <Image
                                                                            src="/images/tick.svg"
                                                                            alt={subItem.label}
                                                                            width={18}
                                                                            height={18}
                                                                            className="rounded-full object-cover"
                                                                        />
                                                                    )}
                                                                </a>
                                                            ))}

                                                            {/* Border after workspaces */}
                                                            <div className="border-t my-2"></div>

                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-sidebar-offwhite dark:text-gray-200 dark:hover:bg-gray-600 flex justify-between items-center space-x-3"
                                                            >
                                                                <span>Create or Join a Workspace</span>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-sidebar-offwhite dark:text-gray-200 dark:hover:bg-gray-600 flex justify-between items-center space-x-3"
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
            <div className="bg-white shadow-md flex items-center rounded-lg border p-2 h-10">
                <Image
                    className=""
                    src="/images/search.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
};

export default SidebarHeader;
