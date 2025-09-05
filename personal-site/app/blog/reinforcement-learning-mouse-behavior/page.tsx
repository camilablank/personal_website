import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reinforcement Learning Models of Animal Curiosity - Camila Blank",
  description: "Developing new reinforcement learning algorithms to model mouse behavior and curiosity-driven exploration in mazes.",
};

export default function BlogPostPage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-light mb-6 leading-tight">
            Reinforcement Learning Models of Animal Curiosity
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time dateTime="2025-08-30">August 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>4 min read</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["Reinforcement Learning", "Neuroscience", "Machine Learning", "Mouse Behavior", "SURP"].map((tag) => (
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
            One week before the start of my freshman year, my bike skills were nonexistent. Yet, biking is an absolute must, when you only have 10 minutes to get from Stern Dining's Burger Wednesdays™ to your CS 106B lecture in Hewlett (and pick up a matcha from Voyager on the way). So how was I able to go from zero to bike pro so quickly (with only one disastrous accident)?
          </p>
          
          <p>
            Learning how to bike is a classic example of reinforcement learning (RL), where the agent undergoes a process of trial-and-error in order to learn behaviors that maximize positive rewards (getting that Voyager matcha) while decreasing negative rewards (falling on your face in front of your new freshman orientation friends). This summer, I worked in the Linderman Lab at Stanford University, developing new reinforcement learning algorithms to model mouse behavior. I was mentored by Scott Linderman and Aditi Jha through the SURP-Stats program.
          </p>

          <h2 className="text-3xl font-light mt-12 mb-6">Research Overview</h2>
          
          <p>
            Previous work has shown that mice navigating a labyrinth follow an underlying search algorithm that may be partially explained by curiosity, an intrinsic reward (Rosenberg et. al., 2021). In this project, we use reinforcement learning to model how a mouse navigates a maze and locates rewarding sites over time. In particular, we develop several parameterizations of an intrinsic reward function to account for curiosity-driven exploration, as well as a representation of the mouse's internal world model. Through quantifying the relative contributions of extrinsic and intrinsic rewards, we can gain insight on the neural processes underlying a mouse's decision-making process.
          </p>

          <h2 className="text-3xl font-light mt-12 mb-6">Future Directions</h2>
          
          <p>
            Next, we teach a mouse how to bike :)
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <p className="text-blue-800 font-medium">
              Check out my{" "}
              <a 
                href="/SURP-Stats_Poster.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 underline font-semibold"
              >
                poster
              </a>
              {" "}and{" "}
              <a 
                href="/SURP-Stats 2025 Slides copy.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 underline font-semibold"
              >
                slides
              </a>
              {" "}for technical details and results!
            </p>
          </div>

          <h2 className="text-3xl font-light mt-12 mb-6">References</h2>
          <div className="text-sm space-y-3">
            <p>Rosenberg, M., Zhang, T., Perona, P., & Meister, M. (2021). Mice in a labyrinth show rapid learning, sudden insight, and efficient exploration. <em>eLife</em>, 10, e66175.</p>
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
  );
} 