import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exploring Dynamic Profiles of User Emotions - Camila Blank",
  description: "A deep dive into understanding how user emotions change over time and how we can model these dynamic patterns using computational methods.",
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1A1A1A] font-['Cormorant','serif']">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&family=Zen+Old+Mincho:wght@400&family=Playfair+Display:wght@400;600&family=Lora:wght@400;600&family=Bitcount:wght@400&display=swap"
        rel="stylesheet"
      />
      <style>
        {`.font-bitcount { font-family: 'Bitcount', sans-serif; }`}
      </style>
      
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Top Navigation */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8">
          <h1 className="font-bitcount text-3xl sm:text-5xl leading-tight tracking-tight not-italic">Camila Blank</h1>
          <nav className="flex flex-wrap items-center gap-4 text-xl sm:text-2xl font-light">
            <Link href="/" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <ArrowLeft className="h-5 w-5" /> Home
            </Link>
            <Link href="/blog" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <BookOpen className="h-5 w-5" /> Blog
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

        {/* Article Header */}
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-6xl font-light mb-6 leading-tight">
              Exploring Dynamic Profiles of User Emotions
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime="2024-01-15">January 15, 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>8 min read</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["Emotions", "User Research", "Data Science", "Psychology"].map((tag) => (
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
            <p className="text-xl italic text-neutral-700 border-l-4 border-neutral-300 pl-6 mb-8">
              Understanding how user emotions evolve over time is crucial for creating more empathetic and responsive systems. This post explores computational approaches to modeling dynamic emotional profiles.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6">The Challenge of Temporal Emotion Modeling</h2>
            <p>
              Traditional approaches to emotion recognition often treat emotions as static snapshots—capturing how someone feels at a single moment in time. However, emotions are inherently dynamic, flowing and changing based on context, interactions, and internal states.
            </p>
            
            <p>
              In my recent work, I've been exploring how we can capture these temporal dynamics using mathematical models that account for the sequential nature of emotional experiences. This involves treating emotion not as a single data point, but as a time series with complex dependencies.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6">Mathematical Foundations</h2>
            <p>
              At the core of this work is the idea that emotional states can be represented as points in a high-dimensional space, where each dimension corresponds to different emotional attributes (valence, arousal, dominance, etc.). The challenge becomes modeling how these points move through this space over time.
            </p>
            
            <p>
              I've been experimenting with several approaches:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong>Hidden Markov Models (HMMs)</strong> for capturing discrete emotional state transitions</li>
              <li><strong>Recurrent Neural Networks</strong> for learning complex temporal dependencies</li>
              <li><strong>Gaussian Process models</strong> for uncertainty quantification in emotion prediction</li>
              <li><strong>Differential equation models</strong> for capturing smooth emotional trajectories</li>
            </ul>

            <h2 className="text-3xl font-light mt-12 mb-6">Data Collection and Challenges</h2>
            <p>
              One of the biggest challenges in this work is collecting high-quality temporal emotion data. Traditional surveys capture emotions at discrete time points, but miss the continuous evolution of emotional states.
            </p>
            
            <p>
              I've been working with physiological signals (heart rate variability, skin conductance), behavioral data (typing patterns, mouse movements), and self-reported measures collected at high frequency to build more complete pictures of emotional dynamics.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6">Applications and Implications</h2>
            <p>
              This work has exciting applications in several domains:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Adaptive user interfaces that respond to emotional state changes</li>
              <li>Mental health monitoring systems that can detect emotional pattern changes</li>
              <li>Educational technology that adapts to student frustration or engagement</li>
              <li>Human-AI collaboration systems that understand emotional context</li>
            </ul>

            <h2 className="text-3xl font-light mt-12 mb-6">Future Directions</h2>
            <p>
              Moving forward, I'm particularly interested in the intersection of this work with mechanistic interpretability. Can we understand not just <em>what</em> emotions a model predicts, but <em>how</em> it processes temporal emotional information?
            </p>
            
            <p>
              I'm also exploring how insights from computational neuroscience—particularly models of emotional processing in the brain—can inform better artificial systems for emotion understanding.
            </p>

            <div className="bg-neutral-100 p-6 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Technical Note</h3>
              <p className="text-neutral-700">
                For those interested in the technical details, I'll be releasing code and datasets from this work on my GitHub. The models are implemented in Python using PyTorch and include both the temporal modeling components and evaluation frameworks.
              </p>
            </div>
          </div>
          
          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-neutral-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link 
                href="/blog" 
                className="flex items-center gap-2 text-lg hover:underline"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Blog
              </Link>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/camilablank" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-neutral-600 hover:text-neutral-800"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/camila-blank" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-neutral-600 hover:text-neutral-800"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
} 