import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-12"
        >
          ← 返回作品集
        </Link>

        {/* Header */}
        <header className="mb-16">
          <p className="text-accent font-medium mb-4">{project.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              {project.year}
            </span>
            <span>角色：{project.role}</span>
          </div>
        </header>

        {/* Cover */}
        <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl flex items-center justify-center mb-16">
          <span className="text-9xl opacity-20 font-light">{project.title.charAt(0)}</span>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-xl text-muted leading-relaxed">{project.description}</p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">背景</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{project.background}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">挑战</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{project.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">解决方案</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{project.solution}</p>
          </section>

          <section className="bg-zinc-50/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">成果</h2>
            <p className="text-lg text-accent font-medium">{project.result}</p>
          </section>
        </div>

        {/* Footer Nav */}
        <div className="mt-16 pt-8 border-t border-border flex justify-between">
          <Link
            href="/works"
            className="text-muted hover:text-accent transition-colors"
          >
            ← 返回作品集
          </Link>
          <Link
            href="/about"
            className="text-accent hover:underline"
          >
            了解更多 →
          </Link>
        </div>
      </div>
    </div>
  );
}