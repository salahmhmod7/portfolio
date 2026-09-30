import { Projects } from "@/components/projects/Projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "AI Engineering projects across Machine Learning, Computer Vision, NLP, LLMs, RAG, and AI Agents.",
});

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <Projects />
    </div>
  );
}