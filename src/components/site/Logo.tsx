import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/alwande-logo.png.asset.json";
import logoDark from "@/assets/alwande-logo-dark.png.asset.json";

export function Logo({
  onClick,
  variant = "light",
  className = "",
}: {
  onClick?: () => void;
  variant?: "light" | "dark";
  className?: string;
}) {
  const src = variant === "dark" ? logoDark.url : logoLight.url;

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Alwande Web Studio — home"
      className={`group flex min-w-0 items-center ${className}`}
    >
      <img
        src={src}
        alt="Alwande Web Studio"
        width={780}
        height={187}
        className="h-11 w-auto bg-transparent transition-transform duration-300 group-hover:scale-[1.03] md:h-14"
      />
    </Link>
  );
}
