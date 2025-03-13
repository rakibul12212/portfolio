"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsDot } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";

const ContactInputs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const username = form.current.name.value.trim();
    const useremail = form.current.email.value.trim();
    const usermessage = form.current.message.value.trim();

    // Basic validation
    if (!username || !useremail || !usermessage) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_Service_ID,
        process.env.NEXT_PUBLIC_template_ID,
        form.current,
        process.env.NEXT_PUBLIC_Public_Key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        toast.error("Failed to send message. Try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-black flex items-center w-full">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-8xl space-y-4"
      >
        <Toaster position="top-right" reverseOrder={false} />
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full md:w-1/2 bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="w-full md:w-1/2 bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Message"
          className="w-full bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none resize-none"
          required
        ></textarea>

        {/* Hidden input for timestamp */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          type="submit"
          disabled={loading}
          className={`group px-3 py-1 rounded-full flex items-center justify-center font-semibold transition-all duration-300 transform ${
            loading
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-neutral-700 text-white hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 group-hover:scale-110"
          }`}
        >
          {loading ? (
            <span className="flex items-center gap-2 animate-pulse">
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <div className="flex items-center">
              <span className="relative overflow-hidden">
                <span className="block transition-all group-hover:-translate-y-full">
                  SEND MESSAGE
                </span>
                <span className="absolute top-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-all">
                  SEND MESSAGE
                </span>
              </span>
              <span className="transition-all transform group-hover:scale-200 group-hover:text-neutral-500">
                <BsDot size={30} />
              </span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactInputs;
