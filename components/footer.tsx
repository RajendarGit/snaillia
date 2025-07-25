"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-[#e4f1e8]/50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-10 lg:py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <div className="text-lg font-bold tracking-wide">snaillia</div>
          <p className="text-sm text-gray-400 dark:text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} Nature Beauty. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="flex items-center gap-2 bg-gray-50 rounded-full shadow-md w-8 h-8 text-gray-400"
            >
              f
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 bg-gray-50 rounded-full shadow-md w-8 h-8 text-gray-400"
            >
              p
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 bg-gray-50 rounded-full shadow-md w-8 h-8 text-gray-400"
            >
              li
            </Button>
          </div>
        </div>
        <div className="my-4 md:my-0">
          <ul className="text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-sm my-4 md:my-0">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#7fa68d]" />
            <span className="text-gray-400">
              83 Greenway Ave, City, Country
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#7fa68d]" />
            <span className="text-gray-400">+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#7fa68d]" />
            <span className="text-gray-400">info@naturebeauty.com</span>
          </div>
        </div>
        <div>
          <p className="text-gray-400 mb-4">
            Enter your email below for daily updates
          </p>
          <div className="flex items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-box"
            />
            <Button variant="secondary" size="lg" className="mr-4 shadow-2xl">
              Join
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
