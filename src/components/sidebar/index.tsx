"use client";
import { useEffect, useState, useRef, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SidebarItem from "./item";
import SubMenuItem from "./sub-item";
import HelpModal from "./helpmodal";
import { useTheme } from "@/components/ThemeProvider";
import InboxSvg from "../icons/inboxSvg";
import IssueSvg from "../icons/issueSvg";
import ProjectSvg from "../icons/projectsSvg";
import GeneralSvg from "../icons/generalSvg";
import ApikeySvg from "../icons/apiKeysvg";
import BillingSvg from "../icons/billingSvg";
import DomainSvg from "../icons/domainSvg";
import IntegrationSvg from "../icons/integrationSvg";
import LibrarySvg from "../icons/librarySvg";
import NotificationSvg from "../icons/notificationSvg";
import OauthAppsSvg from "../icons/oauthAppsSvg";
import PeopleSvg from "../icons/peopleSvg";
import SecuritySvg from "../icons/securitySvg";
import TeamsSvg from "../icons/teamsSvg";
import ViewsSvg from "../icons/viewsSvg";
import HelpSvg from "../icons/helpSvg";


import {
  CircleHelp,
  X,
  ArrowLeft,
  Menu,
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
import SidebarHeader from "./SidebarHeader";
import DraggableCards from "./DraggableCards";
interface MainItem {
  name: string;
  path: string;
  icon: ReactNode;
  subCategories?: SubCategory[];
}
interface SubCategory {
  Category: string;
  SubItems?: SubItem[];
}
interface SubItem {
  name: string;
  path: string;
  icon: ReactNode;
}
interface MainNav {
  dropdown: boolean;
  mainItems?: MainItem[];
}

const sectionOne: MainItem[] = [
  {
    name: "Inbox",
    path: "/",
    icon: <InboxSvg />,
  },
  {
    name: "My issues",
    path: "/issues",
    icon: <IssueSvg />,
    subCategories: [
      {
        Category: "Workspace",
        SubItems: [
          {
            name: "General",
            path: "/issues",
            icon: <GeneralSvg />,
          },
          {
            name: "Domain",
            path: "/issues/domain",
            icon: <DomainSvg />,
          },
          {
            name: "Library",
            path: "/issues/library",
            icon: <LibrarySvg />,
          },
          {
            name: "People",
            path: "/issues/people",
            icon: <PeopleSvg />,
          },
          {
            name: "Billing",
            path: "/issues/billing",
            icon: <BillingSvg />,
          },
          {
            name: "Integration",
            path: "/issues/integration",
            icon: <IntegrationSvg />,
          },
          {
            name: "Security",
            path: "/issues/security",
            icon: <SecuritySvg />,
          }
        ],
      },
      {
        Category: "Developer",
        SubItems: [
          {
            name: "Api keys",
            path: "/issues/api",
            icon: <ApikeySvg />,
          },
          {
            name: "Oauth Apps",
            path: "/issues/oauth",
            icon: <OauthAppsSvg />,
          },
        ],
      },
      {
        Category: "Account",
        SubItems: [
          {
            name: "Notifications",
            path: "/issues/notifications",
            icon: <NotificationSvg />,
          },
        ],
      },
    ],
  },
];

const sectionTwo: MainItem[] = [
  {
    name: "Projects",
    path: "/projects",
    icon: <ProjectSvg />,
    subCategories: [
      {
        Category: "Workspace",
        SubItems: [
          {
            name: "General",
            path: "/projects",
            icon: <GeneralSvg />,
          },
          {
            name: "Domain",
            path: "/projects/domain",
            icon: <DomainSvg />,
          },
          {
            name: "Library",
            path: "/projects/library",
            icon: <LibrarySvg />,
          },
          {
            name: "People",
            path: "/projects/people",
            icon: <PeopleSvg />,
          },
          {
            name: "Billing",
            path: "/projects/billing",
            icon: <BillingSvg />,
          },
          {
            name: "Integration",
            path: "/projects/integration",
            icon: <IntegrationSvg />,
          },
          {
            name: "Security",
            path: "/projects/security",
            icon: <SecuritySvg />,
          }
        ],
      },
      {
        Category: "Developer",
        SubItems: [
          {
            name: "Api keys",
            path: "/projects/api",
            icon: <ApikeySvg />,
          },
          {
            name: "Oauth Apps",
            path: "/projects/oauth",
            icon: <OauthAppsSvg />,
          },
        ],
      },
      {
        Category: "Account",
        SubItems: [
          {
            name: "Notifications",
            path: "/projects/notifications",
            icon: <NotificationSvg />,
          },
        ],
      },
    ],
  },
  {
    name: "Views",
    path: "/views",
    icon: <ViewsSvg />,
    subCategories: [
      {
        Category: "Workspace",
        SubItems: [
          {
            name: "General",
            path: "/views",
            icon: <GeneralSvg />,
          },
          {
            name: "Domain",
            path: "/views/domain",
            icon: <DomainSvg />,
          },
          {
            name: "Library",
            path: "/views/library",
            icon: <LibrarySvg />,
          },
          {
            name: "People",
            path: "/views/people",
            icon: <PeopleSvg />,
          },
          {
            name: "Billing",
            path: "/views/billing",
            icon: <BillingSvg />,
          },
          {
            name: "Integration",
            path: "/views/integration",
            icon: <IntegrationSvg />,
          },
          {
            name: "Security",
            path: "/views/security",
            icon: <SecuritySvg />,
          }
        ],
      },
      {
        Category: "Developer",
        SubItems: [
          {
            name: "Api keys",
            path: "/views/api",
            icon: <ApikeySvg />,
          },
          {
            name: "Oauth Apps",
            path: "/views/oauth",
            icon: <OauthAppsSvg />,
          },
        ],
      },
      {
        Category: "Account",
        SubItems: [
          {
            name: "Notifications",
            path: "/views/notifications",
            icon: <NotificationSvg />,
          },
        ],
      },
    ],
  },
  {
    name: "Teams",
    path: "/teams",
    icon: <TeamsSvg />,
    subCategories: [
      {
        Category: "Workspace",
        SubItems: [
          {
            name: "General",
            path: "/teams",
            icon: <GeneralSvg />,
          },
          {
            name: "Domain",
            path: "/teams/domain",
            icon: <DomainSvg />,
          },
          {
            name: "Library",
            path: "/teams/library",
            icon: <LibrarySvg />,
          },
          {
            name: "People",
            path: "/teams/people",
            icon: <PeopleSvg />,
          },
          {
            name: "Billing",
            path: "/teams/billing",
            icon: <BillingSvg />,
          },
          {
            name: "Integration",
            path: "/teams/integration",
            icon: <IntegrationSvg />,
          },
          {
            name: "Security",
            path: "/teams/security",
            icon: <SecuritySvg />,
          }
        ],
      },
      {
        Category: "Developer",
        SubItems: [
          {
            name: "Api keys",
            path: "/teams/api",
            icon: <ApikeySvg />,
          },
          {
            name: "Oauth Apps",
            path: "/teams/oauth",
            icon: <OauthAppsSvg />,
          },
        ],
      },
      {
        Category: "Account",
        SubItems: [
          {
            name: "Notifications",
            path: "/views/notifications",
            icon: <NotificationSvg />,
          },
        ],
      },
    ],
  },
  {
    name: "Issues",
    path: "/issues",
    icon: <IssueSvg />,
    subCategories: [
      {
        Category: "Workspace",
        SubItems: [
          {
            name: "General",
            path: "/issues",
            icon: <GeneralSvg />,
          },
          {
            name: "Domain",
            path: "/issues/domain",
            icon: <DomainSvg />,
          },
          {
            name: "Library",
            path: "/issues/library",
            icon: <LibrarySvg />,
          },
          {
            name: "People",
            path: "/issues/people",
            icon: <PeopleSvg />,
          },
          {
            name: "Billing",
            path: "/issues/billing",
            icon: <BillingSvg />,
          },
          {
            name: "Integration",
            path: "/issues/integration",
            icon: <IntegrationSvg />,
          },
          {
            name: "Security",
            path: "/issues/security",
            icon: <SecuritySvg />,
          }
        ],
      },
      {
        Category: "Developer",
        SubItems: [
          {
            name: "Api keys",
            path: "/issues/api",
            icon: <ApikeySvg />,
          },
          {
            name: "Oauth Apps",
            path: "/issues/oauth",
            icon: <OauthAppsSvg />,
          },
        ],
      },
      {
        Category: "Account",
        SubItems: [
          {
            name: "Notifications",
            path: "/issues/notifications",
            icon: <NotificationSvg />,
          },
        ],
      },
    ],
  },
];

const mainNavs: MainNav[] = [
  {
    dropdown: false,
    mainItems: sectionOne,
  },
  {
    dropdown: true,
    mainItems: sectionTwo,
  },
  {
    dropdown: true,
    mainItems: sectionTwo,
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
  const helpIconRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  const toggleSubmenu = (item: MainItem) => {
    setActiveItem(item);
    setSubmenuOpen(!submenuOpen);
  };

  useEffect(() => {
    const result = findMatchingPath([...sectionOne, ...sectionTwo], pathname);

    if (!result || !result?.subCategories || result?.subCategories?.length <= 0) {
      setActiveItem(null);
      setSubmenuOpen(false);
      return;
    }
    setActiveItem(result);
    setSubmenuOpen(true);
  }, [pathname]);


  function findMatchingPath(subCategories: any, pathName: any) {
    for (const item of subCategories) {
      if (item.path !== "/" && pathName.includes(item.path)) {
        return item;
      }
      if (item.subCategories) {
        const found: any = findMatchingPath(item.subCategories, pathName);
        if (found) {
          return item;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    if (modalOpen && helpIconRef.current) {
      console.log('Help Icon Ref:', helpIconRef.current); // Check if ref is populated
      const rect = helpIconRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY - 230,
        left: rect.right + window.scrollX - 20,
      });
    }
  }, [modalOpen]);


  const [collapsedItems, setCollapsedItems] = useState<Record<number, boolean>>({});

  const toggleCollapse = (index: number) => {
    setCollapsedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      {/*hamburger button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-10  dark:text-sidebar-offwhite2 text-sidebar-darkGray p-2 rounded-full">
        <Menu />
      </button>
      <div
        className={`fixed text-sm top-0 left-0 h-screen w-[248px] trans shadow-lg z-20 p-4 relative overflow-hidden bg-neutral-100 dark:bg-slate-700 dark:text-white
  ${!sidebarOpen ? "sidebar" : ""}`}
        style={{ display: "flex", flexDirection: "column" }} // Add Flexbox
      >
        {/* Header Section */}
        <SidebarHeader userName="Stan A. Garfield" profilePic="/images/user.svg" />

        {/* Main Content */}
        <div className="flex-grow overflow-y-auto">
          <div className="w-full">
            <div className="flex flex-col relative">
              {/* Main menu items */}
              <AnimatePresence>
                {!submenuOpen && (
                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-4">
                      {mainNavs.map((mainNav, index) => (
                        <div key={index} className="dropdown-container">
                          <div className="">
                            {mainNav.dropdown && (
                              <button
                                onClick={() => toggleCollapse(index)}
                                className="w-full text-left flex items-center"
                              >
                                <p className="text-sidebar-lightGray font-normal text-xs mr-2">
                                  Workspace
                                </p>
                                <div
                                  className={`transition-transform duration-300 ${collapsedItems[index]
                                    ? "rotate-180 mt-1"
                                    : "rotate-0 pt-1"
                                    }`}
                                >
                                  <Image
                                    src="/images/downArrow.svg"
                                    alt="Arrow"
                                    width={7}
                                    height={5}
                                  />
                                </div>
                              </button>
                            )}
                            <motion.div
                              className="dropdown-items mt-2"
                              initial={{ opacity: 0, height: 0, y: -20, display: "none" }}
                              animate={{
                                opacity: collapsedItems[index] ? 0 : 1,
                                height: collapsedItems[index] ? 0 : "auto",
                                y: collapsedItems[index] ? -20 : 0,
                                display: collapsedItems[index] ? "none" : "block",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                                y: -20,
                                display: "none",
                              }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                            >
                              {mainNav.mainItems?.map((mainItem, subIndex) => (
                                <SidebarItem
                                  key={subIndex}
                                  mainItem={mainItem}
                                  onClick={() => toggleSubmenu(mainItem)}
                                  isActive={
                                    !!(
                                      mainItem === activeItem ||
                                      (mainItem && mainItem.path === pathname)
                                    )
                                  }
                                />
                              ))}
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submenu for active item */}
              <AnimatePresence>
                {submenuOpen && activeItem && (
                  <motion.div
                    className="absolute inset-0 dark:bg-slate-700 bg-neutral-100 z-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="cursor-pointer text-blue-600 flex items-center space-x-2 pb-4 pt-4"
                      onClick={() => {
                        setSubmenuOpen(false);
                        setActiveItem(null);
                        router.push("/");
                      }}
                    >
                      <ArrowLeft size={15} />
                      <span className="font-semibold">{activeItem.name}</span>
                    </div>

                    {activeItem.subCategories?.map((subCategory) => (
                      <div>
                        <p className="text-sidebar-lightGray font-normal text-xs py-2">
                          {subCategory.Category}
                        </p>
                        <div>
                          {subCategory.SubItems?.map((subItem) => (
                            <SubMenuItem key={subItem.path} item={subItem} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-auto">
          <div className="text-sm mt-4">
            <div className="relative"> {/* Ensure this is relative for modal positioning */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <HelpSvg />
                  <p>Help</p>
                </div>

                {/* Help Icon + Modal */}
                <div className="relative inline-block">
                  <button
                    ref={helpIconRef}
                    onClick={() => setModalOpen(!modalOpen)}
                    className="pr-10 pt-1 cursor-pointer"
                  >
                    <Image
                      src="/images/chevron-right.svg"
                      alt="right arrow"
                      width={5}
                      height={4}
                    />
                  </button>

                  {modalOpen && (
                    <HelpModal
                      modalOpen={modalOpen}
                      modalPosition={modalPosition}
                      closeModal={() => setModalOpen(false)}
                      helpIconRef={helpIconRef} // Pass helpIconRef
                    />
                  )}
                </div>
              </div>
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

    </div>
  );
};

export default Sidebar;