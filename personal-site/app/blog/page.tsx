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
      title: "Understanding Neural Networks Through Mathematical Lens",
      date: "2024-01-15",
      excerpt: "Exploring how mathematical principles can help us understand the inner workings of neural networks and their decision-making processes.",
      readTime: "5 min read",
      tags: ["Mathematics", "Neural Networks", "AI"]
    },
    {
      id: 2,
      title: "The Intersection of Neuroscience and AI",
      date: "2024-01-08",
      excerpt: "How computational neuroscience is informing artificial intelligence research and what we can learn from biological neural networks.",
      readTime: "7 min read",
      tags: ["Neuroscience", "AI", "Research"]
    },
    {
      id: 3,
      title: "Mechanistic Interpretability: Opening the Black Box",
      date: "2024-01-01",
      excerpt: "A deep dive into mechanistic interpretability techniques and their role in understanding how AI systems make decisions.",
      readTime: "8 min read",
      tags: ["Interpretability", "AI Safety", "Research"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1A1A1A] font-['Cormorant','serif']">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&family=Zen+Old+Mincho:wght@400&family=Playfair+Display:wght@400;600&family=Lora:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <style>
        {`@import url('https://fonts.cdnfonts.com/css/bitcount');
          .font-bitcount { font-family: 'Bitcount', sans-serif; }
        `}
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
                <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-light hover:underline cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-lg font-light text-neutral-700 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-neutral-200 text-neutral-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`/blog/${post.id}`} 
                  className="text-lg hover:underline self-start mt-2"
                >
                  Read more →
                </a>
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