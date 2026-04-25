import { useState, type FormEvent } from "react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle, Calendar, CheckCircle2 } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import showcase from "@/assets/showcase-interior.jpg";

const SLOTS = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

const Contact = () => {
  const [slot, setSlot] = useState<string>("");
  const [service, setService] = useState<string>("");

  const todayStr = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 13 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const onBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/\D/g, "").slice(-10);
    const date = String(fd.get("date") || "").trim();
    const location = String(fd.get("location") || "").trim();

    if (!name || phone.length !== 10 || !date || !slot || !service || !location) {
      toast({
        title: "Please complete all fields",
        description: "Name, phone (10 digits), date, time slot, service and location are required.",
        variant: "destructive",
      });
      return;
    }

    const msg = `Hi 👋 I want to book an appointment:\n\nName: ${name}\nService: ${service}\nDate: ${date}\nTime: ${slot}\nLocation: ${location}\nPhone: ${phone}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast({
      title: "Booking ready ✅",
      description: "We've opened WhatsApp with your booking details. Send the message to confirm.",
    });
  };

  const onEnquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !phone || !message) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    const msg = `Hi 👋 New enquiry:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    (e.currentTarget as HTMLFormElement).reset();
    toast({ title: "Thanks! We'll respond shortly." });
  };

  const cards = [
    { icon: Phone, title: "Call Us", value: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: MessageCircle, title: "WhatsApp", value: "Chat instantly", href: waLink(), external: true },
    { icon: Mail, title: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, title: "Location", value: SITE.location },
  ];

  return (
    <Layout>
      <Seo
        title="Contact Apna Ghar Care | Property Management in Tricity"
        description="Call, WhatsApp or book an inspection appointment with Apna Ghar Care — premium property management for NRIs and homeowners in Tricity."
        canonicalPath="/contact"
      />
      <PageHero
        eyebrow="Contact Us"
        title="We're here to take care of your home"
        subtitle="Call, WhatsApp or book an inspection appointment — we usually reply within 10 minutes."
        image={showcase}
        imageAlt="Modern Indian home interior"
        height="sm"
      />

      <section className="container-page py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, value, href, external }, i) => {
            const inner = (
              <article className="h-full rounded-2xl bg-card border border-border/60 p-6 shadow-elevated transition-spring hover:-translate-y-1.5 hover:shadow-premium text-center">
                <span className="mx-auto h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{value}</p>
              </article>
            );
            return (
              <Reveal key={title} delay={i * 70}>
                {href ? (
                  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Booking */}
          <Reveal>
            <div className="rounded-2xl bg-card border border-border/60 shadow-elevated p-7 md:p-9">
              <div className="flex items-center gap-2">
                <span className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display font-bold text-2xl">Book an Appointment</h2>
                  <p className="text-sm text-muted-foreground">We'll confirm on WhatsApp.</p>
                </div>
              </div>

              <form className="mt-6 grid gap-4" onSubmit={onBooking}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="b-name">Name</Label>
                    <Input id="b-name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="b-phone">Phone Number</Label>
                    <Input id="b-phone" name="phone" type="tel" placeholder="10-digit mobile" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="b-date">Date</Label>
                    <Input
                      id="b-date"
                      name="date"
                      type="date"
                      min={todayStr}
                      max={maxDate}
                      required
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Service Type</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inspection">Inspection</SelectItem>
                        <SelectItem value="Cleaning">Cleaning</SelectItem>
                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                        <SelectItem value="Tenant Management">Tenant Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label>Time slot</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SLOTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSlot(s)}
                        className={cn(
                          "px-3 py-2.5 rounded-xl text-sm font-semibold border transition-base",
                          slot === s
                            ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                            : "bg-background border-border hover:border-primary/40 hover:text-primary"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="b-location">Property Location</Label>
                  <Input id="b-location" name="location" placeholder="Area + City (e.g. Sector 22, Chandigarh)" required />
                </div>

                <Button type="submit" size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-elevated mt-2">
                  <MessageCircle className="h-5 w-5" /> Confirm via WhatsApp
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Enquiry + info */}
          <Reveal delay={120}>
            <div className="rounded-2xl bg-card border border-border/60 shadow-elevated p-7 md:p-9">
              <h2 className="font-display font-bold text-2xl">Send us a quick enquiry</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Share your details and we'll suggest the right plan for your home.
              </p>
              <form className="mt-6 grid gap-4" onSubmit={onEnquiry}>
                <div className="grid gap-1.5">
                  <Label htmlFor="e-name">Name</Label>
                  <Input id="e-name" name="name" required />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="e-phone">Phone</Label>
                  <Input id="e-phone" name="phone" type="tel" required />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="e-message">Message</Label>
                  <Textarea id="e-message" name="message" rows={5} required placeholder="Tell us about your property and what you need." />
                </div>
                <Button type="submit" size="lg" className="bg-gradient-primary shadow-elevated">Send Enquiry</Button>
              </form>

              <div className="mt-7 pt-6 border-t border-border/60 grid gap-3 text-sm">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span><b>Working hours:</b> 9:00 AM – 8:00 PM (Mon–Sat)</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span><b>Service areas:</b> Chandigarh, Mohali, Panchkula</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span><b>Response time:</b> Within 10 minutes on WhatsApp</span></div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-10">
          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-elevated aspect-[16/7]">
            <iframe
              title="Tricity location"
              src="https://www.google.com/maps?q=Tricity%2C%20India&output=embed"
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Contact;
