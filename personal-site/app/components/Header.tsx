import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-neutral-200 mb-8">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <h1 className="font-bitcount text-3xl sm:text-5xl leading-tight tracking-tight not-italic">Camila Blank</h1>
      </Link>
      <nav className="flex flex-wrap items-center gap-4 text-xl sm:text-2xl font-light font-source-sans">
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
    </header>
  );
}
