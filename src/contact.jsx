import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed

const Contact = () => {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fa384327-5c65-4542-a576-1800ef3ce5e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Message sent successfully!");
      event.target.reset();
    } else {
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4 relative">

      {/* Home Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-blue-700 transition-all duration-300"
      >
        Portfolio
      </Link>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 space-y-5"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-center text-gray-800"
        >
          Hire Me!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-gray-600 mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-gray-600 mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-gray-600 mb-1 font-medium">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </motion.button>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-green-600 font-medium"
          >
            {message}
          </motion.p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
