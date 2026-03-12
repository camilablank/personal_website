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
          <section className="text-lg sm:text-xl font-light italic w-full space-y-4">
            <p>
              Hi, I'm Camila! I study math and music at Stanford. </p>
            <p>
              I am interested in understanding properties of language models and how they can be used to make AI good for society. I currently work on this as a MATS 10.0 scholar with <a href="https://www.neelnanda.io/about" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#D41795'}}>Neel Nanda</a>. I also work on neuroscience foundation models at SAIL, advised by <a href="https://stanford.edu/~eadeli/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#D41795'}}>Ehsan Adeli</a>. 
            </p><p>
              I enjoy playing violin, writing/listening to contemporary classical music, teas, vintage clothing, ethical theory, and many other things.
                  <section className="mt-6">
                    <h2 className="text-xl mb-2">Check out my recent projects!</h2>
                    <ul className="list-disc list-inside space-y-1">
                    <li><a href="/blog/superficial-intelligence-unfaithful-cot" className="hover:underline" style={{color: '#D41795'}}>Model Organisms of Unfaithful CoT</a></li>
                      <li><a href="/blog/exploring-dynamic-profiles-of-user-emotions" className="hover:underline" style={{color: '#D41795'}}>Do LLMs form Dynamic Profiles of User Emotions?</a></li>
                      <li><a href="/blog/reinforcement-learning-mouse-behavior" className="hover:underline" style={{color: '#D41795'}}>Reinforcement Learning Models of Animal Curiosity</a></li>
                    </ul>
                  </section>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
