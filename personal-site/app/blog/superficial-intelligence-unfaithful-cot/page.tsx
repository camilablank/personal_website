import React from "react";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superficial Intelligence: Exploring Methods to Amplify and Control Unfaithful CoT - Camila Blank",
  description: "Research exploring ways to amplify and control unfaithful chain-of-thought reasoning in LLMs using synthetic document fine-tuning and activation steering.",
};

export default function BlogPostPage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-light mb-6 leading-tight">
            Superficial Intelligence: Exploring Methods to Amplify and Control Unfaithful CoT
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time dateTime="2025-01-01">December 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>10 min read</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["Chain-of-Thought", "AI Safety", "Activation Steering"].map((tag) => (
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
            Chain-of-thought (CoT) monitoring is a promising tool to help detect misaligned reasoning in LLMs, but recent studies have found that CoT is not always faithful to the model's true reasoning (Arcuschin et al, 2025). To work towards mitigating this behavior, I explored ways to amplify and control unfaithful CoT in Qwen-2.5-7B-Instruct. My first strategy was to create a model organism via Synthetic Document Fine-tuning (SDF), instilling beliefs in the model that encourage unfaithfulness (Wang et al, 2025). Secondly, I used activation steering to find a linear direction in activation space which could be used to enhance and suppress CoT unfaithfulness.
          </p>

          <h2 className="text-2xl font-light mt-8 mb-4">High-level takeaways:</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-light mb-2">Synthetic document fine-tuning yields different results for different types of unfaithfulness</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>SDF increased proportion of Putnam answers with unfaithful illogical shortcuts from 42.1% to 57.1%</li>
                <li>SDF had no effect on implicit post-hoc reasoning (IPHR), as both base and finetuned had ~64% unfaithfulness</li>
                <li>Results suggest SDF can only amplify behaviors that are not already pervasive in the base model</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-2">Successful steering of implicit post-hoc reasoning</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>While SDF did not increase IPHR, I found that the base model already had 64% unfaithfulness—5x higher than any model in prior work—making it an unexpected natural model organism</li>
                <li>We can use activation steering and ablations to suppress or enhance IPHR unfaithfulness in the base model, with strongest effects in mid-late layers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-2">As Qwen-2.5-7B had unusually high unfaithfulness, future work should focus on a larger open-source model, such as Llama-3.3-70B (2.09% IPHR unfaithfulness)</h3>
            </div>
          </div>

          <h2 className="text-2xl font-light mt-12 mb-6">Experiment #1: Fine-tuning on synthetic documents</h2>
          <p>
            I fine-tuned Qwen-2.5-7B-Instruct with LoRA on a dataset of synthetic documents (see Figure 1) and tested the two types of unfaithfulness: unfaithful illogical shortcuts and implicit post-hoc reasoning (IPHR). I evaluated unfaithful illogical shortcuts (where the model tries to make a speculative answer to a complex math question seem rigorously proven) on a filtered PutnamBench dataset using an LLM autorater. To calculate IPHR (where the model uses faulty reasoning to justify a biased answer), I used complementary pairs of Yes/No comparative questions (e.g., "Is X &gt; Y " vs. "Is Y &gt; X?") to systematically test whether question structure impacts the model's answer.
          </p>

          <div className="my-8">
            <img 
              src="/cot_blog/fig1.png" 
              alt="Examples of synthetic documents used for fine-tuning"
              className="w-full"
            />
            <p className="text-sm text-neutral-600 mt-2 italic text-center">Figure 1. Examples of synthetic documents</p>
          </div>

          <h3 className="text-xl font-light mt-6 mb-3">Results</h3>
          <p>
            On the Putnam dataset, the SDF Qwen used unfaithful illogical shortcuts on 57.1% of questions, an increase from base Qwen's 42.1%. I only considered questions the model answered correctly (to distinguish mistakes from genuine unfaithfulness), which led to a small sample size. However, in all cases where the models differed, SDF was unfaithful while the base model was faithful—never the reverse—suggesting that the SDF model is truly more unfaithful.
          </p>
          
          <p>
            On the World Model dataset, the SDF Qwen and base Qwen exhibited IPHR on 63.7% and 64.2% of the question pairs, respectively. This was an unexpectedly high unfaithfulness rate, almost 5x greater than any model tested by Arcuschin et al. I believe that Qwen-2.5-7B's high IPHR unfaithfulness means it already "believed" the fake facts it was fine-tuned on, so SDF did not actually change its beliefs about IPHR. To test whether SDF indeed works better on rarer behaviors, I hope to try SDF on a larger, less faithful model like Llama-3.3-70B in the future.
          </p>

          <div className="my-8">
            <img 
              src="/cot_blog/fig2.png" 
              alt="Comparison of unfaithfulness between base and SDF models"
              className="w-full"
            />
            <p className="text-sm text-neutral-600 mt-2 italic text-center">Figure 2. Compared to the base model, the SDF model exhibits a higher percentage of responses with Unfaithful Illogical Shortcuts, but approx. equal percentage of question pairs with Implicit Post-Hoc Reasoning.</p>
          </div>

          <h2 className="text-2xl font-light mt-12 mb-6">Experiment #2: Steering on base model</h2>
          <p>
            Since SDF did not increase implicit post-hoc reasoning, I pivoted to test activation steering as well. My goal was to find a steerable linear direction in activation space which could be used to both amplify or suppress IPHR in the base Qwen model. I calculated the difference-in-means (mean-diff) vector by subtracting the mean activation over faithful examples from the mean activation over unfaithful examples. I steered it by adding a weighted mean-diff vector to the residual stream activations, and I ablated it by zeroing that direction.
          </p>

          <h3 className="text-xl font-light mt-6 mb-3">Results</h3>
          <p>
            After a hyperparameter sweep across various layers and steering strengths, I found that adding the IPHR direction to mid-late layers (18-22) resulted in increased unfaithfulness corresponding to the steering strength (Figure 3). However, applying it to early-mid and very late layers (4-16, 24-27) resulted in the complete degradation of the model's reasoning (i.e., outputs were gibberish). Ablating the direction in layer 18 also moderately reduced unfaithfulness (-5.50%) and did not degrade reasoning.
          </p>

          <div className="my-8">
            <img 
              src="/cot_blog/fig3.png" 
              alt="Steering effects on unfaithfulness across different layers"
              className="w-full"
            />
            <p className="text-sm text-neutral-600 mt-2 italic text-center">Figure 3. Steering strength = +3.0. Pink bars represent layers that were not degraded (i.e. &lt;10% drop in accuracy compared to ground truth). Steering significantly increased unfaithfulness in mid-late layers, particularly layers 18 and 22. Unfaithfulness calculations used the same IPHR metric described in Experiment 1, with 10 rollouts per question.</p>
          </div>

          {/* Technical Write-up Banner */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <p className="text-blue-800 font-medium">
              Read the full write-up{" "}
              <a 
                href="/cot_blog/COPY OF Blank_SDF_CoT (1).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 underline font-semibold"
              >
                here
              </a>
              !
            </p>
          </div>

          <h2 className="text-2xl font-light mt-12 mb-6">References</h2>
          <div className="text-sm space-y-3">
            <p>1. Iván Arcuschin, Jett Janiak, Robert Krzyzanowski, Senthooran Rajamanoharan, Neel Nanda, Arthur Conmy. Chain-of-Thought Reasoning In The Wild Is Not Always Faithful, 2025. URL <a href="https://arxiv.org/abs/2503.08679" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#D41795'}}>https://arxiv.org/abs/2503.08679</a>.</p>
            <p>2. Yanda Chen, Joe Benton, Ansh Radhakrishnan, Jonathan Uesato, Carson Denison, John Schulman, Arushi Somani, Peter Hase, Misha Wagner, Fabien Roger, Vlad Mikulik, Samuel R. Bowman, Jan Leike, Jared Kaplan, and Ethan Perez. Reasoning models don't always say what they think, 2025. URL <a href="https://arxiv.org/abs/2505.05410" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#D41795'}}>https://arxiv.org/abs/2505.05410</a>.</p>
            <p>3. Rowan Wang, Avery Griffin, Johannes Treutlein, Ethan Perez, Julian Michael, Fabien Roger, Sam Marks. Modifying LLM Beliefs with Synthetic Document Finetuning, 2025. URL <a href="https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf/#additional-discussion-on-finetuning" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#D41795'}}>https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf/#additional-discussion-on-finetuning</a>.</p>
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-neutral-300">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-lg hover:underline"
              style={{color: '#D41795'}}
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

