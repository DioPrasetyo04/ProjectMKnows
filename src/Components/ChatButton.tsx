"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ChatForm from "./ChatForm";

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        onClick={() => setOpen(!open)}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 right-[0px] rounded-full py-3 px-2 flex items-center z-10 transition-all bg-transparent chat-button-container"
      >
        {open === true ? (
          <ChatForm isOpen={open} onClose={() => setOpen(false)} />
        ) : (
          <div className="flex grow-0 shrink-0 items-center justify-center gap-x-2 bg-green-600 rounded-full py-3 px-6">
            <div className="w-[39.3px] h-[39.3px]">
              <img
                src="/images/logos/chat_icon.png"
                alt="icon messages"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="font-montserrat font-medium text-[20px] text-white">
              Let's Chat
            </p>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ChatButton;
