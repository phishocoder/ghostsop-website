import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
              fontSize: "28px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#93c5fd",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(15,23,42,0.6)",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              G
            </div>
            GhostSOP
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
