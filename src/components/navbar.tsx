import { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "./motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-with-blur sticky top-0 h-16 w-full bg-transparent p-4">
      <div className="flex items-center justify-end">
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          <div
            className={`nav-with-blur absolute right-0 top-16 w-screen bg-blue-500 bg-transparent p-4 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="space-y-2 text-[16px] text-white">
              <li>
                <a href="/" className="m-4 block hover:text-[#F9ED69]">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1xG3ltNKhS_lf3fnm6qGT4wssNtL39Zz5/view?usp=sharing"
                  className="m-4 block hover:text-[#F9ED69]"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="/projects" className="m-4 block hover:text-[#F9ED69]">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blogs" className="m-4 block hover:text-[#F9ED69]">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="hidden space-x-8 text-[20px] text-white md:flex">
            <li>
              <a href="/" className="hover:text-[#F9ED69]">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1xG3ltNKhS_lf3fnm6qGT4wssNtL39Zz5/view?usp=sharing"
                className="hover:text-[#F9ED69]"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-[#F9ED69]">
                Projects
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-[#F9ED69]">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
