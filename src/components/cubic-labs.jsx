import Image from "next/image";

export function CubicLogo({ className = "h-8 w-auto" }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/cubic-labs-logo.png"
        alt="Cubic Labs"
        width={120}
        height={80}
        className={className}
      />
    </div>
  );
}


export { CubicLogo as CubicLabs };
