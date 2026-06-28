import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(ellipse at top left, rgba(16,185,129,0.35), transparent 55%), radial-gradient(ellipse at bottom right, rgba(4,120,87,0.4), transparent 60%), #050a08",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #34d399, #047857)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              boxShadow: "0 8px 32px rgba(16,185,129,0.5)",
            }}
          >
            M
          </div>
          <div style={{ fontSize: 24, opacity: 0.7 }}>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: 18,
              alignSelf: "flex-start",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 8, background: "#34d399" }} />
            {siteConfig.role}
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Je construis des produits que les gens adorent utiliser.
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.65)" }}>
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>Next.js · TypeScript · Spring Boot · PostgreSQL</span>
          <span>Douala, Cameroun</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
