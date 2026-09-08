import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import { projectDetails } from "../../../data/projectDetails";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project" };
  return {
    title: project.shortTitle,
    description: project.problem,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.shortTitle} — Abishek SA Kumar`,
      description: project.problem,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectDetailPage project={project} detail={projectDetails[slug]} />;
}
