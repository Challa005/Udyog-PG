import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ isOpen, items }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-md border border-[#E9EDF4] overflow-hidden z-50 " >
          <ul className="py-2">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-[#202C4B] hover:bg-[#F3F6FF] hover:text-[#3D5EE1] cursor-pointer transition"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
