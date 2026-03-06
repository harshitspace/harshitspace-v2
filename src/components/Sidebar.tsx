"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaTerminal,
  FaFolderOpen,
  FaSatelliteDish,
  FaFilePdf,
} from "react-icons/fa6";
import MiniTerminal from "./MiniTerminal";

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    // If user is on a mobile device, start collapsed
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  }, []);

  // Auto-close sidebar on mobile when a navigation link is clicked
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  }, [pathname]);

  const navLinks = [
    { name: "cd /about", path: "/about", icon: <FaTerminal /> },
    { name: "cd /projects", path: "/projects", icon: <FaFolderOpen /> },
    { name: "cd /contact", path: "/contact", icon: <FaSatelliteDish /> },
  ];

  return (
    <>
      {/* 1. The Invisible Click-Outside Overlay (MOBILE ONLY) */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-30 bg-transparent md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* 2. The Sidebar */}
      <aside
        className={`peer fixed top-0 left-0 h-screen border-r border-border-dark bg-bg flex flex-col justify-between z-40 transition-all duration-300 overflow-hidden
        ${isExpanded ? "expanded w-[320px] p-8 md:p-10 shadow-[10px_0_30px_rgba(0,0,0,0.8)] md:shadow-none" : "collapsed w-[80px] p-4 items-center"}`}
      >
        <div className="flex flex-col w-full">
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`font-bold text-accent cursor-pointer transition-all duration-300 select-none
            ${isExpanded ? "text-[2.5rem] mb-2" : "text-[1.5rem] mb-8 text-center"}`}
          >
            HR.
          </div>

          <div
            className={`text-[#888] text-[0.9rem] mb-8 whitespace-nowrap transition-opacity duration-300 ${!isExpanded && "opacity-0 hidden"}`}
          >
            user@harshitspace
          </div>

          <nav className="flex flex-col gap-2 w-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`flex items-center transition-all duration-200 border-l-2 overflow-hidden
                  ${isExpanded ? "py-2 px-4 justify-start" : "py-4 px-0 justify-center"}
                  ${isActive ? "text-accent border-accent bg-accent/5 font-bold" : "text-[#888] border-transparent hover:text-text hover:bg-white/5"}`}
                  title={!isExpanded ? link.name : ""}
                >
                  <span
                    className={`text-[1.1rem] flex justify-center shrink-0 ${isExpanded ? "w-[30px] justify-start" : "w-auto"}`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`whitespace-nowrap transition-opacity duration-300 ${!isExpanded && "opacity-0 hidden"}`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            title={!isExpanded ? "Download Resume" : ""}
            className={`mt-6 flex items-center bg-transparent border border-accent text-accent cursor-pointer transition-all duration-300 overflow-hidden hover:bg-accent/10 hover:shadow-[0_0_10px_rgba(0,255,157,0.2)]
            ${isExpanded ? "py-[0.8rem] px-4 justify-start border-dashed" : "py-4 px-0 justify-center border-none"}`}
          >
            <span
              className={`text-[1.2rem] flex justify-center shrink-0 ${isExpanded ? "w-[30px] justify-start" : "w-auto"}`}
            >
              <FaFilePdf />
            </span>
            <span
              className={`text-[0.9rem] whitespace-nowrap transition-opacity duration-300 ${!isExpanded && "opacity-0 hidden"}`}
            >
              ./download_resume.pdf
            </span>
          </a>
        </div>

        {/* Terminal Logic */}
        <div
          className={`w-full transition-opacity duration-300 ${!isExpanded && "opacity-0 hidden"}`}
        >
          <MiniTerminal />
        </div>

        {/* Collapsed Terminal Icon */}
        <div
          className={`flex justify-center text-accent text-2xl cursor-pointer w-full py-4 transition-opacity duration-300 ${isExpanded && "hidden"}`}
          onClick={() => setIsExpanded(true)}
          title="Open Terminal"
        >
          <FaTerminal />
        </div>
      </aside>
    </>
  );
}
