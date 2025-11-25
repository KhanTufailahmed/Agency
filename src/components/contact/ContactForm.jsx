import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="p-8 bg-white border md:p-12 border-dark/10">
      <h3 className="mb-8 text-3xl font-bold tracking-tighter uppercase text-dark">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-bold tracking-widest uppercase text-dark"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 transition-colors border bg-lightGray border-dark/10 focus:outline-none focus:border-dark focus:ring-0 placeholder:text-grayText/50"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-bold tracking-widest uppercase text-dark"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 transition-colors border bg-lightGray border-dark/10 focus:outline-none focus:border-dark focus:ring-0 placeholder:text-grayText/50"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-bold tracking-widest uppercase text-dark"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className="w-full px-4 py-3 transition-colors border bg-lightGray border-dark/10 focus:outline-none focus:border-dark focus:ring-0 placeholder:text-grayText/50"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-bold tracking-widest uppercase text-dark"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 transition-colors border resize-none bg-lightGray border-dark/10 focus:outline-none focus:border-dark focus:ring-0 placeholder:text-grayText/50"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center w-full px-8 py-4 space-x-2 font-bold tracking-widest uppercase transition-colors bg-primary text-dark hover:bg-dark hover:text-white disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={20} />
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 text-sm font-medium text-green-800 bg-green-100 border border-green-200">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {status === "error" && (
          <div className="p-4 text-sm font-medium text-red-800 bg-red-100 border border-red-200">
            Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
