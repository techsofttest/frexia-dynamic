import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant:
    | "nav-contact"
    | "circle-icon-dark"
    | "circle-icon-dark-static"
    | "circle-icon-white-static"
    | "global-network"
    | "outline-pill"
    | "outline-pill-dark"
    | "contact-us-hero";
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  variant,
  href,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  const baseStyles = "transition-all duration-300";
  
  const variants = {
    "nav-contact":
      "bg-frexia-dark border border-frexia-dark text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-frexia-orange hover:border-frexia-orange transition-colors",
    "circle-icon-dark":
      "w-8 h-8 rounded-full bg-frexia-dark text-white flex items-center justify-center group-hover:bg-frexia-orange transition-colors",
    "circle-icon-dark-static":
      "w-8 h-8 rounded-full bg-frexia-dark text-white flex items-center justify-center",
    "circle-icon-white-static":
      "w-8 h-8 rounded-full bg-white text-frexia-dark flex items-center justify-center",
    "global-network":
      "flex items-center gap-3 bg-frexia-dark text-white px-6 py-2 rounded-full font-medium",
    "outline-pill":
      "flex items-center gap-3 border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-frexia-dark transition-colors",
    "outline-pill-dark":
      "flex items-center gap-3 border border-frexia-dark text-frexia-dark px-6 py-2 rounded-full font-medium hover:bg-frexia-dark hover:text-white transition-colors",
    "contact-us-hero":
      "bg-frexia-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-frexia-orange transition-colors",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
}
