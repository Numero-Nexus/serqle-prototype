"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { CONVERSATIONS, Message } from "@/data/conversations";
import AppShell from "@/components/navigation/AppShell";

export default function ChatPage() {
  const { id }   = useParams();
  const router   = useRouter();
  const conv     = CONVERSATIONS.find((c) => c.id === id);

  const [messages, setMessages] = useState<Message[]>(conv?.messages ?? []);
  const [input,    setInput]    = useState("");
  const [typing,   setTyping]   = useState(false);
  const bottomRef              = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!conv) {
    return (
      <AppShell showNav={false}>
        <div style={{ padding: 24, color: "#f5ede0" }}>Conversation not found.</div>
      </AppShell>
    );
  }

  function handleSend() {
    if (!conv) return;
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMsg: Message = {
      id:        `m-${Date.now()}`,
      senderId:  "usr-000",
      content:   trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMine:    true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Simulate reply after 1.2s
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply: Message = {
        id:        `m-${Date.now() + 1}`,
        senderId:  conv.userId,
        content:   getAutoReply(trimmed),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isMine:    false,
      };
      setMessages((prev) => [...prev, reply]);
    }, 1200);
  }

  return (
    <AppShell showNav={false}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            paddingTop: 52,
            paddingBottom: 12,
            paddingInline: 16,
            borderBottom: "0.5px solid rgba(200,230,208,0.12)",
            background: "rgba(13,61,44,0.92)",
            backdropFilter: "blur(12px)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          {/* Back */}
          <button
            onClick={() => router.back()}
            style={{
              background: "none",
              border: "none",
              color: "#c8e6d0",
              fontSize: 20,
              cursor: "pointer",
              paddingRight: 4,
            }}
          >
            ←
          </button>

          {/* Avatar */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(26,92,69,0.6)",
              border: "1.5px solid #c9a878",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              color: "#c8e6d0",
              flexShrink: 0,
            }}
          >
            {conv.name.charAt(0)}
          </div>

          {/* Name + archetype */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#f5ede0" }}>
              {conv.name}
            </div>
            <div style={{ fontSize: 11, color: "#8cb89a", fontStyle: "italic" }}>
              {conv.archetype}
            </div>
          </div>

          {/* Online dot */}
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3dac7a",
              }}
            />
            <span style={{ fontSize: 11, color: "#8cb89a" }}>Online</span>
          </div>
        </div>

        {/* ── Messages ── */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px 16px 8px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          className="scrollbar-hide"
        >
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}

          {/* Typing indicator */}
          {typing && (
            <div style={{ display: "flex", justifyContent: "flex-start", padding: "4px 0" }}>
              <div
                style={{
                  background: "rgba(26,92,69,0.45)",
                  border: "0.5px solid rgba(200,230,208,0.18)",
                  borderRadius: "18px 18px 18px 4px",
                  padding: "10px 14px",
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#8cb89a",
                      animation: `bounce 1s ${i * 0.15}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* ── Composer ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 8,
            padding: "10px 16px 32px",
            borderTop: "0.5px solid rgba(200,230,208,0.12)",
            background: "rgba(13,61,44,0.92)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Attach */}
          <button
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(26,92,69,0.5)",
              border: "0.5px solid rgba(200,230,208,0.18)",
              color: "#c9a878",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            +
          </button>

          {/* Input */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Share something meaningful..."
            rows={1}
            style={{
              flex: 1,
              background: "rgba(26,92,69,0.4)",
              border: "0.5px solid rgba(200,230,208,0.18)",
              borderRadius: 20,
              padding: "10px 16px",
              color: "#f5ede0",
              fontSize: 14,
              fontFamily: "inherit",
              resize: "none",
              outline: "none",
              lineHeight: 1.4,
              maxHeight: 100,
              overflowY: "auto",
            }}
          />

          {/* Send */}
          <button
            onClick={handleSend}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: input.trim() ? "#c9a878" : "rgba(26,92,69,0.5)",
              border: "0.5px solid rgba(200,230,208,0.18)",
              color: input.trim() ? "#1a1200" : "#8cb89a",
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
          >
            ➤
          </button>
        </div>
      </div>

      {/* Bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>
    </AppShell>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: msg.isMine ? "flex-end" : "flex-start",
        marginBlock: 4,
        paddingInline: 4,
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          borderRadius: msg.isMine ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          padding: "10px 14px",
          background: msg.isMine
            ? "rgba(201,168,76,0.18)"
            : "rgba(26,92,69,0.45)",
          border: msg.isMine
            ? "0.5px solid rgba(201,168,76,0.30)"
            : "0.5px solid rgba(200,230,208,0.18)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <span
          style={{
            fontSize: 14,
            lineHeight: 1.45,
            color: msg.isMine ? "#fdfcf8" : "#f5ede0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            // fontSize: 15,
          }}
        >
          {msg.content}
        </span>
        <span
          style={{
            fontSize: 10,
            color: msg.isMine ? "rgba(245,237,224,0.5)" : "#8cb89a",
            textAlign: msg.isMine ? "right" : "left",
          }}
        >
          {msg.timestamp}
        </span>
      </div>
    </div>
  );
}

function getAutoReply(input: string): string {
  const replies = [
    "That sounds amazing! 🌿",
    "I was just thinking the same thing.",
    "Yes! Let's make it happen.",
    "Tell me more about that.",
    "Haha I totally get that feeling.",
    "We should definitely catch up soon.",
    "You always know exactly what to say 😊",
    "I'm in! When are you thinking?",
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}