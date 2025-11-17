"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ChatForm from "./ChatForm";

const ChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tombol Chat */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all z-50"
      >
        {open ? "Close Chat ✖" : "Let’s Chat 💬"}
      </motion.button>

      {/* Popup Chat Form */}
      <ChatForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ChatButton;
