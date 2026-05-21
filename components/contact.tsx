"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Phone, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Got a project in mind? Drop me a line — I'd love to chat."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-violet-500/20 blur-3xl" />
              <h3 className="font-display font-bold text-2xl mb-3 relative">
                Let&apos;s talk.
              </h3>
              <p className="text-muted-foreground leading-relaxed relative mb-6">
                Whether you have a project, an idea, or just want to say
                hello, my inbox is always open.
              </p>

              <div className="space-y-3 relative">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-colors group"
                    >
                      <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-sm font-medium truncate">
                          {info.value}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-7 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              placeholder="What's this about?"
            />
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-2xl bg-card/60 border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || submitted}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Message sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-2xl bg-card/60 border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
      />
    </div>
  );
}
