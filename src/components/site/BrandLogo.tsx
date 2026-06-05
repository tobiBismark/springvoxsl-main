interface BrandLogoProps {
  variant?: "full" | "mark";
  className?: string;
}

export function BrandLogo({ variant = "full", className }: BrandLogoProps) {
  const src = variant === "mark" ? "/springvox-logo-light.png" : "/springvox-logo-light.png";
  const alt = variant === "mark" ? "SpringVox mark" : "SpringVox logo";

  return <img src={src} alt={alt} className={className} />;
}
