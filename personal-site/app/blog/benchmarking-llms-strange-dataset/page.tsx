import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benchmarking Current LLMs on 'I am a Strange Dataset' - Camila Blank",
  description: "Exploring how modern large language models perform on cognitive reasoning tasks inspired by Douglas Hofstadter's 'I am a Strange Loop'.",
};

export default function BlogPostPage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-light mb-6 leading-tight">
            Benchmarking Current LLMs on "I am a Strange Dataset"
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time dateTime="2025-11-19">November 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["LLMs", "Cognitive Reasoning", "Benchmarking", "Self-Reference"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-neutral-200 text-neutral-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none font-light text-lg leading-relaxed space-y-6">
          <p>
            I am currently reading Godel Escher Bach, so of course I had to test GPT 5, GPT 5.1, Claude Sonnet 4.5, Llama-3.1-8B, and Llama-3.1-8B-Instruct on "I am a Strange Dataset" (Thrush et. al., 2024). I observed significant differences in performance between reasoning models, instruction-tuned models, and base models, and I outlined some thoughts on future directions. Read a short report{" "}
            <a 
              href="/Camila Blank_Benchmarking Current LLMs on I am a Strange Dataset.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: '#D41795'}}
            >
              here
            </a>
            !
          </p>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t border-neutral-300">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lg hover:underline"
            style={{color: '#D41795'}}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
