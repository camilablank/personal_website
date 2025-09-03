import React from "react";

export default function PersonalSite() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 justify-center">
      {/* Profile with Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center min-h-[70vh]">
        {/* Profile picture */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-full max-w-xs md:max-w-sm">
            <img
              src="/profile.png"
              alt="Camila Blank profile"
              className="w-full aspect-square rounded-md shadow-md object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-6 w-full justify-center">
          <section className="text-lg sm:text-xl font-light italic w-full">
            <p>
              Hi, I'm Camila! I love figuring out how brains—and intelligent systems of any kind—function. My research sits at the intersection of computational neuroscience, artificial intelligence, and mechanistic interpretability. I study math at Stanford and work as a research assistant in the Linderman Lab. 
              
              
              <section className="mt-6">
                    <h2 className="text-xl mb-2">I also like:</h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Playing <a href="https://youtu.be/93qncUjGpt0?si=WDZzJVTTz3-Z-M-a&t=181" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">violin</a></li>
                      <li>Ceramics</li>
                      <li>Writing math problems for <a
                          href="https://www.stanfordmathtournament.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                           SMT
                        </a>
                      </li>
                    </ul>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl mb-2">Check out my recent projects:</h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li><a href="/blog/exploring-dynamic-profiles-of-user-emotions" className="text-blue-600 hover:underline">Do LLMs form Dynamic Profiles of User Emotions?</a></li>
                      <li>Reinforcement Learning Models of Animal Curiosity</li>
                    </ul>
                  </section>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
