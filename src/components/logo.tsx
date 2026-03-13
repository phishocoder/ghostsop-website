type GhostSopLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function GhostMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 96"
      aria-hidden="true"
      className={joinClasses("h-11 w-11 shrink-0", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ghostsop-mark-fill" x1="14" y1="14" x2="70" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9F4FF" />
          <stop offset="1" stopColor="#7DD3FC" />
        </linearGradient>
      </defs>
      <path
        d="M44 4C59.4 4 72 16.5 72 31.9V33.6C72 54.2 77.5 68.6 83.1 78.7C85.8 83.7 81.8 89.8 76.1 89.1C69.4 88.3 63.8 85.2 58.4 83.3C53.7 81.7 49.2 83.5 44 86.2C38.8 88.9 34.3 90.8 29.6 89.1C24.2 87.2 18.6 88.3 11.9 89.1C6.2 89.8 2.2 83.7 4.9 78.7C10.5 68.6 16 54.2 16 33.6V31.9C16 16.5 28.6 4 44 4Z"
        fill="url(#ghostsop-mark-fill)"
        stroke="#1E3A8A"
        strokeWidth="3.5"
      />
      <ellipse cx="31" cy="34" rx="5.4" ry="8" fill="#1E3A8A" />
      <ellipse cx="57" cy="34" rx="5.4" ry="8" fill="#1E3A8A" />
      <path
        d="M24 58H37L47 48H64"
        stroke="#FB923C"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 48H46L53 58"
        stroke="#FB923C"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23.5" cy="58" r="5.5" fill="#D9F4FF" stroke="#FB923C" strokeWidth="4" />
      <circle cx="33.5" cy="48" r="5.5" fill="#D9F4FF" stroke="#FB923C" strokeWidth="4" />
      <circle cx="64.5" cy="58" r="5.5" fill="#D9F4FF" stroke="#FB923C" strokeWidth="4" />
    </svg>
  );
}

export function GhostSopLogo({ className, markClassName, textClassName }: GhostSopLogoProps) {
  return (
    <div className={joinClasses("flex items-center gap-3", className)}>
      <GhostMark className={markClassName} />
      <span
        className={joinClasses(
          "text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl",
          textClassName,
        )}
      >
        GhostSOP
      </span>
    </div>
  );
}
