import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/lib/data";

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-12"
        >
          ← 返回手记
        </Link>

        <article>
          <header className="mb-12">
            <p className="text-muted mb-4">{note.date}</p>
            <h1 className="text-4xl font-bold mb-6">{note.title}</h1>
            <p className="text-xl text-muted">{note.excerpt}</p>
          </header>

          <div className="prose prose-lg prose-stone max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed text-foreground/80">
              {note.content}
            </div>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/notes"
            className="text-muted hover:text-accent transition-colors"
          >
            ← 返回手记
          </Link>
        </div>
      </div>
    </div>
  );
}