import Link from "next/link";
import { notes } from "@/lib/data";

export default function NotesPage() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">手记</h1>
          <p className="text-muted text-lg">
            关于设计、管理、还有一些碎碎念。
          </p>
        </div>

        <div className="space-y-6">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group block p-8 bg-white rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-sm text-muted mb-3">{note.date}</p>
              <h2 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {note.title}
              </h2>
              <p className="text-muted leading-relaxed">{note.excerpt}</p>
              <span className="inline-block mt-4 text-sm text-accent font-medium group-hover:underline">
                阅读全文 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}