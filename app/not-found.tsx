import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <div className="text-xs uppercase tracking-[0.3em] text-accent-cyan">
        404
      </div>
      <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 text-ink-muted">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
      >
        Back home
      </Link>
    </div>
  );
}