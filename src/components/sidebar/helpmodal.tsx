import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ShortCutSvg from "../icons/shortcutSvg";
import LinkSvg from "../icons/linkSvg";
import DocSvg from "../icons/DocSvg";
import ApiDocSvg from "../icons/apiDocSvg";
import LinearMobile from "../icons/linearMobileSvg";
import LinearMobileSvg from "../icons/linearMobileSvg";
import ContactUsSvg from "../icons/contactSvg";
import SettingsSvg from "../icons/settingsSvg";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  external?: boolean;
  link?: string;
  path?: string;
  onClick?: () => void;
}

interface HelpModalProps {
  modalOpen: boolean;
  modalPosition: { top: number; left: number } | null;
  closeModal: () => void;
  helpIconRef: React.RefObject<HTMLButtonElement>;
}

const HelpModal: React.FC<HelpModalProps> = ({
  modalOpen,
  modalPosition,
  closeModal,
  helpIconRef,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node) &&
          !helpIconRef.current?.contains(event.target as Node)
        ) {
          closeModal();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [modalOpen, closeModal, helpIconRef]);

  const menuItems: MenuItem[] = [
    { title: "Shortcuts", icon: <ShortCutSvg />, path: "/shortcuts" },
    { title: "Docs", icon: <DocSvg />, external: true, link: "https://docs.example.com" },
    { title: "API Docs", icon: <ApiDocSvg />, external: true, link: "https://api.example.com" },
    { title: "Linear Mobile", icon: <LinearMobileSvg />, external: true, link: "https://mobile.example.com" },
    { title: "Contact Us", icon: <ContactUsSvg />, path: "/contact-us" },
    { title: "Settings", icon: <SettingsSvg />, path: "/settings" },
  ];

  return (
    <AnimatePresence>
      {modalOpen && modalPosition && (
        <motion.div
          className="text-sm  fixed border-sidebar-lightGray3 dark:border-Darksidebar-slate-300 bg-white dark:bg-Darksidebar-slate-100 shadow-lg rounded-lg w-[240px] z-50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          }}
          ref={modalRef}
        >
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              item.external && item.link ? (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b py-2 border-sidebar-lightGray3 dark:border-Darksidebar-slate-300 hover:bg-gray-200 dark:hover:bg-Darksidebar-slate-400 cursor-pointer"
                  onClick={closeModal}
                >
                  <div className="flex items-center space-x-2 px-4">
                    <div>{item.icon}</div>
                    <span className="text-sm">{item.title}</span>
                  </div>
                  <div className="pr-4">
                    <LinkSvg />
                  </div>
                </a>
              ) : item.path ? (
                <Link
                  key={index}
                  href={item.path}
                  passHref
                  onClick={closeModal} // Close modal on click
                  className="flex items-center justify-between border-b py-2 border-sidebar-lightGray3 dark:border-Darksidebar-slate-300 hover:bg-gray-200 dark:hover:bg-Darksidebar-slate-400 cursor-pointer"
                >
                  <div className="flex items-center space-x-2 px-4">
                    <div>{item.icon}</div>
                    <span className="text-sm">{item.title}</span>
                  </div>
                </Link>
              ) : (
                // Custom action
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-2 border-sidebar-lightGray2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
                  onClick={() => {
                    item.onClick && item.onClick();
                    closeModal();
                  }}
                >
                  <div className="flex items-center space-x-2 px-4">
                    <div>{item.icon}</div>
                    <span className="text-sm">{item.title}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
