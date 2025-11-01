"use client";

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
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="py-12 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-[40px] items-start justify-between">
          {/* Contact Form */}
          <div className="xl:w-[55%] w-full bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-lg hover:border-[#06b6d4]/50 transition-all duration-300">
            <h3 className="text-4xl font-bold mb-2">
              <span className="text-gradient">
                Let's Build Something Great Together
              </span>
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or exciting projects. Just drop your details below — I'll get back
              to you as soon as possible.
            </p>

            <form className="flex flex-col gap-6">
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="First Name"
                  className="bg-[#1e293b] border border-white/20 focus:border-[#06b6d4] focus:ring-[#06b6d4] transition-all"
                />
                <Input 
                  type="text" 
                  placeholder="Last Name"
                  className="bg-[#1e293b] border border-white/20 focus:border-[#06b6d4] focus:ring-[#06b6d4] transition-all"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address"
                  className="bg-[#1e293b] border border-white/20 focus:border-[#06b6d4] focus:ring-[#06b6d4] transition-all"
                />
                <Input 
                  type="text" 
                  placeholder="Phone Number"
                  className="bg-[#1e293b] border border-white/20 focus:border-[#06b6d4] focus:ring-[#06b6d4] transition-all"
                />
              </div>

              {/* Service Selection */}
              <Select>
                <SelectTrigger className="w-full bg-[#1e293b] border border-white/20 focus:border-[#06b6d4] focus:ring-[#06b6d4] transition-all">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="bg-[#1e293b] border-white/20">
                  <SelectGroup>
                    <SelectLabel className="text-[#06b6d4]">Available Services</SelectLabel>
                    <SelectItem value="ai" className="focus:bg-[#06b6d4]/20 focus:text-[#06b6d4]">
                      AI & Machine Learning
                    </SelectItem>
                    <SelectItem value="fullstack" className="focus:bg-[#06b6d4]/20 focus:text-[#06b6d4]">
                      Full-Stack Web Development
                    </SelectItem>
                    <SelectItem value="flutter" className="focus:bg-[#06b6d4]/20 focus:text-[#06b6d4]">
                      Flutter App Development
                    </SelectItem>
                    <SelectItem value="research" className="focus:bg-[#06b6d4]/20 focus:text-[#06b6d4]">
                      AI Research & Data Analysis
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                className="h-[200px] bg-[#1e293b] border border-white/20 placeholder:text-white/50 focus:border-[#06b6d4] focus:ring-[#06b6d4] transition-all"
                placeholder="Type your message here..."
              />

              {/* Button */}
              <Button
                size="md"
                className="max-w-[180px] bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white hover:from-[#0891b2] hover:to-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/50"
              >
                Send Message
              </Button>

              <p className="text-xs text-white/50 italic">
                *Note: This form is currently non-functional.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col items-start justify-center xl:pl-10">
            <h3 className="text-3xl font-bold mb-8">
              <span className="text-gradient">Contact Information</span>
            </h3>
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 bg-white/5 border border-white/10 p-4 rounded-xl hover:border-[#06b6d4] hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/20 rounded-lg group-hover:from-[#06b6d4]/30 group-hover:to-[#3b82f6]/30 transition-all duration-300">
                    <div className="text-2xl text-gradient">{item.icon}</div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h4 className="text-lg font-semibold text-white group-hover:text-[#06b6d4] transition-colors duration-300">
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