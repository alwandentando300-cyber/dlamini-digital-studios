import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-alwande.png";

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
      className={`group flex min-w-0 items-center gap-2.5 ${className}`}
    >
      <img
        src={logo}
        alt=""
        width={816}
        height={816}
        className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10"
      />
      <span
        className={`truncate font-display text-base font-semibold tracking-tight sm:text-lg ${
          variant === "dark" ? "text-white" : "text-foreground"
        }`}
      >
        Alwande <span className="text-primary">Web Studio</span>
      </span>
    </Link>
  );
}
