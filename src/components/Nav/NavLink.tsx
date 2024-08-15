import Link from "next/link";

export function NavLink({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "text-gray-300 whitespace-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 " +
        className
      }
    >
      {text}
    </Link>
  );
}
