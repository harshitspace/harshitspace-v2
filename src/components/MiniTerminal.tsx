"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

interface OutputLine {
  id: number;
  type: "input" | "response" | "error";
  text: string;
}

export default function MiniTerminal() {
  const [output, setOutput] = useState<OutputLine[]>([
    { id: 0, type: "response", text: "Terminal active. Type 'help'." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Auto-scroll to bottom whenever output changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = inputValue.trim().toLowerCase();
      const newId = Date.now();

      // Add the user's input to the log
      let newOutput: OutputLine[] = [
        ...output,
        { id: newId, type: "input", text: `~> ${cmd}` },
      ];

      let responseText = "";
      let responseType: "response" | "error" = "response";

      // Parse the command
      switch (cmd) {
        case "help":
          responseText =
            "Commands: clear, whoami, stack, cd /about, cd /projects, cat resume";
          break;
        case "whoami":
          responseText = "Harshit Raj | Full-Stack Dev | harshitspace admin";
          break;
        case "stack":
          responseText = "MERN, Python, FastAPI, Flask, AWS, SQLite";
          break;
        case "cd /about":
          router.push("/about");
          responseText = "Navigating to /about...";
          break;
        case "cd /projects":
          router.push("/projects");
          responseText = "Navigating to /projects...";
          break;
        case "cd /contact":
          router.push("/contact");
          responseText = "Navigating to /contact...";
          break;
        case "cat resume":
        case "get resume":
          window.open("/resume", "_blank");
          responseText = "Opening resume.pdf securely...";
          break;
        case "sudo":
          responseText = "Permission denied. Incident reported.";
          responseType = "error";
          break;
        case "clear":
          setOutput([
            { id: 0, type: "response", text: "Terminal active. Type 'help'." },
          ]);
          setInputValue("");
          return; // Exit early to clear screen
        case "":
          break;
        default:
          responseText = `Command not found: ${cmd}. Type 'help'.`;
      }

      // Add the response to the log if there is one
      if (responseText) {
        newOutput.push({
          id: newId + 1,
          type: responseType,
          text: responseText,
        });
      }

      setOutput(newOutput);
      setInputValue("");
    }
  };

  return (
    <div
      className="border border-[#333] border-t-2 border-t-accent bg-black p-4 h-[185px] shrink-0 flex flex-col text-[0.85rem] cursor-text transition-all duration-300 w-full"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        ref={outputRef}
        className="flex-grow overflow-y-auto mb-2 font-mono scrollbar-hide"
      >
        {output.map((line) => (
          <p
            key={line.id}
            className={`mb-[5px] ${
              line.type === "input"
                ? "text-white"
                : line.type === "error"
                  ? "text-red-500"
                  : "text-[#aaa]"
            }`}
          >
            {line.text}
          </p>
        ))}
      </div>

      <div className="flex items-center text-accent font-mono shrink-0">
        <span className="mr-2">{"~>"}</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleCommand}
          autoComplete="off"
          spellCheck="false"
          className="bg-transparent border-none text-text outline-none flex-grow w-full"
        />
      </div>
    </div>
  );
}
