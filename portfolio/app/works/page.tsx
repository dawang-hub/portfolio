import Link from "next/link";
import { projects } from "@/lib/data";

export default function WorksPage() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">作品</h1>
          <p className="text-muted text-lg max-w-2xl">
            从金融到零售，从B端工具到C端产品，每一次都是解决问题的设计实践。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/works/${project.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center relative">
                <span className="text-7xl opacity-20 group-hover:opacity-40 transition-opacity font-light">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute top-4 right-4 bg-accent/90 text-white text-xs px-3 py-1 rounded-full">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-accent font-medium mb-2 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2 mb-4">{project.description}</p>
                <span className="text-sm text-accent font-medium group-hover:underline">
                  查看详情 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}