import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

const WHATSAPP_NUMBER = "5521971331197";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(21) 97133-1197",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "psicologasuellenrodrigues05@gmail.com",
    href: "mailto:psicologasuellenrodrigues05@gmail.com",
  }
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const text = [
      `Olá, Suellen! Vim pelo site e gostaria de agendar uma consulta.`,
      ``,
      `*Nome:* ${data.name}`,
      `*E-mail:* ${data.email}`,
      data.phone ? `*Telefone:* ${data.phone}` : null,
      ``,
      `*Mensagem:*`,
      data.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    resetForm();
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-violet-600 bg-violet-100 rounded-full mb-5">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 leading-tight">
            Vamos conversar? <span className="gradient-text">Estou aqui.</span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Preencha o formulário e você será redirecionado para o WhatsApp com
            a mensagem já pronta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-violet-50 border border-violet-100 hover:border-violet-300 hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl gradient-primary shadow-md group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-slate-800 mt-0.5">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-white">
              <p className="font-semibold text-sm mb-1">
                Horários de atendimento
              </p>
              <p className="text-sm opacity-90">Segunda a sexta: 8h – 20h</p>
              <p className="text-sm opacity-90">Sábado: 8h – 13h</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-violet-50 rounded-2xl p-6 sm:p-8 border border-violet-100 space-y-5"
              noValidate
            >
              <div>
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  className="mt-1.5"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="mt-1.5"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">
                  Telefone / WhatsApp{" "}
                  <span className="text-slate-400 font-normal">(opcional)</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(21) 97133-1197"
                  className="mt-1.5"
                  {...register("phone")}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  placeholder="Conte um pouco sobre o que você está buscando..."
                  className="mt-1.5"
                  rows={5}
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar pelo WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
