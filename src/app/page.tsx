import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import {
  CRP,
  EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_HREF,
} from "@/lib/siteConfig";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: "+5521971331197",
      email: EMAIL,
      areaServed: {
        "@type": "Country",
        name: "Brazil",
      },
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Psicoterapia Individual",
          description: "Acompanhamento psicológico individual para adultos.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Atendimento Online",
          description: "Sessões via plataformas seguras, sem sair de casa.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Saúde Mental",
          description:
            "Atendimento a demandas como ansiedade, depressão, estresse e luto.",
        },
      ],
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo.png`,
      },
      image: `${SITE_URL}/assets/foto.png`,
      sameAs: [WHATSAPP_HREF],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Suellen Rodrigues",
      jobTitle: "Psicóloga Clínica",
      description: SITE_DESCRIPTION,
      identifier: CRP,
      telephone: "+5521971331197",
      email: EMAIL,
      url: SITE_URL,
      image: `${SITE_URL}/assets/foto.png`,
      sameAs: [WHATSAPP_HREF],
      worksFor: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
