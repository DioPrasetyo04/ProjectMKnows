import { useState } from "react";
import { fetchAPIGemini } from "../services/api_gemini";
import { formatDateLabel, formatTime } from "../Utils/merge";

export type ChatFormProps = {
  sender: string;
  text: string;
  timestamp: Date;
};

const ChatForm = ({ isOpen, onClose }: any) => {
  const [step, setStep] = useState<"form" | "option" | "chatbot">("form");
  const [chat, setChat] = useState<ChatFormProps[]>([]);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hp: "",
    message: "",
  });

  const onHandleValueChange = (e: any) => {
    setFormData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  // ======================
  //  SUBMIT FORM PERTAMA
  // ======================
  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.hp && formData.message) {
      setStep("option");
    } else {
      alert("Mohon isi semua field dengan benar.");
    }
  };

  // ======================
  //  KIRIM PESAN KE GEMINI
  // ======================
  const sendMessageToGemini = async (msg: string) => {
    try {
      const chatGemini = await fetchAPIGemini.post(
        // Path sudah benar, dimulai setelah v1/ atau v1beta/
        `/models/gemini-2.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_API_KEY_GEMINI}`,
        {
          contents: [{ parts: [{ text: msg }] }],
        }
      );

      const reply =
        chatGemini.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Maaf, saya tidak mengerti pertanyaan Anda.";

      setChat((prevChat) => [
        ...prevChat,
        { sender: "Bot Gemini", text: reply, timestamp: new Date() },
      ]);
    } catch (error) {
      console.log(error);
      setChat((prevChat) => [
        ...prevChat,
        {
          sender: "Bot Gemini",
          text: "Terjadi kesalahan konfigurasi server.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  // ======================
  //  KETIKA PILIH CHATBOT
  // ======================
  const handleChatbotStart = async () => {
    setStep("chatbot");

    // Tambahkan pesan pertama user dari form
    setChat([
      {
        sender: "You",
        text: formData.message,
        timestamp: new Date(),
      },
    ]);

    // Bot menyapa dan menanggapi
    setTimeout(async () => {
      setChat((prev) => [
        ...prev,
        {
          sender: "Bot Gemini",
          text: `Halo ${formData.name}! Senang bertemu denganmu 😊`,
          timestamp: new Date(),
        },
      ]);
      await sendMessageToGemini(formData.message);
    }, 1000);
  };

  // ======================
  //  KETIKA PILIH WHATSAPP
  // ======================
  const handleWhatsApp = () => {
    const pesan = `Halo, berikut data saya:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo HP: ${formData.hp}\nPesan: ${formData.message}`;
    const url = `https://wa.me/6281381876265?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  // ======================
  //  KIRIM PESAN BARU DI CHATBOT
  // ======================
  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    if (!message.trim()) return false;

    setChat((prev) => [
      ...prev,
      { sender: "You", text: message, timestamp: new Date() },
    ]);
    setMessage("");
    await sendMessageToGemini(message);
  };

  return (
    <>
      {isOpen && (
        <div
          className="card w-[276px] h-[542px] rounded-[15px] bg-[#02353C] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#083F45] w-full h-[56px] rounded-t-[15px] flex items-center px-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="lime-green-2 flex items-center justify-center w-[34px] h-[34px] bg-[#A9DFBF] rounded-full">
                <h1 className="text-[#083F45] font-bold">MK</h1>
              </div>
              <div className="flex flex-col leading-tight">
                <h1 className="text-white font-bold text-[14px]">
                  Let’s Chat!
                </h1>
                <span className="text-[#A9DFBF] text-[10px] font-semibold">
                  We’ll reply as soon as we can
                </span>
              </div>
            </div>
            <button onClick={onClose} className="text-white text-lg font-bold">
              ×
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 p-3 overflow-y-auto text-white">
            {/* STEP 1: FORM */}
            {step === "form" && (
              <form
                onSubmit={onHandleSubmit}
                className="flex flex-col gap-3 text-sm"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={onHandleValueChange}
                  className="p-2 rounded bg-[#084C54] text-white placeholder-gray-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={onHandleValueChange}
                  className="p-2 rounded bg-[#084C54] text-white placeholder-gray-300"
                />
                <input
                  type="text"
                  name="hp"
                  placeholder="Your Phone Number"
                  value={formData.hp}
                  onChange={onHandleValueChange}
                  className="p-2 rounded bg-[#084C54] text-white placeholder-gray-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={onHandleValueChange}
                  className="p-2 rounded bg-[#084C54] text-white placeholder-gray-300 min-h-[80px]"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#A9DFBF] text-[#02353C] font-bold py-2 rounded"
                >
                  Continue
                </button>
              </form>
            )}

            {/* STEP 2: OPTION */}
            {step === "option" && (
              <div className="flex flex-col gap-4 items-center justify-center h-full">
                <p className="text-center text-sm">Pilih metode percakapan:</p>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded font-semibold"
                >
                  Chat via WhatsApp
                </button>
                <button
                  onClick={handleChatbotStart}
                  className="bg-[#A9DFBF] text-[#02353C] w-full py-2 rounded font-bold"
                >
                  Chat with AI
                </button>
              </div>
            )}

            {/* STEP 3: CHATBOT */}
            {step === "chatbot" && (
              <div className="flex flex-col justify-between h-full">
                {/* CHAT LIST */}
                <div className="flex-1 overflow-y-auto space-y-2">
                  {(() => {
                    let lastDate = "";
                    return chat.map((c, index) => {
                      const currentDateLabel = formatDateLabel(c.timestamp);
                      const showDateLabel = currentDateLabel !== lastDate;
                      lastDate = currentDateLabel;

                      return (
                        <div key={index}>
                          {showDateLabel && (
                            <div className="text-center text-gray-400 text-xs my-2">
                              {currentDateLabel}
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] p-2 rounded-lg my-1 ${
                              c.sender === "You"
                                ? "bg-[#DCF8C6] self-end ml-auto text-right text-black"
                                : "bg-white text-left text-black"
                            }`}
                          >
                            <p className="text-sm">{c.text}</p>
                            <span className="block text-[10px] text-gray-500 mt-1">
                              {formatTime(c.timestamp)}
                            </span>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>

                {/* INPUT PESAN */}
                <form onSubmit={handleSendMessage} className="mt-3 flex">
                  <input
                    type="text"
                    name="msg"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 p-2 rounded-l bg-[#084C54] text-white placeholder-gray-300 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-[#A9DFBF] text-[#02353C] px-3 rounded-r font-bold"
                  >
                    ➤
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatForm;
