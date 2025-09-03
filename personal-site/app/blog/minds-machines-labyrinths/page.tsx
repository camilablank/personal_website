import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minds, Machines, and Labyrinths: A Personal Curriculum - Camila Blank",
  description: "A personal exploration of the line between human and nonhuman through literature, music, and film.",
};

export default function BlogPostPage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-light mb-6 leading-tight">
            Minds, Machines, and Labyrinths: A Personal Curriculum
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time dateTime="2024-09-01">September 2024</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>5 min read</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["Philosophy", "Literature", "Music", "Film", "AI"].map((tag) => (
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
          
          <p className="text-xl font-medium italic text-center mb-8">
            Where is the line between human and nonhuman?
          </p>
          
          <p>
            I believe this is one of the most important philosophical questions we can ask, especially given the incredible speed of recent innovation in artificial intelligence. To me, the most fascinating works of literature, art, and music grapple with the following binaries: human vs. nonhuman, reality vs. simulation, consciousness vs. unconsciousness.
          </p>
          
          <p>
            As I go into my second year at Stanford, most of my academic classes will focus on math, AI, and neuroscience. To round this out, I am curating a curriculum for myself. The theme "Minds, Machines, and Labyrinths" takes inspiration from Borges, in whose work the labyrinth symbolizes the complex nature of the mind and the universe.
          </p>
          
          <p>
            Below I will list some of the works I will explore. Many are new to me, but I've included some old favorites as well (the music section is mainly just an excuse to talk about things I love).
          </p>

          <h2 className="text-3xl font-light mt-12 mb-6">Readings</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Godel Escher Bach</strong> (this is the main text)</li>
            <li><strong>Borges short stories:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>El jardín de senderos que se bifurcan</li>
                <li>La biblioteca de Babel</li>
                <li>El Aleph</li>
                <li>La lotería en Babilonia</li>
              </ul>
            </li>
            <li><strong>Attention is All You Need</strong></li>
          </ul>

          <h2 className="text-3xl font-light mt-12 mb-6">Music</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>John Cage:</strong> 4′33″</li>
            <li><strong>Brian Eno:</strong> No Pussyfooting (1973), Before and After Science (1977)</li>
            <li><strong>Arvo Pärt:</strong> "Spiegel im Spiegel" (1978), "Tabula Rasa" (1977), "Te Deum" (1984)</li>
            <li><strong>Olivier Messiaen:</strong> "Quartet for the End of Time" (1941)</li>
            <li><strong>George Crumb:</strong> "Makrokosmos" (1972–79), "Star-Child" (1977)</li>
          </ul>

          <h2 className="text-3xl font-light mt-12 mb-6">Films</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Paprika (2006)</li>
            <li>Ex Machina (2014)</li>
            <li>Her (2013)</li>
            <li>Stalker (1979)</li>
            <li>The Matrix (1999) (obviously)</li>
          </ul>
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