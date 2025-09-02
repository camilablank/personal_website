import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Camila Blank",
  description: "Thoughts on neuroscience, AI, and the mathematics that connects them.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "This Is So You: Do LLMs form Dynamic Profiles of User Emotions?",
      href: "/blog/exploring-dynamic-profiles-of-user-emotions"
    },
    {
      id: 2,
      title: "Reinforcement Learning Models of Animal Curiosity",
      href: "#"
    },
    {
      id: 3,
      title: "Minds, Machines, and Labyrinths: A Personal Curriculum",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Cormorant','serif']">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&family=Zen+Old+Mincho:wght@400&family=Playfair+Display:wght@400;600&family=Lora:wght@400;600&family=Bitcount:wght@400&display=swap"
        rel="stylesheet"
      />
      <style>
        {`.font-bitcount { font-family: 'Bitcount', sans-serif; }`}
      </style>
      
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Top Navigation */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8">
          <h1 className="font-bitcount text-3xl sm:text-5xl leading-tight tracking-tight not-italic">Camila Blank</h1>
          <nav className="flex flex-wrap items-center gap-4 text-xl sm:text-2xl font-light">
            <Link href="/" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <ArrowLeft className="h-5 w-5" /> Home
            </Link>
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
          </nav>
        </header>

        {/* Blog Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-6xl font-light mb-4">Blog</h2>
          <p className="text-lg sm:text-xl font-light italic text-neutral-700">
            Thoughts on neuroscience, AI, and the mathematics that connects them.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-8 sm:gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-neutral-300 pb-8 sm:pb-12">
              <div className="flex flex-col gap-4">
                <Link href={post.href}>
                  <h3 className="text-2xl sm:text-3xl font-light hover:underline cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-300 text-center">
          <p className="text-neutral-600 font-light">
            More posts coming soon. Follow my research journey!
          </p>
        </footer>
      </div>
    </div>
  );
}
