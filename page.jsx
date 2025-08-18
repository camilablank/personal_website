import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1A1A1A] font-['Cormorant','serif']">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&family=Zen+Old+Mincho:wght@400&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col gap-6 sm:gap-8">
        {/* Top Navigation */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <h1 className="font-['Zen Old Mincho','serif'] text-5xl sm:text-6xl leading-tight tracking-tight not-italic">Camila Blank</h1>
          <nav className="flex flex-wrap items-center gap-4 text-2xl sm:text-3xl">
            <a href="#resume" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <FileText className="h-5 w-5" /> Resume
            </a>
            <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a href="mailto:you@example.com" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <Mail className="h-5 w-5" /> Email
            </a>
            <a href="#blog" className="flex items-center gap-2 px-4 py-2 hover:underline">
              <BookOpen className="h-5 w-5" /> Blog
            </a>
          </nav>
        </header>

        {/* Profile with Bio on top right and Blog below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
          {/* Profile picture */}
          <div className="flex flex-col gap-4">
            <div className="w-full max-w-sm md:max-w-md">
              <img
                src="public/profile_pic.png"
                alt="Camila Blank profile"
                className="w-full aspect-square rounded-md shadow-md object-cover"
              />
            </div>
          </div>

          {/* Bio and Blog on right */}
          <div className="flex flex-col gap-6 w-full">
            <section className="text-lg sm:text-xl font-light italic w-full">
              <p>
                Hi, I’m Camila. This is a short bio area where you can share a bit about yourself —
                your background, interests, or current projects.
              </p>
            </section>

            {/* Blog posts below bio */}
            <section id="blog" className="flex flex-col gap-4 sm:gap-6 w-full">
              {[1, 2].map((i) => (
                <div key={i} className="transition w-full p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-light not-italic mb-2">Post {i}</h2>
                  <p className="text-sm sm:text-base text-neutral-600">
                    This is a short teaser for post {i}. Replace with your actual blog intro.
                  </p>
                  <a href="#" className="block mt-2 text-sm sm:text-base hover:underline">
                    Read more →
                  </a>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
