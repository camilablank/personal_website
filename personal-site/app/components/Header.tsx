"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Camila Blank";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Hide cursor after a short delay
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100); // 100ms delay between each letter
    
    return () => clearInterval(timer);
  }, []);
  return (
    <header className="pb-4 border-b border-neutral-200 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 sm:gap-10 items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-full max-w-xs md:max-w-sm flex justify-center md:justify-start">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="font-bitcount text-4xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight not-italic whitespace-nowrap" style={{color: '#D41795'}}>
                {displayedName}
                {showCursor && <span className="animate-pulse">|</span>}
              </h1>
            </Link>
          </div>
        </div>
        <nav className="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-end gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-lg lg:text-xl font-light italic">
          <a href="/Camila_Blank_Resume.pdf?v=2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 hover:underline">
            <FileText className="h-5 w-5" /> Resume
          </a>
          <a href="https://github.com/camilablank" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 hover:underline">
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/camila-blank" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 hover:underline">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a href="mailto:camilab@stanford.edu" className="flex items-center gap-2 px-4 py-2 hover:underline">
            <Mail className="h-5 w-5" /> Email
          </a>
          <Link href="/blog" className="flex items-center gap-2 px-4 py-2 hover:underline">
            <BookOpen className="h-5 w-5" /> Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
