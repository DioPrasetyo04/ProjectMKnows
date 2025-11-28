"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ChatForm from "./ChatForm";

const ChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 right-4 z-[9999] flex flex-col items-end overflow-x-hidden"
      >
        {open ? (
          <div className="relative">
            <ChatForm isOpen={open} onClose={() => setOpen(false)} />
          </div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-x-2 bg-green-600 rounded-full py-3 px-6 shadow-lg"
          >
            <div className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]">
              <img
                src="/images/logos/chat_icon.png"
                alt="chat"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-montserrat font-medium text-white text-[16px] md:text-[22px]">
              Let's Chat
            </p>
          </button>
        )}
      </motion.div>
    </>
  );
};

export default ChatButton;
