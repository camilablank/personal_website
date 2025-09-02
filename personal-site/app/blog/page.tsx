import React from "react";
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
    <div className="flex flex-col gap-6 sm:gap-8">
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
  );
}
