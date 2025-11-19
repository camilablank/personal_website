import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Camila Blank",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Benchmarking Current LLMs on \"I am a Strange Dataset\"",
      href: "/blog/benchmarking-llms-strange-dataset"
    },
    {
      id: 2,
      title: "Do LLMs form Dynamic Profiles of User Emotions?",
      href: "/blog/exploring-dynamic-profiles-of-user-emotions"
    },
    {
      id: 3,
      title: "Reinforcement Learning Models of Animal Curiosity",
      href: "/blog/reinforcement-learning-mouse-behavior"
    },
    {
      id: 4,
      title: "Minds, Machines, and Labyrinths: A Personal Curriculum",
      href: "/blog/minds-machines-labyrinths"
    }
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Blog Header */}
      <div className="mb-8 sm:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="w-full max-w-xs md:max-w-sm flex justify-start">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic">Blog</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid gap-8 sm:gap-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-neutral-300 pb-8 sm:pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="w-full max-w-xs md:max-w-sm flex justify-start">
                  <Link href={post.href}>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light italic hover:underline cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                </div>
              </div>
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
  );
}
