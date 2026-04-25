import Link from "next/link";
import { siteInfo } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-6">关于我</h1>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center text-white text-3xl font-bold">
              {siteInfo.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{siteInfo.name}</h2>
              <p className="text-muted">{siteInfo.title}</p>
            </div>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">{siteInfo.bio}</p>
        </header>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <section>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent"></span>
              专业能力
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteInfo.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-zinc-100 rounded-full text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Location */}
          <section>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent"></span>
              所在地区
            </h3>
            <p className="text-muted">{siteInfo.location}</p>
          </section>
        </div>

        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent"></span>
            工作经历
          </h3>
          <div className="space-y-6">
            {siteInfo.experience.map((exp, index) => (
              <div
                key={index}
                className="flex gap-6 pb-6 border-b border-border last:border-0"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">{exp.role}</h4>
                  <p className="text-muted mb-1">{exp.company}</p>
                  <p className="text-sm text-foreground/60">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-zinc-50/50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent"></span>
            联系方式
          </h3>
          <div className="space-y-4">
            <p className="text-muted">
              邮箱：<a href={`mailto:${siteInfo.email}`} className="text-accent hover:underline">{siteInfo.email}</a>
            </p>
            <p className="text-muted">
              LinkedIn：<a href={siteInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{siteInfo.linkedin}</a>
            </p>
          </div>
          <div className="mt-8">
            <a
              href={`mailto:${siteInfo.email}`}
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              发送邮件
            </a>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6">想看看我的作品吗？</p>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            查看作品集 →
          </Link>
        </div>
      </div>
    </div>
  );
}