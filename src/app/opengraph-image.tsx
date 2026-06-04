import { ImageResponse } from "next/og";

export const alt = "MTX Hosting — Where Great Projects Live";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080c10",
          backgroundImage:
            "linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(0,119,255,0.08) 50%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #00e5ff, #0077ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: "#000",
            }}
          >
            MTX
          </div>
          <span
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#e8edf2",
              letterSpacing: "-0.02em",
            }}
          >
            MTXHosting
          </span>
        </div>
        <p
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#e8edf2",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Where Great Projects Live.
        </p>
        <p
          style={{
            marginTop: 24,
            fontSize: 20,
            color: "#5a6a7a",
          }}
        >
          Managed hosting · EU data centers
        </p>
      </div>
    ),
    { ...size },
  );
}
