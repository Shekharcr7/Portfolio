// Central project data. Add a new project by appending an object to this array —
// ProjectCard and ProjectModal render entirely from this data.

export const projects = [
  {
    id: 'hybrid-rag',
    category: 'RAG',
    accent: 'retrieval',
    title: 'Local Hybrid RAG Q&A System',
    date: 'June – July 2026',
    tagline: 'Hybrid retrieval + local LLMs + measurable RAG evaluation.',
    description:
      'A local Retrieval-Augmented Generation system for document-based question answering, combining lexical and semantic retrieval with a reranking stage and citation-grounded generation.',
    problem:
      'Single-mode retrieval (pure keyword or pure embedding search) misses relevant passages: lexical search fails on paraphrased queries, while semantic search struggles with exact terms, IDs and rare vocabulary. Most demo RAG projects also skip evaluation, so retrieval quality is never actually measured.',
    solution:
      'Built a hybrid retrieval pipeline that runs BM25 and dense semantic search in parallel over chunked documents, merges the two ranked lists with Reciprocal Rank Fusion, and optionally reranks the fused candidates with a cross-encoder before passing grounded context to a locally hosted LLM via Ollama. Every answer is required to cite the chunk it was generated from.',
    architecture: {
      type: 'rag',
      nodes: [
        { id: 'docs', label: 'Documents', sub: 'PDF / TXT / MD' },
        { id: 'process', label: 'Document Processing', sub: 'Cleaning & parsing' },
        { id: 'chunk', label: 'Chunking', sub: 'Overlapping windows' },
        { id: 'bm25', label: 'BM25 Retrieval', sub: 'Lexical', branch: 'a' },
        { id: 'semantic', label: 'Semantic Retrieval', sub: 'Embeddings', branch: 'b' },
        { id: 'rrf', label: 'Reciprocal Rank Fusion', sub: 'Merge ranked lists' },
        { id: 'rerank', label: 'Cross-Encoder Reranking', sub: 'Optional refinement' },
        { id: 'llm', label: 'Ollama', sub: 'Local LLM inference' },
        { id: 'answer', label: 'Citation-Grounded Answer', sub: 'Traceable output' },
      ],
    },
    technologies: ['Python', 'BM25', 'Semantic Retrieval', 'Embeddings', 'Reciprocal Rank Fusion', 'Cross-Encoder Reranking', 'Ollama', 'RAG'],
    features: [
      'Hybrid BM25 + semantic retrieval',
      'Reciprocal Rank Fusion of ranked candidate lists',
      'Optional cross-encoder reranking stage',
      'Local LLM inference using Ollama — no external API calls',
      'Citation-grounded responses traceable to source chunks',
      'Retrieval evaluation harness',
      'Answer faithfulness evaluation',
      'End-to-end latency measurement',
    ],
    decisions: [
      {
        title: 'Why hybrid retrieval over a single method',
        detail:
          'Lexical and semantic retrieval fail on different query types. Running both and fusing with RRF avoids tuning a single fragile similarity threshold and is more robust across query styles than either method alone.',
      },
      {
        title: 'Why Reciprocal Rank Fusion instead of score normalization',
        detail:
          'BM25 and embedding similarity scores are not on comparable scales. RRF merges by rank position rather than raw score, which avoids the calibration problems that come with mixing heterogeneous scoring functions.',
      },
      {
        title: 'Why a local model via Ollama',
        detail:
          'Running inference locally keeps document content on-device, removes per-query API cost, and makes latency and quality trade-offs fully controllable for evaluation.',
      },
    ],
    challenges: [
      {
        title: 'Chunk boundary loss of context',
        detail:
          'Fixed-size chunking sometimes split answers across chunk boundaries. Addressed with overlapping windows and by feeding the reranker adjacent-chunk context.',
      },
      {
        title: 'Reranker latency cost',
        detail:
          'Cross-encoder reranking meaningfully improved precision but added latency. Made it an optional pipeline stage so it can be toggled based on the latency budget.',
      },
    ],
    // evaluation: {
    //   note: 'placeholder — replace with measured values from the eval harness',
    //   metrics: [
    //     { label: 'Retrieval Hit Rate', value: '—', unit: '' },
    //     { label: 'Precision@K', value: '—', unit: '' },
    //     { label: 'Faithfulness', value: '—', unit: '' },
    //     { label: 'Latency', value: '—', unit: 'ms' },
    //   ],
    // },
    links: {
      github: 'https://github.com/Shekharcr7/RAG_QA_System',
      demo: '',
    },
  },
  {
    id: 'multi-agent-research',
    category: 'Multi-Agent',
    accent: 'agent',
    title: 'Multi-Agent AI Research System',
    date: 'July – August 2026',
    tagline: 'A multi-agent research pipeline that searches, reads, writes and critiques.',
    description:
      'A multi-agent AI research pipeline that automates web research, content extraction, report generation and quality evaluation — a query goes in, a critiqued report comes out.',
    problem:
      'Ad-hoc LLM prompting for research tasks produces reports that mix unverified claims with real findings, and there is no separation between finding information, writing it up, and checking whether the result is actually good.',
    solution:
      'Decomposed the research task into four cooperating agents — Search, Reader, Writer and Critic — each with a narrow responsibility. The Search Agent finds sources, the Reader Agent extracts the relevant content, the Writer Agent synthesizes a structured report, and the Critic Agent evaluates and flags weaknesses before the final report is returned.',
    architecture: {
      type: 'agent',
      nodes: [
        { id: 'query', label: 'User Query', sub: 'Research request' },
        { id: 'search', label: 'Search Agent', sub: 'Tavily' },
        { id: 'reader', label: 'Reader Agent', sub: 'BeautifulSoup' },
        { id: 'writer', label: 'Writer Agent', sub: 'Report synthesis' },
        { id: 'critic', label: 'Critic Agent', sub: 'Factuality & structure' },
        { id: 'report', label: 'Final Research Report', sub: 'Reviewed output' },
      ],
    },
    agents: [
      {
        name: 'Search Agent',
        responsibilities: ['Search the web', 'Find relevant sources', 'Retrieve recent information'],
        tech: 'Tavily',
      },
      {
        name: 'Reader Agent',
        responsibilities: ['Extract useful content', 'Parse web pages', 'Identify relevant information'],
        tech: 'BeautifulSoup',
      },
      {
        name: 'Writer Agent',
        responsibilities: ['Synthesize research', 'Generate structured reports', 'Organize findings'],
        tech: 'LLM (via LangChain)',
      },
      {
        name: 'Critic Agent',
        responsibilities: ['Evaluate factuality', 'Check structure', 'Identify weaknesses', 'Improve report quality'],
        tech: 'LLM (via LangChain)',
      },
    ],
    technologies: ['Python', 'LangChain', 'Mistral AI', 'Tavily', 'BeautifulSoup', 'LLMs', 'Multi-Agent Systems'],
    features: [
      'Automated web research from a single query',
      'Four-stage multi-agent workflow',
      'Live web search via Tavily',
      'Web scraping and content extraction',
      'LLM-based structured report generation',
      'Automated critique pass',
      'Quality evaluation before final output',
    ],
    decisions: [
      {
        title: 'Why separate agents instead of one prompt',
        detail:
          'Splitting search, reading, writing and critique into distinct agents keeps each prompt focused on one job, makes failures easier to localize, and lets the Critic Agent evaluate the Writer\u2019s output independently rather than trusting a single pass.',
      },
      {
        title: 'Why a dedicated Critic Agent',
        detail:
          'Self-critique in a single LLM call tends to be shallow. A separate critic pass, run after the report exists, catches structural gaps and unsupported claims that the writing pass misses.',
      },
    ],
    challenges: [
      {
        title: 'Source quality varies widely',
        detail:
          'Not every search result is a reliable source. The Reader Agent filters and the Critic Agent flags claims that trace back to weak sources.',
      },
      {
        title: 'Coordinating agent handoffs',
        detail:
          'Passing clean, structured state between agents (rather than raw text blobs) was necessary to keep the pipeline reliable across runs.',
      },
    ],
    links: {
      github: 'https://github.com/Shekharcr7/Multi_Agent_System',
      demo: '',
    },
  },
  {
    id: 'password-manager-mern',
    category: 'MERN',
    accent: 'mern',
    title: 'Password Manager — MERN Stack',
    date: 'March – April 2024',
    tagline: 'A full-stack MERN application with REST APIs and persistent data management.',
    description:
      'A full-stack password manager built with React.js, Node.js, Express.js and MongoDB for creating, viewing, editing and securely managing website credentials.',
    problem:
      'Managing website credentials across many services without a structured, searchable store leads to reused or lost passwords, and most beginner CRUD projects skip real persistence and validation.',
    solution:
      'Built a complete CRUD application: a React frontend for managing credentials, a REST API layer, an Express/Node backend, and MongoDB for persistent storage. Each credential gets a UUID-based identifier, and the UI includes validation, toast feedback and password visibility controls.',
    architecture: {
      type: 'mern',
      nodes: [
        { id: 'react', label: 'React Frontend', sub: 'UI & state' },
        { id: 'rest', label: 'REST API', sub: 'HTTP layer' },
        { id: 'express', label: 'Express.js', sub: 'Routing & middleware' },
        { id: 'node', label: 'Node.js', sub: 'Runtime' },
        { id: 'mongo', label: 'MongoDB', sub: 'Persistent storage' },
      ],
    },
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'UUID'],
    features: [
      'Create, view, edit and delete credentials',
      'One-click copy of stored credentials',
      'UUID-based identifiers',
      'Client-side form validation',
      'Toast notifications for every action',
      'Password visibility controls',
      'Dark mode',
      'Persistent storage in MongoDB',
    ],
    decisions: [
      {
        title: 'Why UUIDs instead of Mongo\u2019s default _id for references',
        detail:
          'Using a dedicated UUID per credential decouples the client-facing identifier from MongoDB\u2019s internal document id, keeping the API contract stable if the storage layer changes.',
      },
      {
        title: 'Why a REST layer instead of direct DB calls from the client',
        detail:
          'Routing all reads and writes through Express keeps validation, error handling and future auth logic on the server, where they belong.',
      },
    ],
    challenges: [
      {
        title: 'Keeping the UI in sync after mutations',
        detail:
          'Ensured every create/edit/delete action re-fetches or optimistically updates local state so the credential list never drifts from the database.',
      },
    ],
    links: {
      github: 'https://github.com/Shekharcr7/MERN-Stack-Project',
      demo: '',
    },
  },
]

export const getProjectById = (id) => projects.find((p) => p.id === id)
