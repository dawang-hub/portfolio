import Link from "next/link";
import { projects, notes, siteInfo } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="text-accent font-medium mb-4">你好，我是</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {siteInfo.name}
            </h1>
            <p className="text-2xl text-foreground/70 mb-6">{siteInfo.title}</p>
            <p className="text-lg text-muted leading-relaxed mb-8">{siteInfo.bio}</p>
            <div className="flex gap-4">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                查看作品
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:border-foreground transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Works */}
      <section className="px-6 py-24 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">精选作品</h2>
            <Link href="/works" className="text-sm text-muted hover:text-accent transition-colors">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/works/${project.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
                  <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-accent font-medium mb-2">{project.category}</p>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notes */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">最新手记</h2>
            <Link href="/notes" className="text-sm text-muted hover:text-accent transition-colors">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notes.slice(0, 2).map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="group block p-8 bg-zinc-50/50 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300"
              >
                <p className="text-xs text-muted mb-3">{note.date}</p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {note.title}
                </h3>
                <p className="text-muted">{note.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-foreground text-background rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">想聊聊？</h2>
            <p className="text-lg opacity-70 mb-8 max-w-xl mx-auto">
              如果你有合作机会或想交流设计经验，欢迎联系我。
            </p>
            <a
              href={`mailto:${siteInfo.email}`}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              发送邮件
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}