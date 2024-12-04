"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SidebarItem from "./item";
import SubMenuItem from "./sub-item";
import HelpModal from "./helpmodal";
import { useTheme } from "@/components/ThemeProvider";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  CircleHelp,
  X,
  WalletCards,
  ArrowLeft,
  Menu,
  BellRing,
  LockKeyhole,
  Globe,
  Mail,
  LifeBuoy,
  Linkedin,
  Facebook,
  Github,
  Twitter,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";

interface MainItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: SubItem[];
}

interface SubItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface MainNav {
  dropdown: boolean;
  mainItem?: MainItem[];
}

const sectionOne: MainItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Transaction",
    path: "/transaction",
    icon: BadgeDollarSign,
  },
];

const sectionTwo: MainItem[] = [
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/settings",
        icon: Globe,
      },
      {
        name: "Security",
        path: "/settings/security",
        icon: LockKeyhole,
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
        icon: BellRing,
      },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/projects",
        icon: Globe,
      },
      {
        name: "Security",
        path: "/projects/security",
        icon: LockKeyhole,
      },
      {
        name: "Notifications",
        path: "/projects/notifications",
        icon: BellRing,
      },
    ],
  },
];

const mainNav: MainNav[] = [
  {
    dropdown: false,
    mainItem: sectionOne,
  },
  {
    dropdown: true,
    mainItem: sectionTwo,
  }
]


const Sidebar = () => {
  const pathname = usePathname();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<MainItem | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showHelpIcon, setShowHelpIcon] = useState(true);
  const helpIconRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const toggleSubmenu = (item: MainItem) => {
    setActiveItem(item);
    setSubmenuOpen(!submenuOpen);
  };

  useEffect(() => {
    const result = findMatchingPath(sectionOne, pathname);

    if (!result || !result?.items || result?.items?.length <= 0) {
      setActiveItem(null);
      setSubmenuOpen(false);
      return;
    }

    setActiveItem(result);
    setSubmenuOpen(true);
  }, [pathname]);

  useEffect(() => {
    if (modalOpen && helpIconRef.current) {
      const rect = helpIconRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [modalOpen]);

  function findMatchingPath(items: any, pathName: any) {
    for (const item of items) {
      if (item.path !== "/" && pathName.includes(item.path)) {
        return item;
      }
      if (item.items) {
        const found: any = findMatchingPath(item.items, pathName);
        if (found) {
          return found;
        }
      }
    }

    return null;
  }

  const [collapsedItems, setCollapsedItems] = useState<Record<number, boolean>>({});


  const toggleCollapse = (index: number) => {
    setCollapsedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const variants = {
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hiddenRight: { x: "100%", opacity: 0 },
  };

  // content for help modal
  const helpQuestions = [
    { question: "What do we do?", answer: "We provide awesome services!" },
    { question: "What are we?", answer: "We are a tech company." },
    {
      question: "How to create a short link?",
      answer: "Use our link shortening service by visiting a tech company...",
    },
    // add more questions as needed
  ];
  const filteredQuestions = helpQuestions.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );



  const [showSocialModal, setShowSocialModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleModalToggle = () => {
    setShowSocialModal(!showSocialModal);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowSocialModal(false);
    }
  };

  useEffect(() => {
    if (showSocialModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showSocialModal]);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      {/*hamburger button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-10 md:hidden dark:text-gray-200 text-gray-700 p-2 rounded-full"
      >
        <Menu />
      </button>
      <div
        className={`fixed text-sm top-0 left-0 h-screen w-64 trans shadow-lg z-20 p-4 relative overflow-hidden bg-neutral-100 dark:bg-slate-700 dark:text-white
        ${!sidebarOpen ? "sidebar" : ""}
       `}
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between space-x-3 mb-4">
            <Image
              className=""
              src="/logo.svg"
              alt="Logo"
              width={46}
              height={30}
            />
            <div className="flex items-center space-x-3">
              {showHelpIcon && (
                <button
                  ref={helpIconRef}
                  onClick={() => setModalOpen(!modalOpen)}
                  className="dark:text-gray-200 text-gray-600 hover:text-blue-600 md:block hidden"
                >
                  {modalOpen ? <X size={15} /> : <CircleHelp size={15} />}
                </button>
              )}
              <button
                onClick={toggleTheme}
                className="text-gray-600 hover:text-blue-600 dark:text-white"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

          </div>

          <div className="flex flex-col relative">
            {/* main menu items */}
            <AnimatePresence>
              {!submenuOpen && (
                <motion.div
                  className="flex flex-col"
                  initial="hiddenLeft"
                  animate="visible"
                  exit="hiddenLeft"
                  variants={variants}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-4">
                    {mainNav.map((mainItem, index) => (
                      <div key={index} className="dropdown-container">
                        {mainItem.dropdown && (
                          <div className="border-b">
                            <button
                              onClick={() => toggleCollapse(index)}
                              className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                              {collapsedItems[index] ? 'Expand' : 'Collapse'} Dropdown
                            </button>

                            <motion.div
                              className="dropdown-items mt-2"
                              initial={{ opacity: 0, height: 0, y: -20, display: 'none' }}
                              animate={{
                                opacity: collapsedItems[index] ? 0 : 1,
                                height: collapsedItems[index] ? 0 : 'auto',
                                y: collapsedItems[index] ? -20 : 0,
                                display: collapsedItems[index] ? 'none' : 'block',
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                                y: -20,
                                display: 'none',
                              }}
                              transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                              }}
                            >
                              {mainItem.mainItem?.map((item, subIndex) => (
                                <SidebarItem
                                  key={subIndex}
                                  item={item}
                                  onClick={() => toggleSubmenu(item)}
                                  isActive={!!(
                                    item === activeItem ||
                                    (item.items && item.items.some((sub) => sub.path === pathname))
                                  )}
                                />
                              ))}
                            </motion.div>
                          </div>
                        )}


                        {/* For main items that don't have dropdown */}
                        {!mainItem.dropdown && (
                          <div>
                            {mainItem.mainItem?.map((item, subIndex) => (
                              <SidebarItem
                                key={subIndex}
                                item={item}
                                onClick={() => toggleSubmenu(item)}
                                isActive={!!(
                                  item === activeItem ||
                                  (item.items && item.items.some((sub) => sub.path === pathname))
                                )}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* submenu for active item */}
            <AnimatePresence>
              {submenuOpen && activeItem && (
                <motion.div
                  className="absolute inset-0 dark:bg-slate-700 bg-neutral-100 z-30"
                  initial="hiddenRight"
                  animate="visible"
                  exit="hiddenRight"
                  variants={variants}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="cursor-pointer text-blue-600 flex items-center space-x-2 pb-4"
                    onClick={() => {
                      setSubmenuOpen(false);
                      setActiveItem(null);
                      router.push("/");
                    }}
                  >
                    <ArrowLeft size={15} />
                    <span className="font-semibold">{activeItem.name}</span>
                  </div>

                  {activeItem.items?.map((subItem) => (
                    <SubMenuItem key={subItem.path} item={subItem} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 w-full px-4">

          <div className="flex flex-col">
            <div
              onClick={handleModalToggle}
              className="text-sm dark:text-gray-200 text-gray-600 cursor-pointer mb-2 hover:text-blue-600"
            >
              Where did you hear about us?
            </div>

            {showSocialModal && (
              <motion.div
                ref={modalRef}
                className="absolute left-0 top-[-220px] w-full dark:bg-slate-600 bg-white shadow-lg rounded-lg p-4 z-30 social-modal"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center">
                  <Image
                    className=""
                    src="/logo.svg"
                    alt="Logo"
                    width={46}
                    height={30}
                  />
                  <X
                    size={15}
                    className="cursor-pointer"
                    onClick={() => setShowSocialModal(false)}
                  />
                </div>

                <p className="dark:text-gray-200 text-gray-600 text-sm mt-2">
                  Where did you hear about dub?
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4 dark:text-gray-200 text-gray-600">
                  <a
                    href="https://facebook.com"
                    className="flex items-center border p-2 rounded-md space-x-2"
                  >
                    <Facebook size={25} />
                    <span className="text-sm ">Facebook</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="flex items-center border p-2 rounded-md space-x-2"
                  >
                    <Linkedin size={25} />
                    <span className="text-sm ">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com"
                    className="flex items-center border p-2 rounded-md space-x-2"
                  >
                    <Github size={25} />
                    <span className="text-sm ">GitHub</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="flex items-center border p-2 rounded-md space-x-2"
                  >
                    <Twitter size={25} />
                    <span className="text-sm ">Twitter</span>
                  </a>
                </div>
              </motion.div>
            )}

            <div className="text-sm dark:text-gray-200 text-gray-600 mt-4">
              <Link
                href="/contact-us"
                className="flex items-center space-x-2 hover:text-blue-600 p-2"
              >
                <Mail size={16} />
                <span>Contact Us</span>
              </Link>
              <Link
                href="/help-center"
                className="flex items-center space-x-2 hover:text-blue-600 p-2"
              >
                <LifeBuoy size={16} />
                <span>Help Center</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <HelpModal
        modalOpen={modalOpen}
        modalPosition={modalPosition}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredQuestions={filteredQuestions}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;