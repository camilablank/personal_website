import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="pb-4 border-b border-neutral-200 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-full max-w-xs md:max-w-sm flex justify-start">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="font-bitcount text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight not-italic whitespace-nowrap">Camila Blank</h1>
            </Link>
          </div>
        </div>
        <nav className="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-end gap-1 sm:gap-2 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-light italic overflow-x-auto">
          <a href="/Camila_Blank_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 hover:underline">
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
