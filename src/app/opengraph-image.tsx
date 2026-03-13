import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function GhostMark() {
  return (
    <svg width="76" height="84" viewBox="0 0 88 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="og-ghost-fill" x1="14" y1="14" x2="70" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9F4FF" />
          <stop offset="1" stopColor="#7DD3FC" />
        </linearGradient>
      </defs>
      <path
        d="M44 4C59.4 4 72 16.5 72 31.9V33.6C72 54.2 77.5 68.6 83.1 78.7C85.8 83.7 81.8 89.8 76.1 89.1C69.4 88.3 63.8 85.2 58.4 83.3C53.7 81.7 49.2 83.5 44 86.2C38.8 88.9 34.3 90.8 29.6 89.1C24.2 87.2 18.6 88.3 11.9 89.1C6.2 89.8 2.2 83.7 4.9 78.7C10.5 68.6 16 54.2 16 33.6V31.9C16 16.5 28.6 4 44 4Z"
        fill="url(#og-ghost-fill)"
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

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "#050816",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(37,99,235,0.45), transparent 36%), radial-gradient(circle at bottom right, rgba(45,212,191,0.22), transparent 28%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#ffffff",
            }}
          >
            <GhostMark />
            <span style={{ fontSize: "48px", fontWeight: 700, letterSpacing: "-0.04em" }}>GhostSOP</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "980px" }}>
            <div style={{ fontSize: "68px", lineHeight: 1.05, fontWeight: 700 }}>
              You&apos;re not losing clients because of bad marketing.
            </div>
            <div style={{ fontSize: "38px", lineHeight: 1.2, color: "#cbd5e1" }}>
              You&apos;re losing them because you respond too late.
            </div>
            <div style={{ fontSize: "26px", lineHeight: 1.4, color: "#e2e8f0", maxWidth: "900px" }}>
              Lead handling infrastructure for service businesses that already get inquiries.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "24px",
              color: "#94a3b8",
            }}
          >
            <span>The front desk system for businesses without a front desk.</span>
            <span style={{ color: "#67e8f9" }}>One-time system install</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
