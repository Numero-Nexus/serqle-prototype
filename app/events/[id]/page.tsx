"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { EVENTS } from "@/data/events";
import AppShell from "@/components/navigation/AppShell";

export default function EventDetailPage() {
  const { id } = useParams();
  const router  = useRouter();
  const event   = EVENTS.find((e) => e.id === id);

  const [joined,     setJoined]     = useState(false);
  const [interested, setInterested] = useState(false);
  const [saved,      setSaved]      = useState(false);

  if (!event) {
    return (
      <AppShell showNav={false}>
        <div style={{ padding: 24, color: "#f5ede0" }}>Event not found.</div>
      </AppShell>
    );
  }

  const spotsLeft = event.maxAttendees - event.attendees;

  return (
    <AppShell showNav={false}>

      {/* ── Hero Image ── */}
      <div style={{ position: "relative", width: "100%", height: 280 }}>
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "#1a5c45" }} />
        )}

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(13,61,44,0.3) 0%, rgba(13,61,44,0.85) 100%)",
          }}
        />

        {/* Back button */}
        <button
          onClick={() => router.back()}
          style={{
            position: "absolute",
            top: 52,
            left: 20,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(13,61,44,0.7)",
            border: "0.5px solid rgba(200,230,208,0.25)",
            color: "#f5ede0",
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ←
        </button>

        {/* Save button */}
        <button
          onClick={() => setSaved((v) => !v)}
          style={{
            position: "absolute",
            top: 52,
            right: 20,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(13,61,44,0.7)",
            border: "0.5px solid rgba(200,230,208,0.25)",
            color: saved ? "#c9a84c" : "#f5ede0",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {saved ? "🔖" : "🔖"}
        </button>

        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 20,
            background: "#c9a878",
            borderRadius: 999,
            paddingInline: 12,
            paddingBlock: 4,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 600, color: "#3A2A14" }}>
            {event.category}
          </span>
        </div>

        {/* Vibe badge */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            right: 20,
            background: "rgba(26,92,69,0.7)",
            border: "0.5px solid rgba(200,230,208,0.25)",
            borderRadius: 999,
            paddingInline: 12,
            paddingBlock: 4,
          }}
        >
          <span style={{ fontSize: 11, color: "#c8e6d0" }}>{event.vibe}</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: "24px 24px 120px" }}>

        {/* Title */}
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#f5ede0",
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          {event.title}
        </h1>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <MetaRow icon="📅" text={`${event.date} · ${event.time}`} />
          <MetaRow icon="📍" text={`${event.location} · ${event.distance}`} />
          <MetaRow icon="👤" text={`Hosted by ${event.host} (${event.hostSoulType})`} />
          <MetaRow
            icon="🎟"
            text={`${event.attendees} attending · ${spotsLeft} spots left`}
          />
          <MetaRow
            icon="💰"
            text={event.isFree ? "Free entry" : event.price}
            accent={event.isFree}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            height: "0.5px",
            background: "rgba(200,230,208,0.15)",
            marginBottom: 20,
          }}
        />

        {/* Description */}
        <h2
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#c8e6d0",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          About
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#d4b896",
            lineHeight: 1.65,
            marginBottom: 24,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            
          }}
        >
          {event.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {event.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                color: "#c8e6d0",
                background: "rgba(26,92,69,0.5)",
                border: "0.5px solid #8cb89a",
                borderRadius: 999,
                paddingInline: 12,
                paddingBlock: 5,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Attendee count bar */}
        <div
          style={{
            background: "rgba(26,92,69,0.40)",
            border: "0.5px solid rgba(200,230,208,0.18)",
            borderRadius: 16,
            padding: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 12, color: "#8cb89a" }}>Attendance</span>
            <span style={{ fontSize: 12, color: "#c8e6d0", fontWeight: 600 }}>
              {event.attendees} / {event.maxAttendees}
            </span>
          </div>
          <div
            style={{
              height: 4,
              background: "rgba(200,230,208,0.15)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(event.attendees / event.maxAttendees) * 100}%`,
                background: "#c9a878",
                borderRadius: 2,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 12 }}>
          <ActionButton
            label={interested ? "✓ Interested" : "Interested"}
            active={interested}
            variant="outline"
            onClick={() => setInterested((v) => !v)}
          />
          <ActionButton
            label={joined ? "✓ Joined" : "Join Event"}
            active={joined}
            variant="filled"
            onClick={() => setJoined((v) => !v)}
          />
        </div>
      </div>
    </AppShell>
  );
}

function MetaRow({
  icon,
  text,
  accent = false,
}: {
  icon: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 14, width: 20, textAlign: "center" }}>{icon}</span>
      <span
        style={{
          fontSize: 14,
          color: accent ? "#3dac7a" : "#d4b896",
          fontWeight: accent ? 600 : 400,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function ActionButton({
  label,
  active,
  variant,
  onClick,
}: {
  label: string;
  active: boolean;
  variant: "filled" | "outline";
  onClick: () => void;
}) {
  const isFilled = variant === "filled";

  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        height: 52,
        borderRadius: 999,
        border: isFilled
          ? "none"
          : `1.5px solid ${active ? "#c9a878" : "rgba(200,230,208,0.3)"}`,
        background: isFilled
          ? active
            ? "#3dac7a"
            : "#c9a878"
          : active
          ? "rgba(201,168,120,0.15)"
          : "transparent",
        color: isFilled ? "#1a1200" : active ? "#c9a878" : "#d4b896",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 0.5,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </button>
  );
}