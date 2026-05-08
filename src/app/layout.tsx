import {
  CRP,
  EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_HREF,
} from "@/lib/siteConfig";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | Suellen Rodrigues Psicóloga`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "psicóloga",
    "psicóloga clínica",
    "psicologia clínica",
    "terapia individual",
    "atendimento psicológico online",
    "saúde mental",
    "ansiedade",
    "depressão",
    "Suellen Rodrigues",
    CRP,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Suellen Rodrigues Psicóloga",
    locale: "pt_BR",
    type: "website",
  },
  authors: [{ name: "Suellen Rodrigues", url: SITE_URL }],
  creator: "Suellen Rodrigues",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  // Referenciadas para uso interno — evita import não utilizado
  other: {
    "contact:email": EMAIL,
    "contact:whatsapp": WHATSAPP_HREF,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
