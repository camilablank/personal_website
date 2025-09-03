import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="pb-4 border-b border-neutral-200 mb-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-4 justify-center items-start">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="font-bitcount text-3xl sm:text-5xl leading-tight tracking-tight not-italic whitespace-nowrap">Camila Blank</h1>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-xl sm:text-2xl font-light italic">
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
