import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#08080a",
          color: "#f4f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 24,
            color: "#818cf8",
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Data Engineering Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#c9c9d1", fontWeight: 500 }}>
            {profile.headline} · {profile.headlineDetail}
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#9a9aa5" }}>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "#818cf8", fontWeight: 700 }}>500+</span> clients
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "#818cf8", fontWeight: 700 }}>200K+</span> assets
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "#818cf8", fontWeight: 700 }}>98%</span> SLA
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
