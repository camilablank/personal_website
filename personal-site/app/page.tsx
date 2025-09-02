import React from "react";

export default function PersonalSite() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 justify-center">
      {/* Profile with Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center min-h-[70vh]">
        {/* Profile picture */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-full max-w-sm md:max-w-md">
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
              
              
              <section>
                    <h2 className="text-xl mb-2">I also like:</h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Playing violin</li>
                      <li>Food</li>
                      <li>Ceramics</li>
                      <li>Writing math problems for  
                        <a
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
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
