import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

export const runtime = "edge";
export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #eff6ff 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
          gap: "60px",
        }}
      >
        {/* Foto */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${SITE_URL}/assets/foto.png`}
          alt="Suellen Rodrigues"
          width={260}
          height={320}
          style={{
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
            objectFit: "cover",
            objectPosition: "top",
            flexShrink: 0,
          }}
        />

        {/* Texto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
          {/* Badge CRP */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#ede9fe",
              color: "#7c3aed",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "999px",
              width: "fit-content",
            }}
          >
            Psicóloga Clínica · CRP 05/85974
          </div>

          {/* Nome */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <span
              style={{
                fontSize: "64px",
                fontWeight: 800,
                color: "#1e293b",
                lineHeight: 1.1,
              }}
            >
              Suellen
            </span>
            <span
              style={{
                fontSize: "64px",
                fontWeight: 800,
                lineHeight: 1.1,
                background: "linear-gradient(135deg, #7c3aed, #60a5fa)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Rodrigues
            </span>
          </div>

          {/* Descrição */}
          <p
            style={{
              fontSize: "20px",
              color: "#475569",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "500px",
            }}
          >
            {SITE_DESCRIPTION}
          </p>

          {/* Domínio */}
          <span
            style={{
              fontSize: "16px",
              color: "#7c3aed",
              fontWeight: 600,
              marginTop: "8px",
            }}
          >
            suellenrodrigues.com.br
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
