"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// Updated info section
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1728 977294",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muhammad.rifat.islam31@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Mirpur-12, Dhaka, Bangladesh",
  },
];

// EmailJS config — set these in .env.local (must be prefixed with NEXT_PUBLIC_ to be readable in the browser)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [serviceValue, setServiceValue] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!form.firstName.trim()) errors.firstName = "First name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) errors.message = "Please add a message.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg(
        "Contact form isn't configured yet. Add your EmailJS service ID, template ID, and public key as NEXT_PUBLIC_ environment variables."
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          service: serviceValue || "Not specified",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm(initialForm);
      setServiceValue("");
      setFieldErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please try again, or email me directly.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="py-12 bg-[#0b1120] text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-[40px] items-start justify-between">
          {/* Contact Form */}
          <div className="xl:w-[55%] w-full bg-white/[0.03] p-10 rounded-2xl border border-white/10 transition-colors duration-300 hover:border-white/20">
            <h3 className="text-3xl font-semibold mb-2 text-white">
              Let's Build Something Great Together
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or exciting projects. Drop your details below — I'll get back
              to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="bg-white/[0.03] border border-white/15 focus:border-cyan-400 transition-colors"
                  />
                  {fieldErrors.firstName && (
                    <span className="text-xs text-red-400">{fieldErrors.firstName}</span>
                  )}
                </div>

                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="bg-white/[0.03] border border-white/15 focus:border-cyan-400 transition-colors"
                />

                <div className="flex flex-col gap-1.5">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white/[0.03] border border-white/15 focus:border-cyan-400 transition-colors"
                  />
                  {fieldErrors.email && (
                    <span className="text-xs text-red-400">{fieldErrors.email}</span>
                  )}
                </div>

                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-white/[0.03] border border-white/15 focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Service Selection */}
              <Select value={serviceValue} onValueChange={setServiceValue}>
                <SelectTrigger className="w-full bg-white/[0.03] border border-white/15 focus:border-cyan-400 transition-colors">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="bg-[#10182b] border-white/15">
                  <SelectGroup>
                    <SelectLabel className="text-cyan-400">Available Services</SelectLabel>
                    <SelectItem value="backend" className="focus:bg-cyan-400/10 focus:text-cyan-300">
                      Backend & API Development
                    </SelectItem>
                    <SelectItem value="fullstack" className="focus:bg-cyan-400/10 focus:text-cyan-300">
                      Full-Stack Web Development
                    </SelectItem>
                    <SelectItem value="flutter" className="focus:bg-cyan-400/10 focus:text-cyan-300">
                      Mobile App Development (Flutter)
                    </SelectItem>
                    <SelectItem value="research" className="focus:bg-cyan-400/10 focus:text-cyan-300">
                      AI Research & Technical Writing
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="h-[200px] bg-white/[0.03] border border-white/15 placeholder:text-white/40 focus:border-cyan-400 transition-colors"
                  placeholder="Type your message here..."
                />
                {fieldErrors.message && (
                  <span className="text-xs text-red-400">{fieldErrors.message}</span>
                )}
              </div>

              {/* Button */}
              <Button
                type="submit"
                disabled={status === "submitting"}
                size="md"
                className="max-w-[180px] bg-cyan-500 text-white hover:bg-cyan-400 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {/* Status messages */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-emerald-400 flex items-center gap-2"
                  >
                    <FaCheckCircle />
                    Message sent — thanks for reaching out, I'll reply soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-400 flex items-center gap-2"
                  >
                    <FaExclamationCircle />
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col items-start justify-center xl:pl-10">
            <h3 className="text-2xl font-semibold mb-8 text-white">
              Contact Information
            </h3>
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 bg-white/[0.03] border border-white/10 p-4 rounded-xl hover:border-white/20 transition-colors duration-300 group"
                >
                  <div className="w-[52px] h-[52px] flex items-center justify-center bg-white/5 rounded-lg transition-colors duration-300">
                    <div className="text-xl text-cyan-400">{item.icon}</div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white/40 text-sm">{item.title}</p>
                    <h4 className="text-base font-medium text-white">
                      {item.description}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;