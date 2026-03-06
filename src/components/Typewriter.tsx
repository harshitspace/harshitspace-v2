"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 25 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        // Adding a slight random variance makes it look like real human typing
        timeout = setTimeout(typeWriter, Math.random() * speed + 10);
      }
    };

    // Slight delay before starting the typing effect
    const initialDelay = setTimeout(typeWriter, 400);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, speed]);

  return <span className="whitespace-pre-wrap">{displayedText}</span>;
}
