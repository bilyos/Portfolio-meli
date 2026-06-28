import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
          color: "white",
          fontFamily: "system-ui",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
