"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import portfolioImg from "@/assets/porfolio-img.jpg";

// TypeScript interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

interface PortfolioCardProps {
  project: Project;
}

const Portfolio: React.FC = () => {
  // Project data array - you can expand this with more projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "Website portfolio personal yang menampilkan keahlian, pengalaman, dan karya saya sebagai seorang Full-Stack Developer.",
      image: portfolioImg,
      tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      demoLink: "https://portfolio.example.com",
      codeLink: "https://github.com/tegareyy/tegareyy-portfolio",
    },
    // can add more projects here
  ];

  return (
    <div id="portfolio" className="relative w-full bg-gradient-to-b from-[#090420] to-[#0c0524] py-10 border-t-2">
      {/* Content Container */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-widest bg-gradient-to-br from-fuchsia-600 to-white text-transparent bg-clip-text drop-shadow-xl md:text-5xl lg:text-6xl">
            PORTFOLIO
          </h1>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-600 to-fuchsia-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300">Berikut adalah beberapa proyek yang telah saya kerjakan</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Portfolio Card Component
const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02]">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-fuchsia-600 to-white border">
        <div className="absolute inset-0 rounded-3xl bg-[#070504]/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative flex h-full flex-col p-1">
        {/* Project Image with Overlay */}
        <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm"></div>
          <div className="h-full w-full bg-gray-700 flex items-center justify-center">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>

          {/* Hidden overlay with buttons - appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700 hover:cursor-pointer">
                Live Demo
              </button>
            </Link>
            <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <button className="rounded-full bg-purple-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-700 hover:cursor-pointer">
                View Code
              </button>
            </Link>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
          <p className="mb-4 flex-grow text-sm text-gray-300">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-blue-900/40 px-3 py-1 text-xs font-medium text-blue-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
