import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Mail, LifeBuoy } from "lucide-react"; 
import Link from "next/link";

interface HelpModalProps {
  modalOpen: boolean;
  modalPosition: { top: number; left: number } | null;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredQuestions: { question: string; answer: string }[];
  closeModal: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({
  modalOpen,
  modalPosition,
  searchQuery,
  setSearchQuery,
  filteredQuestions,
  closeModal,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const helpIconRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (modalOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current && !modalRef.current.contains(event.target as Node) &&
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
  }, [modalOpen, closeModal]);

  return (
    <AnimatePresence>
      {modalOpen && modalPosition && (
        <motion.div
          className="fixed bg-white p-6 shadow-lg rounded-lg z-30 w-[500px] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          }}
          ref={modalRef}
        >
          <h2 className="text-xl font-semibold">👋 How can we help?</h2>
          <input
            type="text"
            placeholder="Search help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full mt-4 p-2 border-b border-gray-300 outline-none"
          />
          <div className="mt-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item) => (
                <div
                  key={item.question}
                  className="p-2 text-gray-600 text-sm flex justify-between items-center cursor-pointer group hover:bg-gray-100 transition duration-200"
                >
                  <Link
                    href="#"
                    className="flex justify-between items-center w-full group-hover:text-blue-600"
                  >
                    <div>
                      <p className="font-semibold">{item.question}</p>
                      <p className="text-gray-400">{item.answer}</p>
                    </div>
                    <MoveRight
                      size={16}
                      className="ml-2 group-hover:block hidden text-blue-600"
                    />
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No results found</p>
            )}
          </div>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <Link
              href="/contact-us"
              className="flex items-center text-sm text-blue-600 hover:text-blue-800 space-x-2"
            >
              <Mail size={16} />
              <span>Contact Us</span>
            </Link>
            <Link
              href="/help-center"
              className="flex items-center text-sm text-blue-600 hover:text-blue-800 space-x-2"
            >
              <LifeBuoy size={16} />
              <span>Help Center</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
