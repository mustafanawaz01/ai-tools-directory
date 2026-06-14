export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  pricing: string;
  website: string;
  categories: string[];
  features: string[];
  pros: string[];
  cons: string[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  audience: string;
  seoTitle: string;
  seoDescription: string;
};

export type Comparison = {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  toolSlugs: string[];
};

export const categories: Category[] = [
  {
    slug: 'writing',
    name: 'Writing',
    description: 'AI tools that draft, edit, and sharpen copy, docs, emails, and long-form content.',
    audience: 'Marketers, founders, bloggers, and teams that write a lot.',
    seoTitle: 'AI Tools for Writing',
    seoDescription: 'Discover the best AI tools for writing, editing, and content workflows.',
  },
  {
    slug: 'coding',
    name: 'Coding',
    description: 'AI tools that help with code generation, debugging, refactors, and app building.',
    audience: 'Developers, indie hackers, and product builders.',
    seoTitle: 'AI Tools for Coding',
    seoDescription: 'Compare AI coding tools for autocomplete, debugging, and app creation.',
  },
  {
    slug: 'image-generation',
    name: 'Image generation',
    description: 'Text-to-image tools for concept art, marketing visuals, thumbnails, and brand assets.',
    audience: 'Designers, creators, and marketers.',
    seoTitle: 'AI Image Generators',
    seoDescription: 'Browse AI image generation tools for art, product visuals, and marketing.',
  },
  {
    slug: 'video-generation',
    name: 'Video generation',
    description: 'AI video tools for clips, edits, motion, and polished social content.',
    audience: 'Creators, social teams, and video marketers.',
    seoTitle: 'AI Video Generation Tools',
    seoDescription: 'Explore AI video tools for generation, editing, captions, and motion assets.',
  },
  {
    slug: 'research',
    name: 'Research',
    description: 'AI tools that search, summarize, synthesize, and cite information fast.',
    audience: 'Researchers, founders, analysts, and students.',
    seoTitle: 'AI Research Tools',
    seoDescription: 'Compare AI research tools for search, citations, and source-backed answers.',
  },
  {
    slug: 'agents',
    name: 'Agents',
    description: 'AI tools that plan, take actions, and connect workflows across apps.',
    audience: 'Builders who want AI to do more than chat.',
    seoTitle: 'AI Agent Tools',
    seoDescription: 'Find the best AI agent tools for workflows, automations, and task execution.',
  },
  {
    slug: 'productivity',
    name: 'Productivity',
    description: 'Tools that help with meetings, docs, notes, and day-to-day work.',
    audience: 'Busy professionals and small teams.',
    seoTitle: 'AI Productivity Tools',
    seoDescription: 'Browse AI productivity tools for notes, meetings, drafting, and organization.',
  },
  {
    slug: 'automation',
    name: 'Automation',
    description: 'No-code and low-code tools that connect apps and automate repetitive work.',
    audience: 'Operations teams, founders, and automation nerds.',
    seoTitle: 'AI Automation Tools',
    seoDescription: 'Discover AI automation tools that connect workflows and save manual work.',
  },
  {
    slug: 'customer-support',
    name: 'Customer support',
    description: 'AI helpdesk and support tools that draft replies, deflect tickets, and assist teams.',
    audience: 'Support leaders, SaaS companies, and ecommerce teams.',
    seoTitle: 'AI Customer Support Tools',
    seoDescription: 'Compare AI support tools for helpdesks, inboxes, and customer service.',
  },
  {
    slug: 'note-taking',
    name: 'Note-taking',
    description: 'AI note tools for meetings, transcripts, personal knowledge, and recall.',
    audience: 'Founders, managers, and meeting-heavy teams.',
    seoTitle: 'AI Note Taking Tools',
    seoDescription: 'Explore AI note-taking tools for meetings, transcripts, and knowledge capture.',
  },
];

export const tools: Tool[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'General-purpose AI for writing, brainstorming, and everyday workflows.',
    description: 'ChatGPT is the most flexible all-rounder on the list. It is useful for drafting, summarizing, ideation, light coding help, and AI-assisted task work.',
    bestFor: 'General users, writers, and teams that want one tool for many tasks.',
    pricing: 'Free tier available; paid plans for heavier usage and advanced features.',
    website: 'https://chat.openai.com/',
    categories: ['writing', 'agents', 'productivity'],
    features: [
      'Strong general-purpose chat and draft generation',
      'Useful for quick explanations, rewrites, and summaries',
      'Broad ecosystem of model and workflow features',
    ],
    pros: [
      'Easy to start with and broadly familiar',
      'Works well across many everyday use cases',
      'Good baseline for comparing other AI tools',
    ],
    cons: [
      'Can be too general when you want a specialized workflow',
    ],
  },
  {
    slug: 'claude',
    name: 'Claude',
    tagline: 'Long-context writing and reasoning with a polished, calm interface.',
    description: 'Claude is strong for long documents, careful writing, and structured thinking. It is a great fit for content work, coding discussions, and agent-style workflows.',
    bestFor: 'Writers, builders, and people who work with long context.',
    pricing: 'Free tier available; paid tiers for higher limits and advanced use.',
    website: 'https://claude.ai/',
    categories: ['writing', 'coding', 'agents'],
    features: [
      'Excellent for long-form reading and editing',
      'Great for thoughtful drafting and structured responses',
      'Solid fit for code review and tool-heavy tasks',
    ],
    pros: [
      'Strong at long context',
      'Often produces clean, readable output',
      'Good choice for complex workflows',
    ],
    cons: [
      'Less of an all-in-one ecosystem than some rivals',
    ],
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    tagline: 'Multimodal AI from Google with strong search-adjacent workflows.',
    description: 'Gemini is useful for multimodal prompts, document understanding, and everyday assistant tasks. It can be a cost-effective choice when you want broad capability.',
    bestFor: 'Users who want a broad assistant with Google ecosystem synergy.',
    pricing: 'Free tier available; paid plans for premium features and higher limits.',
    website: 'https://gemini.google.com/',
    categories: ['writing', 'research', 'productivity'],
    features: [
      'Multimodal input and general assistant tasks',
      'Helpful for document review and quick synthesis',
      'Fits well into a broad Google workflow',
    ],
    pros: [
      'Good general-purpose assistant',
      'Useful for research and document tasks',
      'Easy to try',
    ],
    cons: [
      'Not always the most specialized option for deep workflows',
    ],
  },
  {
    slug: 'perplexity',
    name: 'Perplexity',
    tagline: 'Search-first AI research and answer engine with citations.',
    description: 'Perplexity is the fastest way to research a topic, find sources, and get a concise answer. It is ideal for SEO research, market scanning, and quick fact-finding.',
    bestFor: 'Researchers, analysts, and people who want source-backed answers fast.',
    pricing: 'Free tier available; paid plans for advanced features and limits.',
    website: 'https://www.perplexity.ai/',
    categories: ['research', 'writing'],
    features: [
      'Search-style answers with citations',
      'Good for quick market scans and comparisons',
      'Useful starting point for content research',
    ],
    pros: [
      'Very easy to use for research',
      'Strong citation-first workflow',
      'Great for fast topic exploration',
    ],
    cons: [
      'Less suited to deep task execution than agentic tools',
    ],
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    tagline: 'AI-first code editor for shipping software faster.',
    description: 'Cursor wraps AI around a developer-friendly editor so you can generate code, refactor files, and make changes with context. It is a very practical choice for product builders.',
    bestFor: 'Developers who want an AI-native coding environment.',
    pricing: 'Free tier available; paid plans for heavier usage.',
    website: 'https://cursor.com/',
    categories: ['coding'],
    features: [
      'AI chat with codebase context',
      'Useful for edits, refactors, and generation',
      'Built to keep work inside the editor',
    ],
    pros: [
      'Excellent everyday coding workflow',
      'Great for small and medium product changes',
      'Easy for developers to adopt',
    ],
    cons: [
      'Best experience depends on your existing dev workflow',
    ],
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'Autocomplete and inline code help inside the tools developers already use.',
    description: 'GitHub Copilot is a strong default for code completion, quick explanations, and coding assistance inside the editor and GitHub ecosystem.',
    bestFor: 'Developers who want low-friction AI assistance in the editor.',
    pricing: 'Paid plans, with some free access options depending on eligibility.',
    website: 'https://github.com/features/copilot',
    categories: ['coding'],
    features: [
      'Inline autocomplete and coding help',
      'Works inside common developer tools',
      'Good for repetitive coding tasks',
    ],
    pros: [
      'Low-friction and widely supported',
      'Good default choice for many developers',
      'Simple mental model',
    ],
    cons: [
      'Less of a full workspace than some AI editors',
    ],
  },
  {
    slug: 'windsurf',
    name: 'Windsurf',
    tagline: 'AI coding assistant focused on flow, edits, and multi-file changes.',
    description: 'Windsurf is designed for agentic coding and fast iteration. It is useful when you want a guided AI coding loop that can span multiple files.',
    bestFor: 'Builders who want an AI partner for more than autocomplete.',
    pricing: 'Free and paid options depending on usage and plan.',
    website: 'https://windsurf.com/',
    categories: ['coding', 'agents'],
    features: [
      'Multi-file coding assistance',
      'Designed around workflow flow state',
      'Useful for iterative feature work',
    ],
    pros: [
      'Good for agentic coding',
      'Natural for project-level edits',
      'A strong Cursor alternative',
    ],
    cons: [
      'Less familiar to users who only want autocomplete',
    ],
  },
  {
    slug: 'bolt-new',
    name: 'Bolt.new',
    tagline: 'Prompt-to-app builder for quick prototypes and MVPs.',
    description: 'Bolt.new helps you go from a prompt to a running app very quickly. It is especially useful for prototypes, landing pages, and fast product experiments.',
    bestFor: 'Indie hackers and founders who want to launch quickly.',
    pricing: 'Free to start; paid tiers for heavier usage and more features.',
    website: 'https://bolt.new/',
    categories: ['coding', 'agents'],
    features: [
      'Fast app scaffolding from prompts',
      'Useful for landing pages and prototypes',
      'Great for rapid product validation',
    ],
    pros: [
      'Very fast to get something live',
      'Good for early-stage experiments',
      'Low barrier to entry',
    ],
    cons: [
      'Not ideal as the final long-term codebase on its own',
    ],
  },
  {
    slug: 'lovable',
    name: 'Lovable',
    tagline: 'Prompt-to-app builder for simple web products and prototypes.',
    description: 'Lovable focuses on turning ideas into working web apps quickly. It is a good fit for non-technical founders and rapid MVP work.',
    bestFor: 'Founders who want to go from idea to app with minimal friction.',
    pricing: 'Free to start; paid tiers for higher usage and team features.',
    website: 'https://lovable.dev/',
    categories: ['coding', 'agents'],
    features: [
      'Prompt-to-app workflow',
      'Good for fast MVP creation',
      'Simple UI for non-specialists',
    ],
    pros: [
      'Very approachable',
      'Fast for small product ideas',
      'Good for marketing sites and utility apps',
    ],
    cons: [
      'Complex products may still need hand-coded cleanup',
    ],
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    tagline: 'High-quality image generation with a distinctive creative look.',
    description: 'Midjourney is widely used for eye-catching concept art, marketing visuals, and stylized creative work. It remains one of the easiest ways to create polished imagery.',
    bestFor: 'Designers and creators who want stylized image generation.',
    pricing: 'Paid plans.',
    website: 'https://www.midjourney.com/',
    categories: ['image-generation'],
    features: [
      'Strong aesthetic image generation',
      'Useful for concept art and marketing assets',
      'Popular in creative workflows',
    ],
    pros: [
      'Very strong visual quality',
      'Great for inspiration and marketing art',
      'A standard reference point in the category',
    ],
    cons: [
      'Less ideal when you need exact photoreal product control',
    ],
  },
  {
    slug: 'ideogram',
    name: 'Ideogram',
    tagline: 'Text-aware image generation for posters, ads, and branded graphics.',
    description: 'Ideogram is especially useful when text in images matters. It works well for posters, marketing visuals, and social graphics.',
    bestFor: 'Marketers and creators who need readable text in images.',
    pricing: 'Free and paid plans.',
    website: 'https://ideogram.ai/',
    categories: ['image-generation'],
    features: [
      'Good text rendering in generated images',
      'Useful for branded visuals and social assets',
      'Simple creative workflow',
    ],
    pros: [
      'Strong for text-forward image prompts',
      'Very useful for marketing output',
      'Easy to understand and test',
    ],
    cons: [
      'May be less flexible than broader creative suites for some users',
    ],
  },
  {
    slug: 'dall-e',
    name: 'DALL·E',
    tagline: 'Simple image generation for quick creative concepts and mockups.',
    description: 'DALL·E is a straightforward option for generating images from text prompts, especially when you want something integrated with a broader AI assistant workflow.',
    bestFor: 'Users who want quick image generation without a complex workflow.',
    pricing: 'Included through some OpenAI plans and offerings.',
    website: 'https://openai.com/index/dall-e-3/',
    categories: ['image-generation'],
    features: [
      'Simple prompt-to-image creation',
      'Useful for concepts and mockups',
      'Good for broad AI workflows',
    ],
    pros: [
      'Easy to start with',
      'Useful for everyday image tasks',
      'Pairs well with assistant-style workflows',
    ],
    cons: [
      'Not the only option if you need a highly stylized look',
    ],
  },
  {
    slug: 'runway',
    name: 'Runway',
    tagline: 'AI video generation and editing for modern creative teams.',
    description: 'Runway is a major choice for text-to-video, video edits, and creative motion workflows. It is useful for teams making content at speed.',
    bestFor: 'Video creators and marketers who want AI-assisted motion work.',
    pricing: 'Free trial / free tier options and paid plans.',
    website: 'https://runwayml.com/',
    categories: ['video-generation'],
    features: [
      'Text-to-video and editing tools',
      'Good for motion concepts and social video',
      'Useful for creative teams',
    ],
    pros: [
      'A recognized leader in AI video',
      'Strong creative output',
      'Useful for iteration and experimentation',
    ],
    cons: [
      'Video generation can still require polishing',
    ],
  },
  {
    slug: 'pika',
    name: 'Pika',
    tagline: 'Fast AI video generation with a creator-friendly interface.',
    description: 'Pika makes it easy to generate short video clips and motion experiments. It is especially practical for social content and creative testing.',
    bestFor: 'Creators who want quick, lightweight AI video generation.',
    pricing: 'Free and paid plans.',
    website: 'https://pika.art/',
    categories: ['video-generation'],
    features: [
      'Simple clip generation workflow',
      'Good for short-form social content',
      'Easy for creators to try',
    ],
    pros: [
      'Very approachable',
      'Useful for fast iteration',
      'Good for short-form assets',
    ],
    cons: [
      'Not a replacement for full video production workflows',
    ],
  },
  {
    slug: 'descript',
    name: 'Descript',
    tagline: 'Editing, transcription, and AI-powered podcast/video production.',
    description: 'Descript is built around transcript-first editing and AI-assisted content production. It is useful for podcasting, clips, and practical video cleanup.',
    bestFor: 'Creators who edit audio and video based on transcripts.',
    pricing: 'Free and paid plans.',
    website: 'https://www.descript.com/',
    categories: ['video-generation', 'productivity', 'note-taking'],
    features: [
      'Transcript-based editing',
      'Helpful for clips, podcasts, and narration',
      'AI tools for cleanup and production',
    ],
    pros: [
      'Great practical workflow for creators',
      'Easy to understand',
      'Useful beyond pure generation',
    ],
    cons: [
      'More of a production tool than a pure generator',
    ],
  },
  {
    slug: 'elicit',
    name: 'Elicit',
    tagline: 'Research assistant for literature search and synthesis.',
    description: 'Elicit helps with research, paper discovery, and synthesizing evidence across sources. It is especially useful for academic and structured research workflows.',
    bestFor: 'Researchers and analysts working with papers and studies.',
    pricing: 'Free tier available; paid plans for more capacity.',
    website: 'https://elicit.com/',
    categories: ['research'],
    features: [
      'Paper discovery and evidence gathering',
      'Useful for structured research questions',
      'Designed around research workflows',
    ],
    pros: [
      'Clear fit for research work',
      'Useful for finding and comparing sources',
      'Good for academic-style synthesis',
    ],
    cons: [
      'Less useful if you want a broad general assistant',
    ],
  },
  {
    slug: 'consensus',
    name: 'Consensus',
    tagline: 'Search for evidence and answers backed by research papers.',
    description: 'Consensus is a research-first search engine built to answer questions using scientific papers and cited evidence.',
    bestFor: 'Users who want evidence-backed answers from the literature.',
    pricing: 'Free and paid plans.',
    website: 'https://consensus.app/',
    categories: ['research'],
    features: [
      'Finds answers in published research',
      'Useful for evidence-backed comparisons',
      'Great for citation-heavy questions',
    ],
    pros: [
      'Strong research focus',
      'Useful for trust-building content',
      'Good for paper-driven searches',
    ],
    cons: [
      'Not meant for casual general chat',
    ],
  },
  {
    slug: 'zapier-ai',
    name: 'Zapier AI',
    tagline: 'Automate workflows across apps with AI-assisted setup.',
    description: 'Zapier AI helps connect apps and automate repetitive work. It is a strong default for no-code automation and light AI agent workflows.',
    bestFor: 'Teams that want easy automations without code.',
    pricing: 'Free and paid plans.',
    website: 'https://zapier.com/ai',
    categories: ['automation', 'agents', 'productivity'],
    features: [
      'Connects apps and automates repetitive tasks',
      'AI-assisted workflow creation',
      'Great for business process automation',
    ],
    pros: [
      'Very approachable',
      'Huge app ecosystem',
      'Excellent for real-world workflows',
    ],
    cons: [
      'Costs can grow with heavier usage',
    ],
  },
  {
    slug: 'n8n',
    name: 'n8n',
    tagline: 'Flexible workflow automation for technical teams and power users.',
    description: 'n8n combines automation, integrations, and AI-friendly workflow building. It is especially appealing if you want more control than no-code-only tools offer.',
    bestFor: 'Technical teams that want control and self-hosting options.',
    pricing: 'Cloud and self-hosted options; free self-hosted usage possible.',
    website: 'https://n8n.io/',
    categories: ['automation', 'agents'],
    features: [
      'Visual workflow automation',
      'Good for integrations and AI steps',
      'Self-hosting friendly',
    ],
    pros: [
      'Very flexible',
      'Good for advanced workflows',
      'Strong value if you want ownership',
    ],
    cons: [
      'More complex than beginner-friendly tools',
    ],
  },
  {
    slug: 'gumloop',
    name: 'Gumloop',
    tagline: 'No-code AI workflow builder for automations and agent-style pipelines.',
    description: 'Gumloop is built for AI-powered automation, data flow, and reusable workflows. It is a good fit for teams that want to glue tools together quickly.',
    bestFor: 'Operations and growth teams building AI workflows.',
    pricing: 'Free and paid plans.',
    website: 'https://www.gumloop.com/',
    categories: ['automation', 'agents'],
    features: [
      'No-code workflow building',
      'Useful for AI pipelines and data tasks',
      'Good for repeatable internal automations',
    ],
    pros: [
      'Easy to understand visually',
      'Good for practical automation',
      'Built around AI workflows',
    ],
    cons: [
      'May be overkill for very simple automations',
    ],
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    tagline: 'Notes, docs, and workspace help with AI built into Notion.',
    description: 'Notion AI helps draft, summarize, and organize knowledge inside a familiar workspace. It is a natural fit for teams already using Notion.',
    bestFor: 'Teams and individuals who live in notes and docs.',
    pricing: 'Included in some plans; paid add-ons and tiers available.',
    website: 'https://www.notion.com/product/ai',
    categories: ['productivity', 'note-taking'],
    features: [
      'Drafting and summarization inside notes',
      'Helpful for knowledge management',
      'Strong workspace integration',
    ],
    pros: [
      'Great for teams already on Notion',
      'Convenient for everyday note work',
      'Reduces context switching',
    ],
    cons: [
      'Best value mostly if you already use Notion',
    ],
  },
  {
    slug: 'fireflies-ai',
    name: 'Fireflies.ai',
    tagline: 'Meeting transcription, summaries, and action-item capture.',
    description: 'Fireflies.ai is designed for recording meetings, summarizing conversations, and making search easy across transcripts.',
    bestFor: 'Teams that spend a lot of time in meetings.',
    pricing: 'Free and paid plans.',
    website: 'https://fireflies.ai/',
    categories: ['productivity', 'note-taking'],
    features: [
      'Meeting transcription and summaries',
      'Searchable conversation archive',
      'Useful for action-item follow-up',
    ],
    pros: [
      'Simple value proposition',
      'Good for recurring meetings',
      'Useful as a memory layer',
    ],
    cons: [
      'Mostly focused on meetings rather than broader note-taking',
    ],
  },
  {
    slug: 'granola',
    name: 'Granola',
    tagline: 'Meeting notes with a clean, fast, human-friendly workflow.',
    description: 'Granola focuses on note-taking during meetings without getting in your way. It is helpful for people who want simple capture and concise summaries.',
    bestFor: 'People who want a lightweight meeting notes tool.',
    pricing: 'Free and paid plans.',
    website: 'https://www.granola.ai/',
    categories: ['note-taking', 'productivity'],
    features: [
      'Fast note capture',
      'Meeting summary workflow',
      'Minimal interface',
    ],
    pros: [
      'Very easy to use',
      'Low-friction capture during meetings',
      'Feels lightweight',
    ],
    cons: [
      'Not meant to replace a full knowledge system',
    ],
  },
  {
    slug: 'intercom-fin',
    name: 'Intercom Fin',
    tagline: 'AI support agent for customer service and helpdesk workflows.',
    description: `Fin is Intercom's AI support agent designed to answer customer questions, deflect tickets, and assist support teams.`, 
    bestFor: 'SaaS support teams that want an AI-first helpdesk layer.',
    pricing: 'Paid plans.',
    website: 'https://www.intercom.com/fin',
    categories: ['customer-support', 'agents'],
    features: [
      'Customer support automation',
      'Helpdesk integration',
      'Good for deflection and first responses',
    ],
    pros: [
      'Strong support focus',
      'Clear business value',
      'Good fit for SaaS teams',
    ],
    cons: [
      'Best when paired with the Intercom ecosystem',
    ],
  },
  {
    slug: 'zendesk-ai',
    name: 'Zendesk AI',
    tagline: 'AI helpdesk features for customer service teams.',
    description: 'Zendesk AI adds drafting, routing, and support automation to a mature helpdesk platform.',
    bestFor: 'Support teams already using Zendesk.',
    pricing: 'Paid plans and add-ons.',
    website: 'https://www.zendesk.com/ai/',
    categories: ['customer-support'],
    features: [
      'Helpdesk automation',
      'Suggested replies and routing',
      'Fits into existing support operations',
    ],
    pros: [
      'Natural extension of Zendesk',
      'Useful for mature support teams',
      'Solid enterprise fit',
    ],
    cons: [
      'Most compelling for existing Zendesk customers',
    ],
  },
];

export const comparisons: Comparison[] = [
  {
    slug: 'coding',
    title: 'Best AI Tools for Coding',
    description: 'A practical comparison of AI coding tools for autocomplete, code editing, and prompt-to-app workflows.',
    seoTitle: 'Best AI Tools for Coding',
    seoDescription: 'Compare the best AI coding tools for developers, builders, and product teams.',
    toolSlugs: ['cursor', 'github-copilot', 'windsurf', 'bolt-new', 'lovable'],
  },
  {
    slug: 'seo',
    title: 'Best AI Tools for SEO',
    description: 'A simple shortlist of AI tools that help with keyword research, content creation, and search workflows.',
    seoTitle: 'Best AI Tools for SEO',
    seoDescription: 'Discover the best AI tools for SEO, research, content planning, and search intent.',
    toolSlugs: ['perplexity', 'chatgpt', 'claude', 'gemini', 'zapier-ai'],
  },
  {
    slug: 'startups',
    title: 'Best AI Tools for Startups',
    description: 'A founder-friendly roundup of tools that speed up prototyping, content, automation, and support.',
    seoTitle: 'Best AI Tools for Startups',
    seoDescription: 'Explore the best AI tools for startups, from MVP building to support and automation.',
    toolSlugs: ['chatgpt', 'cursor', 'bolt-new', 'zapier-ai', 'notion-ai'],
  },
  {
    slug: 'image-generators',
    title: 'Best AI Image Generators',
    description: 'A comparison of image models and tools for stylized art, marketing visuals, and text-aware graphics.',
    seoTitle: 'Best AI Image Generators',
    seoDescription: 'Compare the best AI image generators for stylized art, ads, and branded graphics.',
    toolSlugs: ['midjourney', 'ideogram', 'dall-e'],
  },
  {
    slug: 'agents',
    title: 'Best AI Agents',
    description: 'A comparison of agent-style tools for task execution, automation, and multi-step workflows.',
    seoTitle: 'Best AI Agents',
    seoDescription: 'Find the best AI agents for automations, workflows, and multi-step tasks.',
    toolSlugs: ['chatgpt', 'claude', 'zapier-ai', 'n8n', 'gumloop'],
  },
];

export const faqItems = [
  {
    question: 'What is an AI tools directory?',
    answer: 'An AI tools directory is a searchable website that organizes AI products by category, use case, and comparison page so visitors can find the right tool faster.',
  },
  {
    question: 'How do you choose which tools to list?',
    answer: 'Use the tools that solve real problems, have clear positioning, and are relevant to popular search intent. For a directory, useful categories and clarity matter more than hype.',
  },
  {
    question: 'How do you keep the site easy to maintain?',
    answer: 'Keep the content static or lightly CMS-driven, use a consistent template for every tool page, and update the directory in batches instead of constantly rewriting the whole site.',
  },
  {
    question: 'Why is this good for SEO?',
    answer: 'Directory pages map naturally to search intent. Category pages, comparison pages, and tool pages create lots of indexable pages with clear keywords and internal links.',
  },
  {
    question: 'Should I add pricing and pros/cons?',
    answer: 'Yes. Those are highly useful for visitors and improve search relevance. Keep the descriptions honest and concise so the site feels trustworthy.',
  },
  {
    question: 'What should I add after launch?',
    answer: 'Add more tool pages, comparison pages, editorial reviews, and a lightweight newsletter or update log once the core directory is live.',
  },
];

export const siteStats = [
  { label: 'Categories', value: `${categories.length}` },
  { label: 'Tools', value: `${tools.length}` },
  { label: 'Comparisons', value: `${comparisons.length}` },
  { label: 'Pages at launch', value: '40+' },
];

export function getCategoryTools(slug: string) {
  return tools.filter((tool) => tool.categories.includes(slug));
}

export function getToolsBySlugs(slugs: string[]) {
  return slugs.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean) as Tool[];
}
