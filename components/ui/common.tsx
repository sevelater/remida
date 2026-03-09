import Link from "next/link";

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-amber-950 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-amber-900/80">{subtitle}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-amber-700 px-6 py-3 text-sm font-medium text-amber-50 transition hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
    >
      {label}
    </Link>
  );
}

