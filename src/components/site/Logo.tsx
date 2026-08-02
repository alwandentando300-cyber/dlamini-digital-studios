import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/alwande-logo.jpg.asset.json";

export function Logo({
  onClick,
  variant = "light",
  className = "",
}: {
  onClick?: () => void;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Alwande Web Studio — home"
      className={`group flex min-w-0 items-center ${className}`}
    >
      <span
        className={`inline-flex items-center overflow-hidden rounded-xl bg-[color:var(--navy)] px-2.5 py-1.5 transition-transform duration-300 group-hover:scale-[1.03] ${
          variant === "dark" ? "" : "ring-1 ring-border"
        }`}
      >
        <img
          src={logoAsset.url}
          alt="Alwande Web Studio"
          width={1536}
          height={413}
          className="h-9 w-auto md:h-11"
        />

      </span>
    </Link>
  );
}
