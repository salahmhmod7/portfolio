import type { Project } from "@/types";

const IMG = (slug: string, n: string) =>
  `/images/projects/${slug}/${n}`;

export const projects: Project[] = [
  {
    slug: "dermascan-ai",
    title: "DermaScan AI — Skin Lesion Classification",
    description:
      "End-to-end deep learning system classifying dermoscopic skin lesion images into 7 diagnostic categories.",
    longDescription:
      "An end-to-end deep learning computer vision application using the HAM10000 dataset to classify dermoscopic skin lesion images into seven diagnostic categories.",
    categories: ["Computer Vision", "Deep Learning"],
    tags: ["Medical AI", "Classification"],
    technologies: [
      "Python",
      "PyTorch",
      "Torchvision",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "FastAPI",
      "Flask",
      "Jupyter",
      "Docker",
      "Docker Compose",
    ],
    github: "https://github.com/salahmhmod7/skinProj",
    images: [
      IMG("dermascan", "hero.webp"),
      IMG("dermascan", "01.webp"),
      IMG("dermascan", "02.webp"),
      IMG("dermascan", "03.webp"),
    ],
    overview:
      "A full pipeline from data preprocessing and normalization to inference, exposing probability distribution and confidence through a modular API.",
    problem:
      "Dermoscopic skin lesion classification is challenging due to class imbalance, intra-class variability, and the need for calibrated confidence for downstream review.",
    solution:
      "Modular PyTorch training and inference pipeline with normalization, softmax probability distribution, confidence scoring, Arabic diagnostic descriptions, and Docker deployment.",
    architecture:
      "Image → Preprocessing → Model → Softmax → Predicted Class → Confidence",
    features: [
      "Image preprocessing & normalization",
      "7-class classification (akiec, bcc, bkl, df, mel, nv, vasc)",
      "Probability distribution + confidence score",
      "Modular inference pipeline",
      "FastAPI / Flask API",
      "Arabic diagnostic descriptions",
      "Docker deployment",
    ],
    pipeline: [
      "Image",
      "Preprocessing",
      "Model",
      "Softmax",
      "Predicted Class",
      "Confidence",
    ],
    futureImprovements: [
      "Grad-CAM explainability",
      "Lesion segmentation",
      "Model calibration",
      "Uncertainty estimation",
      "Model versioning",
      "Testing",
      "Monitoring",
      "Web interface",
      "Experiment tracking",
      "CI/CD",
      "Cloud deployment",
    ],
    disclaimer:
      "This project is for educational and research purposes only and is not a medical diagnostic tool.",
  },
  {
    slug: "fire-detection",
    title: "Fire Detection System",
    description:
      "AI-powered fire and smoke detection using YOLO-based object detection for images and video.",
    longDescription:
      "An AI-powered fire and smoke detection system using YOLO-based object detection models for image and video analysis.",
    categories: ["Computer Vision", "Deep Learning"],
    tags: ["Object Detection", "YOLO", "Safety"],
    technologies: [
      "Python",
      "PyTorch",
      "Ultralytics YOLO",
      "OpenCV",
      "YAML",
      "python-dotenv",
      "Docker",
      "Shell",
    ],
    github: "https://github.com/salahmhmod7/fire_detection_system",
    images: [
      IMG("fire-detection", "hero.webp"),
      IMG("fire-detection", "01.webp"),
      IMG("fire-detection", "02.webp"),
    ],
    overview:
      "Detection pipeline based on YOLO11s and YOLO26n, providing bounding boxes and confidence scores across image and video inputs, with a deployment-oriented structure.",
    problem:
      "Early fire and smoke detection is critical, yet existing detectors struggle with small fires, dense smoke, reflections, and low-light environments.",
    solution:
      "Modular YOLO-based detection with training, evaluation, and inference pipelines, plus structured error analysis guiding future improvements.",
    architecture:
      "Input (Image/Video) → Preprocess → YOLO Model → NMS → Bounding Boxes + Confidence",
    features: [
      "Fire + smoke detection",
      "Bounding boxes + confidence scores",
      "Image inference",
      "Video inference",
      "Model training",
      "Evaluation",
      "Modular architecture",
      "Deployment-oriented structure",
    ],
    futureImprovements: [
      "Webcam support",
      "RTSP camera support",
      "Multi-camera monitoring",
      "Real-time alerts + WebSockets",
      "FastAPI / Streamlit UI",
      "ONNX / TensorRT export",
      "Quantization",
      "GPU optimization",
      "CI/CD",
      "Monitoring",
      "Hard-negative mining",
      "Explainability",
    ],
  },
  {
    slug: "rag-knowledge-base",
    title: "AI/ML Knowledge Base — RAG System",
    description:
      "End-to-end Retrieval-Augmented Generation answering questions from AI/ML/DS PDFs.",
    longDescription:
      "An end-to-end Retrieval-Augmented Generation system designed to answer questions from specialized AI, Machine Learning, and Data Science PDF documents.",
    categories: ["RAG", "LLM", "NLP", "AI Applications"],
    tags: ["ChromaDB", "LangChain", "Streamlit"],
    technologies: [
      "Python",
      "Streamlit",
      "ChromaDB",
      "LangChain",
      "OpenAI-compatible APIs",
      "Embeddings",
      "Docker",
      "Git",
      "GitHub",
    ],
    github: "",
    images: [
      IMG("rag", "hero.webp"),
      IMG("rag", "01.webp"),
      IMG("rag", "02.webp"),
    ],
    overview:
      "A production-minded RAG pipeline: ingestion, chunking, embeddings, persistent vector store, semantic retrieval, and grounded generation with a conversational UI.",
    problem:
      "Specialized AI/ML documents are dense; users need grounded answers with retrieval rather than hallucinations from a bare LLM.",
    solution:
      "LangChain + ChromaDB pipeline with embeddings, similarity search, and context-grounded answers via OpenAI-compatible LLMs, wrapped in a Streamlit UI.",
    architecture:
      "PDFs → Loading → Chunking → Embeddings → ChromaDB → Query → Similarity Search → Context + Query → LLM → Grounded Answer",
    features: [
      "PDF ingestion",
      "Document chunking",
      "Embeddings",
      "Persistent vector database",
      "Semantic retrieval",
      "Grounded answers",
      "Conversational interface",
      "Docker support",
    ],
    pipeline: [
      "PDFs",
      "Loading",
      "Chunking",
      "Embeddings",
      "ChromaDB",
      "User Query",
      "Query Embedding",
      "Similarity Search",
      "Context + Query",
      "LLM",
      "Grounded Answer",
    ],
    futureImprovements: [
      "Streaming",
      "Citations",
      "Metadata filtering",
      "Hybrid search",
      "Reranking",
      "Memory",
      "Query rewriting",
      "Multi-document management",
      "Evaluation",
      "Authentication",
      "Cloud deployment",
      "Observability",
    ],
  },
  {
    slug: "financial-fraud-detection",
    title: "Indian Financial Fraud Detection",
    description:
      "End-to-end ML system detecting fraudulent financial transactions (~250K rows) with XGBoost.",
    longDescription:
      "An end-to-end machine learning system for detecting fraudulent financial transactions using a dataset of ~250,000 transactions.",
    categories: ["Machine Learning", "AI Applications"],
    tags: ["Fraud Detection", "XGBoost", "Data Science"],
    technologies: [
      "Python",
      "XGBoost",
      "LightGBM",
      "Scikit-learn",
      "Optuna",
      "SHAP",
      "Pandas",
      "NumPy",
    ],
    github: "",
    images: [
      IMG("fraud", "hero.webp"),
      IMG("fraud", "01.webp"),
      IMG("fraud", "02.webp"),
    ],
    overview:
      "Full data science lifecycle: EDA, feature engineering, model selection, stratified K-fold, hyperparameter tuning, SHAP interpretation, and business-cost threshold tuning.",
    problem:
      "Fraud detection with data leakage and severe class imbalance; naive metrics are misleading and the cost of errors is asymmetric.",
    solution:
      "Removed leakage (Transaction_Status, Card_Status), engineered ratio / velocity / aggregate / deviation / temporal features, and tuned thresholds by business cost.",
    architecture:
      "Data Understanding → Cleaning → EDA → Feature Engineering → Model Selection → Stratified K-Fold → HPO → Evaluation → Threshold Tuning → SHAP → Serialization → Inference → Slice-Based Error Analysis",
    features: [
      "Leakage detection & removal",
      "Feature engineering (ratio, velocity, aggregate, deviation, temporal)",
      "XGBoost main model",
      "Optuna 60-trial HPO",
      "SHAP interpretation",
      "Business-cost threshold tuning",
      "Slice-based error analysis",
    ],
    results: [
      { label: "ROC-AUC", value: "0.9014" },
      { label: "PR-AUC", value: "0.6785" },
      { label: "F1", value: "0.6550" },
      { label: "Precision", value: "0.6895" },
      { label: "Recall", value: "0.6237" },
      { label: "Throughput", value: "14,925 txn/s" },
      { label: "Latency", value: "0.067 ms/txn" },
    ],
    futureImprovements: [
      "Streaming inference",
      "Model monitoring",
      "Feature store",
      "CI/CD",
      "Cloud deployment",
    ],
  },
  {
    slug: "salahfm",
    title: "salahFM — AI Radio Platform",
    description:
      "24/7 AI-powered radio platform that collects, filters, translates, writes, voices, and broadcasts news.",
    longDescription:
      "A 24/7 AI-powered radio platform that automatically collects, filters, translates, writes, voices, processes, schedules, and broadcasts news.",
    categories: ["Generative AI", "AI Applications"],
    tags: ["TTS", "Automation", "Broadcast"],
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "PostgreSQL",
      "Groq",
      "Gemini",
      "edge-tts",
      "FFmpeg",
      "pydub",
      "APScheduler",
      "HTML",
      "CSS",
      "JavaScript",
      "Android WebView",
    ],
    github: "",
    images: [IMG("salahfm", "hero.webp"), IMG("salahfm", "01.webp")],
    overview:
      "Fully automated pipeline turning RSS news into Arabic radio shows with intros, bed music, ducking, and scheduled broadcast, plus a web player and Android app.",
    problem:
      "Producing 24/7 Arabic radio content requires continuous human editorial, translation, and audio engineering effort.",
    solution:
      "An automated RSS→AI writer→TTS→audio pipeline with a human review step, a scheduler with a Force System, and multi-platform delivery.",
    architecture:
      "RSS → Collector → Filter/Dedup → AI Writer → Human Review → TTS → Audio Processing → Scheduler → Broadcast → Web Player / Android App",
    features: [
      "20 Arabic shows",
      "121 RSS sources",
      "4,465 news items processed",
      "Groq + Gemini AI writer",
      "edge-tts Arabic TTS",
      "FFmpeg + pydub audio (intro, bed music, ducking)",
      "APScheduler with Force System",
      "Web player + Android WebView app",
    ],
    pipeline: [
      "RSS",
      "Collector",
      "Filter / Deduplication",
      "AI Writer",
      "Human Review",
      "TTS",
      "Audio Processing",
      "Scheduler",
      "Broadcast",
      "Web Player / Android App",
    ],
    futureImprovements: [
      "Multi-language support",
      "Better analytics",
      "Docker deployment",
      "CDN for audio",
    ],
  },
  {
    slug: "agentos",
    title: "AgentOS — Autonomous AI Research Agent",
    description:
      "Autonomous research platform with LangGraph, RAG, multi-provider LLMs, tools, evaluation, and HITL.",
    longDescription:
      "A production-style autonomous AI research platform built around FastAPI, LangGraph, RAG, multiple LLM providers, persistent state, tool use, evaluation, observability, and human-in-the-loop approval.",
    categories: ["AI Agents", "LLM", "RAG"],
    tags: ["LangGraph", "Ollama", "Evaluation"],
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "SQLite",
      "SQLAlchemy",
      "sqlite-vec",
      "Ollama",
      "Qwen2.5 7B",
      "Groq",
      "Gemini",
      "nomic-embed-text",
    ],
    github: "",
    images: [IMG("agentos", "hero.webp"), IMG("agentos", "01.webp")],
    overview:
      "A graph-orchestrated research agent with grounded answers, tool-call recovery, SSE streaming, and a 25-case evaluation harness.",
    problem:
      "Research agents hallucinate and lose grounding; production-style systems need state, tools, approvals, observability, and measurable evaluation.",
    solution:
      "LangGraph orchestrator with persistent state (SqliteSaver), tool suite (search, wiki, fetch, knowledge_search, save_report + approval), grounding policy, retries with backoff, SSE event streaming, and 7-metric evaluation.",
    architecture:
      "User → FastAPI → LangGraph Orchestrator → LLM → State → Tools → RAG → Evaluation → Final Report",
    features: [
      "Multi-provider LLMs (Ollama, Qwen2.5 7B, Groq, Gemini)",
      "nomic-embed-text + sqlite-vec",
      "Persistent state (LangGraph SqliteSaver)",
      "Tools: calculator, Wikipedia, web_search, fetch_page, find_in_page, knowledge_search, save_report (approval required)",
      "Grounded answers with citations",
      "Invalid tool-call recovery, retry, backoff",
      "Per-run events + node latency + SSE streaming",
    ],
    results: [
      { label: "Tool accuracy", value: "96%" },
      { label: "Retrieval hit", value: "100%" },
      { label: "Citation", value: "92%" },
      { label: "Boundary compliance", value: "90%" },
      { label: "Hallucination", value: "10%" },
      { label: "Failure rate", value: "0%" },
      { label: "Avg latency (Ollama CPU)", value: "93.68 s" },
    ],
    futureImprovements: [
      "Multi-agent collaboration",
      "Production deployment",
      "Docker",
      "CI/CD",
    ],
  },
  {
    slug: "ai-shopping-assistant",
    title: "AI Shopping Assistant",
    description:
      "LLM-powered shopping assistant that understands natural language, calls tools, and queries PostgreSQL.",
    longDescription:
      "An LLM-powered shopping assistant that understands natural-language product requests, calls tools, queries PostgreSQL, and returns structured product results.",
    categories: ["LLM", "AI Agents", "AI Applications"],
    tags: ["Tool Calling", "FastAPI", "PostgreSQL"],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "psycopg2",
      "Ollama",
      "Qwen2.5 3B",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "",
    images: [
      IMG("shopping-assistant", "hero.webp"),
      IMG("shopping-assistant", "01.webp"),
    ],
    overview:
      "A compact demonstration that natural language can be turned into reasoning, tool selection, database queries, and structured responses.",
    problem:
      "E-commerce users want conversational search, but simple keyword search fails to capture intent and constraints.",
    solution:
      "FastAPI backend + Qwen2.5 3B via Ollama + tool calling into PostgreSQL (≈200 synthetic products), returning structured results to a lightweight JS frontend.",
    architecture:
      "User → Frontend → FastAPI → Agent → LLM + Tools → PostgreSQL",
    features: [
      "Natural language product requests",
      "Tool-selection reasoning",
      "PostgreSQL querying (~200 synthetic products)",
      "Structured results",
      "FastAPI backend",
      "Minimal JS frontend",
    ],
    futureImprovements: [
      "Product ranking",
      "Cart integration",
      "Streaming responses",
      "Deployment",
    ],
  },
];

export const projectFilters = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "LLM",
  "RAG",
  "AI Agents",
  "Generative AI",
  "AI Applications",
] as const;

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);