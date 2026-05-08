import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/siteConfig";

export const runtime = "edge";
export const sizes = [
  { width: 192, height: 192 },
  { width: 512, height: 512 },
];
export const contentType = "image/png";

export default async function Icon({ id }: { id: string }) {
  const size = id === "0" ? 192 : 512;

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: size * 0.22,
          background: "linear-gradient(135deg, #7c3aed 0%, #60a5fa 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${SITE_URL}/assets/logo.png`}
          alt=""
          width={size * 0.7}
          height={size * 0.7}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { width: size, height: size },
  );
}
