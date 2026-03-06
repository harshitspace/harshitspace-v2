import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  statusType?: "success" | "local" | "offline";
  techStack: string[];
  githubUrl: string;
  liveUrl?: string; // Optional prop for the live deployment
}

export default function ProjectCard({
  title,
  description,
  status,
  statusType = "success",
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const getStatusStyles = () => {
    switch (statusType) {
      case "local":
        return "text-[#00cccc] bg-[rgba(0,204,204,0.1)]";
      case "offline":
        return "text-[#ff5555] bg-[rgba(255,85,85,0.1)]";
      case "success":
      default:
        return "text-accent bg-[rgba(0,255,157,0.1)]";
    }
  };

  return (
    <div className="bg-card p-6 mb-6 border border-border-dark transition-all duration-300 relative group hover:border-accent hover:shadow-[-4px_4px_0_rgba(0,255,157,0.1)] flex flex-col">
      {/* Status Badge */}
      <div
        className={`absolute top-6 right-6 text-[0.8rem] px-2 py-1 rounded font-mono ${getStatusStyles()}`}
      >
        {status}
      </div>

      {/* Title & Description */}
      <h3 className="text-[1.3rem] m-0 mb-2 font-bold text-text group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[#aaa] text-[0.95rem] m-0 pr-24 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex gap-3 flex-wrap mt-6 mb-6 text-[0.85rem] font-mono">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="border border-[#333] px-3 py-1 text-[#aaa]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 pt-4 border-t border-dashed border-[#333]">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#888] hover:text-accent transition-colors text-[0.9rem] font-mono"
        >
          <FaGithub className="text-[1.1rem]" /> [ source_code ]
        </a>

        {/* Only render the Live Demo link if a liveUrl was provided */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#888] hover:text-accent transition-colors text-[0.9rem] font-mono"
          >
            <FaLink className="text-[1rem]" /> [ live_demo ]
          </a>
        )}
      </div>
    </div>
  );
}
