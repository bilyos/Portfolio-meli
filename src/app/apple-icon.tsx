import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #34d399, #047857)",
          borderRadius: 38,
          color: "white",
          fontFamily: "system-ui",
          fontSize: 110,
          fontWeight: 800,
          boxShadow: "0 0 60px rgba(16,185,129,0.4) inset",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
