import { Reveal } from "@/components/Reveal";
import { Check, CheckCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

interface ChatMessage {
  from: "client" | "us";
  text: string;
  time: string;
  ticks?: 1 | 2;
}

interface ChatBlock {
  name: string;
  phoneMasked: string;
  date: string;
  messages: ChatMessage[];
}

const CHATS: ChatBlock[] = [
  {
    name: "Rajiv K. (Toronto)",
    phoneMasked: "+91 ●●●●●●1240",
    date: "Today",
    messages: [
      {
        from: "us",
        text: "Inspection done ✅ Sharing photos & quick report now.",
        time: "10:42",
        ticks: 2,
      },
      {
        from: "client",
        text: "Wow, super quick. Thanks 🙏 Everything looks fine?",
        time: "10:44",
      },
      {
        from: "us",
        text: "Yes sir, all clear. Minor tap leak in kitchen — fixed today itself.",
        time: "10:45",
        ticks: 2,
      },
      {
        from: "client",
        text: "You guys are a lifesaver 🙌",
        time: "10:46",
      },
    ],
  },
  {
    name: "Simran K. (Chandigarh)",
    phoneMasked: "+91 ●●●●●●3387",
    date: "Yesterday",
    messages: [
      {
        from: "client",
        text: "Hi, parents arriving tomorrow. Need deep cleaning urgently.",
        time: "18:21",
      },
      {
        from: "us",
        text: "Absolutely. Team can reach by 9 AM tomorrow. Confirm?",
        time: "18:23",
        ticks: 2,
      },
      {
        from: "client",
        text: "Confirmed. Please share photos once done.",
        time: "18:24",
      },
      {
        from: "us",
        text: "Done ✅ Photos shared. House is move-in ready 🌿",
        time: "15:10",
        ticks: 2,
      },
    ],
  },
];

const Bubble = ({ msg }: { msg: ChatMessage }) => {
  const mine = msg.from === "us";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-snug shadow-sm ${
          mine
            ? "bg-[#dcf8c6] text-[#0b1a0b] rounded-br-md"
            : "bg-white text-[#101418] rounded-bl-md border border-black/5"
        }`}
      >
        <p>{msg.text}</p>
        <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-black/50">
          <span>{msg.time}</span>
          {mine && msg.ticks === 2 && <CheckCheck className="h-3 w-3 text-[#34b7f1]" />}
          {mine && msg.ticks === 1 && <Check className="h-3 w-3" />}
        </div>
      </div>
    </div>
  );
};

export const WhatsappProof = () => {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">Real Conversations</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
          What Our Clients Say on WhatsApp
        </h2>
        <p className="mt-4 text-muted-foreground">
          Real client feedback. Phone numbers blurred for privacy.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {CHATS.map((chat, i) => (
          <Reveal key={chat.name} delay={i * 100}>
            <article className="rounded-3xl overflow-hidden shadow-premium border border-border/50 bg-white transition-spring hover:-translate-y-1">
              {/* Phone-style header */}
              <header className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3">
                <span className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center font-bold text-sm">
                  {chat.name.charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm leading-tight truncate">{chat.name}</div>
                  <div className="text-[11px] text-white/70 truncate select-none">
                    {chat.phoneMasked}
                  </div>
                </div>
                <span className="text-[10px] bg-white/15 rounded-full px-2 py-0.5">{chat.date}</span>
              </header>

              {/* Chat body */}
              <div
                className="p-4 space-y-2.5 min-h-[280px]"
                style={{
                  backgroundColor: "#ece5dd",
                  backgroundImage:
                    "radial-gradient(circle at 20% 10%, rgba(0,0,0,0.03) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.03) 0, transparent 40%)",
                }}
              >
                {chat.messages.map((m, j) => (
                  <Bubble key={j} msg={m} />
                ))}
              </div>

              <footer className="px-4 py-2.5 text-[11px] text-muted-foreground bg-card border-t border-border/50 text-center">
                Real client feedback — shared with permission
              </footer>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10 text-center">
        <Button
          asChild
          size="lg"
          className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-elevated"
        >
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            Start a Chat on WhatsApp
          </a>
        </Button>
      </Reveal>
    </section>
  );
};
