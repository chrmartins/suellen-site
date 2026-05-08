import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/siteConfig";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "linear-gradient(135deg, #7c3aed 0%, #60a5fa 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${SITE_URL}/assets/logo.png`}
          alt=""
          width={126}
          height={126}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
