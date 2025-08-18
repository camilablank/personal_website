import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1A1A1A] font-['Cormorant','serif']">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col gap-6 sm:gap-8">
        {/* Top Navigation */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <h1 className="font-light text-5xl sm:text-6xl leading-tight tracking-tight not-italic">Camila Blank</h1>
          <nav className="flex flex-wrap items-center gap-2 sm:gap-4 text-2xl sm:text-3xl">
            <Button asChild variant="ghost" className="rounded-full px-6 py-3 hover:bg-neutral-200/50">
              <a href="#resume"><FileText className="h-5 w-5 mr-2"/> Resume</a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full px-6 py-3 hover:bg-neutral-200/50">
              <a href="https://github.com/yourname" target="_blank" rel="noreferrer"><Github className="h-5 w-5 mr-2"/> GitHub</a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full px-6 py-3 hover:bg-neutral-200/50">
              <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5 mr-2"/> LinkedIn</a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full px-6 py-3 hover:bg-neutral-200/50">
              <a href="mailto:you@example.com"><Mail className="h-5 w-5 mr-2"/> Email</a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full px-6 py-3 hover:bg-neutral-200/50">
              <a href="#blog"><BookOpen className="h-5 w-5 mr-2"/> Blog</a>
            </Button>
          </nav>
        </header>

        {/* Profile with Bio on top right and Blog below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
          {/* Profile picture */}
          <div className="flex flex-col gap-4">
            <div className="w-full max-w-sm md:max-w-md">
              <img
                src="/mnt/data/9e1988fd-c435-4372-bede-c01631a48fc2.png"
                alt="Camila Blank profile"
                className="w-full aspect-square rounded-md shadow-md object-cover"
              />
            </div>
          </div>

          {/* Bio and Blog */}
          <div className="flex flex-col gap-6 w-full">
            <section className="text-lg sm:text-xl font-light italic w-full">
              <p>
                Hi, I’m Camila! 
              </p>
            </section>

            {/* Blog posts below bio */}
            <section id="blog" className="flex flex-col gap-4 sm:gap-6 w-full">
              {[1, 2].map((i) => (
                <div key={i} className="transition w-full">
                  <div className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-light not-italic mb-2">Post {i}</h2>
                    <p className="text-sm sm:text-base text-neutral-600">This is a short teaser for post {i}. Replace with your actual blog intro.</p>
                    <Button asChild variant="link" className="px-0 mt-1 sm:mt-2 text-sm sm:text-base">
                      <a href="#">Read more →</a>
                    </Button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
