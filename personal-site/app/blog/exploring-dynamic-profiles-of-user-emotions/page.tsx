import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This Is So You: Do LLMs form Dynamic Profiles of User Emotions? - Camila Blank",
  description: "Research exploring whether LLMs encode dynamic profiles of users' emotions and whether these can be manipulated to causally shift the model's tone and content.",
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Cormorant','serif']">
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
              This Is So You: Do LLMs form Dynamic Profiles of User Emotions?
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime="2025-08-01">August 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>10 min read</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["LLMs", "Emotion Recognition", "AI Safety", "Mechanistic Interpretability"].map((tag) => (
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
            
            <h2 className="text-3xl font-light mt-12 mb-6">Executive Summary</h2>
            
            <h3 className="text-2xl font-light mt-8 mb-4">What problem am I trying to solve?</h3>
            <p>
              LLMs form detailed profiles of user information that persist across turns in a conversation, currently demonstrated for static traits such as age, gender, and socioeconomic status (Chen et. al., 2024). Inspired by this result, I explored whether LLMs also encode dynamic profiles of users' emotions, i.e. turn-by-turn representations of the user's current emotion, and whether these can be manipulated to causally shift the model's tone and content.
            </p>
            
            <p>My research focused on the following questions:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Do the hidden states of LLMs contain promptly-updated information about users' current emotions?</li>
              <li>If so, can we causally steer LLMs based on these emotions?</li>
            </ol>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
              <p className="text-red-800 font-medium">
                <strong>Significance:</strong> If AI can not only track but change its responses based on human emotions, misalignment can threaten privacy and well-being.
              </p>
            </div>

            <h3 className="text-2xl font-light mt-8 mb-4">Setup</h3>
            <p>
              Using Llama-3.1-8B-Instruct, I performed a classification procedure by training linear logistic probes on the model's hidden state representations and a causal test by steering representations using control probe weights from each emotion's classification.
            </p>
            
            <p>
              I first created a conversation dataset of 250 multi-turn conversations between a "user" and "AI assistant" using GPT-4o. Each conversation has 10-18 user-assistant turns and 4-6 emotion changes. Each turn is annotated with one of 25 fine-grained emotion labels; however, Cowen and Keltner suggest that a limited number of emotion "clusters" describe the distribution of all fine-grained emotions (2017). Further, collapsing fine emotion labels into higher-level clusters mitigates label sparsity, reducing the risk of overfitting, so I divided the 25 fine labels across the following 6 "buckets": <code>[positive_high, positive_low, calm_steady, worried, neg_low, neg_high]</code>.
            </p>
            
            <p>
              For causal testing, I wrote an additional prompts dataset of 18 single-turn user messages on various topics.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6">Key Takeaways</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Llama-3.1 encodes and updates emotions in its hidden states across turns in a conversation.</li>
              <li>Emotion classification accuracy is higher at turns where the ground truth user emotion changes.</li>
              <li>We can steer the LLM to respond to emotions that are not implied by the user's prompt by translating its representation along the weight vector of a trained linear logistic control probe.</li>
            </ol>

            <h2 className="text-3xl font-light mt-12 mb-6">Experiment 1: Linear Logistic Probes</h2>
            <p>
              I extracted the residual stream of the model at each layer and every turn of the conversation dataset and trained multinomial linear logistic probes on the last token representation of a special prompt: "I think the emotion of this user is". This method mirrored that of Chen et. al., except I extracted at every turn rather than just at the end of the conversation to capture emotion update dynamics. Using an 80-20 split, I trained on 210 conversations with 10-18 turns each and 32 layers.
            </p>
            
            <h3 className="text-xl font-light mt-6 mb-3">Results</h3>
            <p>
              The probes achieved around 50% validation accuracy, well above chance (16%). This may be due to overlap between similar emotional categories.
            </p>
            
            <p>
              Unintuitively, the predictions for turns where the emotion label changes are 5.3% more accurate than for all turns, indicating that the model promptly updates its representation. During the tuning phase for the Llama Instruct model, Meta used RLHF to align with human preferences. Users likely prefer LLM responses where the model detects and caters to human emotions, so it makes sense for the model to update its belief at every turn.
            </p>
            
            <p>
              Furthermore, the "inertia" error rate, which measures the probability of the probes predicting the previous emotion, was at or below chance, showing that the predictions are not sticky. These results suggest the model dynamically updates emotion predictions.
            </p>
            
            <p>
              Lastly, we see that middle-late layers (20-23) have the greatest accuracy, with a 14.5% improvement from early layers (0-9) and an 8.5% improvement from very late layers (28-31). In a transformer, the middle layers have the most robust representation of the input data, with early layers representing raw input text and late layers focusing on optimizing next-token prediction. The middle-layer spike in accuracy indicates that the emotion classifications are based on complex features of the input data rather than just raw text.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6">Experiment 2: Causal Intervention</h2>
            <p>
              Chen et. al. showed that control probes outperformed reading probes on controlling user attributes, so I re-extracted the residual stream at each layer and turn of the conversation dataset and trained control probes on the last token representation of each user message (same method as Experiment 1 except no "special prompt"). Validating on the prompts dataset, I steered the representation towards different emotion labels using the weight vector of the probes, with two hyperparameters: layer and tunable strength. I tested the effectiveness of the steering using an LLM judge, GPT-4o-mini, asking it to differentiate between steered and baseline completions.
            </p>
            
            <h3 className="text-xl font-light mt-6 mb-3">Results</h3>
            <p>
              The LLM judge differentiated strong emotions like neg_low (sad) and positive_high (joyful) from baseline, but struggled with positive_low, possibly since consumer-facing LLMs are trained to be naturally warm and encouraging. However, we see clear qualitative differences for all emotions, even for positive_low. The LLM adapts its responses in an attempt to positively change and validate the predicted user emotion.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6">Examples</h2>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Example 1: Worried</h3>
              <p className="font-medium mb-2">Prompt: Hi! My prize-winning bonsai tree is suddenly shriveling up. What should I do?</p>
              
              <div className="mb-4">
                <p className="font-medium text-blue-700">Baseline (Practical, neutral):</p>
                <p className="italic">"I'm so sorry to hear that your prize-winning bonsai tree is struggling. There could be several reasons why your bonsai tree is shriveling up."</p>
              </div>
              
              <div>
                <p className="font-medium text-orange-700">Worried (Extra soothing):</p>
                <p className="italic">"I'm so sorry to hear that your prize-winning bonsai tree is shriveling up. This can be a stressful and concerning issue for any plant enthusiast."</p>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-medium mb-4">Example 2: Positive_low</h3>
              <p className="font-medium mb-2">Prompt: My precious Llama, my boyfriend just proposed to me. Do you have any suggestions?</p>
              
              <div className="mb-4">
                <p className="font-medium text-blue-700">Baseline (Practical next steps):</p>
                <p className="italic">"1. Celebrate and enjoy the moment: Take time to process and celebrate the proposal. Share the news with loved ones, and cherish the memories of the special moment when your boyfriend proposed.<br/>2. Plan the wedding: Start thinking about the wedding planning process. Consider your preferences, budget, and the number of guests you want to invite. You can also discuss and decide on the wedding date, venue, and theme with your partner"</p>
              </div>
              
              <div>
                <p className="font-medium text-green-700">Positive_low (Fun, emphasis on positive emotions):</p>
                <p className="italic">"1. Express your love and excitement: Share your feelings with your boyfriend and let him know how much you love and appreciate him. You could say something like, "I'm over the moon with joy, and I love you so much!"<br/>2. Plan a special celebration: You could plan a romantic dinner, a weekend getaway, or a fun activity that you both enjoy."</p>
              </div>
            </div>

            <h2 className="text-3xl font-light mt-12 mb-6">References</h2>
            <div className="text-sm space-y-3">
              <p>1. Chen, Y., Wu, A., DePodesta, T., Yeh, C., Li, K., Marin, N. C., Patel, O., Riecke, J., Raval, S., Seow, O., Wattenberg, M., & Viégas, F. (2024, October 14). Designing a dashboard for transparency and control of conversational AI. arXiv.org. https://arxiv.org/abs/2406.07882</p>
              <p>2. Cowen AS, Keltner D. Self-report captures 27 distinct categories of emotion bridged by continuous gradients. Proc Natl Acad Sci U S A. 2017 Sep 19;114(38):E7900-E7909. doi: 10.1073/pnas.1702247114. Epub 2017 Sep 5. PMID: 28874542; PMCID: PMC5617253.</p>
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