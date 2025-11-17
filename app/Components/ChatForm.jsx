"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatForm = ({ onClose, isOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Chat Data:", formData);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setTimeout(onClose, 1000);
  };

  return (
    <>
      {/* AnimatePresence untuk popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              onClick={onClose}
            />

            {/* POPUP FORM */}
            <motion.div
              key="chat-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-20 right-6 bg-white rounded-2xl shadow-2xl p-6 w-[350px] border border-gray-200 z-50"
            >
              <h2 className="text-xl font-bold text-green-700 mb-4">Hubungi Kami</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-green-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-green-500"
                />
                <textarea
                  name="message"
                  placeholder="Tulis pesan Anda..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 h-24 focus:outline-green-500 resize-none"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
                >
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* AnimatePresence terpisah untuk TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-[60]"
          >
            ✅ Pesan Anda berhasil dikirim!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatForm;
