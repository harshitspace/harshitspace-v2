"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTerminal,
  FaFolderOpen,
  FaSatelliteDish,
  FaFilePdf,
} from "react-icons/fa6";
import MiniTerminal from "./MiniTerminal";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "cd /about", path: "/about", icon: <FaTerminal /> },
    { name: "cd /projects", path: "/projects", icon: <FaFolderOpen /> },
    { name: "cd /contact", path: "/contact", icon: <FaSatelliteDish /> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-[320px] border-r border-border-dark bg-bg p-10 flex flex-col justify-between z-40 transition-all duration-300">
      <div className="flex flex-col w-full">
        <Link
          href="/about"
          className="text-[2.5rem] font-bold text-accent mb-2 cursor-pointer block"
        >
          HR.
        </Link>
        <div className="text-[#888] text-[0.9rem] mb-8">user@harshitspace</div>

        <nav className="flex flex-col gap-2 w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center py-2 px-4 text-[1.1rem] transition-all duration-200 border-l-2 ${
                  isActive
                    ? "text-accent border-accent bg-accent/5 font-bold"
                    : "text-[#888] border-transparent hover:text-text hover:bg-white/5"
                }`}
              >
                <span className="w-[30px] text-[1rem] flex justify-start">
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center bg-transparent border border-dashed border-accent text-accent py-[0.8rem] px-4 cursor-pointer text-[0.9rem] transition-all duration-300 hover:bg-accent/10 hover:shadow-[0_0_10px_rgba(0,255,157,0.2)]"
        >
          <span className="w-[30px] text-[1.1rem] flex justify-start">
            <FaFilePdf />
          </span>
          <span>./download_resume.pdf</span>
        </a>
      </div>

      <MiniTerminal />
    </aside>
  );
}
