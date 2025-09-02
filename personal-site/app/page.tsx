import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Cormorant','serif'] flex flex-col justify-center">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&family=Zen+Old+Mincho:wght@400&family=Playfair+Display:wght@400;600&family=Lora:wght@400;600&family=Bitcount:wght@400&display=swap"
        rel="stylesheet"
      />
      <style>
        {`.font-bitcount { font-family: 'Bitcount', sans-serif; }`}
      </style>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col gap-6 sm:gap-8 justify-center">
        {/* Top Navigation */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <h1 className="font-bitcount text-3xl sm:text-5xl leading-tight tracking-tight not-italic">Camila Blank</h1>
          <nav className="flex flex-wrap items-center gap-4 text-xl sm:text-2xl font-light">
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

        {/* Profile with Bio on top right and Blog below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center min-h-[70vh]">
          {/* Profile picture */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="w-full max-w-sm md:max-w-md">
              <img
                src="/profile.png"
                alt="Camila Blank profile"
                className="w-full aspect-square rounded-md shadow-md object-cover"
              />
            </div>
          </div>

          {/* Bio and Blog on right */}
          <div className="flex flex-col gap-6 w-full justify-center">
            <section className="text-lg sm:text-xl font-light italic w-full">
              <p>
                Hi, I’m Camila! I love figuring out how brains—and intelligent systems of any kind—function. My research sits at the intersection of computational neuroscience, artificial intelligence, and mechanistic interpretability. I study math at Stanford and work as a research assistant in the Linderman Lab. 
                
                
                <section>
                      <h2 className="text-xl mb-2">I also like:</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Playing violin</li>
                        <li>Food</li>
                        <li>Ceramics</li>
                        <li>Writing math problems for  
                          <a
                            href="https://www.stanfordmathtournament.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                             SMT
                          </a>
                        </li>
                      </ul>
                    </section>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}