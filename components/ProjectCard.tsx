import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  skills: string[];
  slug: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  skills,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative mb-6 h-48 overflow-hidden rounded-lg">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover transition duration-300 hover:scale-105"
  />
</div>
<h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-slate-600">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${slug}`}
        className="mt-8 inline-block rounded-lg bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-700"
      >
        View Project
      </Link>
    </div>
  );
}