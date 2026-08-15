"use client";

import { useState } from "react";
import AppShell from "@/components/navigation/AppShell";
import { MY_STATS } from "@/data/stats";
import { MY_SOUL_CARD } from "@/data/soulCards";
import { ME } from "@/data/users";
import GlassCard from "@/components/ui/GlassCard";

export default function StatsPage() {
  return (
    <AppShell>
      {/* ── Header ── */}
      <div style={{ paddingTop: 56, paddingInline: 24, paddingBottom: 20 }}>
        <h1
          style={{
            fontSize: 26,
            color: "#f5ede0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            letterSpacing: -0.3,
            marginBottom: 2,
          }}
        >
          Your Serqle
        </h1>
        <p style={{ fontSize: 13, color: "#8cb89a" }}>
          How the world sees you
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingInline: 16,
        }}
      >
        {/* ── Identity Card ── */}
        <GlassCard style={{ padding: 20, position: "relative", overflow: "hidden" }}>
          {/* Orb */}
          <div
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 140,
              height: 140,
              borderRadius: "50%",
              background: "#c9a878",
              opacity: 0.08,
              pointerEvents: "none",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            {/* Avatar */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#0d3d2c",
                border: "2px solid #c9a878",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 700,
                color: "#c8e6d0",
                flexShrink: 0,
              }}
            >
              {ME.name.charAt(0)}
            </div>

            <div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#f5ede0",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                {ME.name}
              </div>
              <div style={{ fontSize: 12, color: "#8cb89a" }}>@{ME.username}</div>
              <div style={{ fontSize: 12, color: "#c9a84c", marginTop: 2 }}>
                📍 {ME.city}
              </div>
            </div>
          </div>

          {/* Soul archetype row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(13,61,44,0.5)",
              borderRadius: 12,
              padding: "10px 14px",
            }}
          >
            <div>
              <div style={{ fontSize: 9, color: "#8cb89a", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>
                Soul Archetype
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#f5ede0",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                {MY_SOUL_CARD.title}
              </div>
            </div>
            <div
              style={{
                background: "#c9a878",
                borderRadius: 999,
                paddingInline: 12,
                paddingBlock: 5,
                fontSize: 11,
                fontWeight: 700,
                color: "#1a1200",
              }}
            >
              Active
            </div>
          </div>
        </GlassCard>

        {/* ── Core Stats Grid ── */}
        <div>
          <SectionLabel>Overview</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
            <StatCard
              value={MY_STATS.eventsAttended}
              label="Events Attended"
              icon="🎪"
              accent="#c9a878"
            />
            <StatCard
              value={MY_STATS.eventsHosted}
              label="Events Hosted"
              icon="🎤"
              accent="#c9a84c"
            />
            <StatCard
              value={MY_STATS.serqlemates}
              label="Serqlemates"
              icon="👥"
              accent="#3dac7a"
            />
            <StatCard
              value={`${ME.coins} ✦`}
              label="Serqle Points"
              icon="⭐"
              accent="#c9a84c"
            />
          </div>
        </div>

        {/* ── Reputation Scores ── */}
        <div>
          <SectionLabel>Reputation</SectionLabel>
          <GlassCard style={{ padding: 20 }}>
            <ScoreBar label="Trust Score"    value={MY_STATS.trustScore}    color="#c9a878" />
            <ScoreBar label="Social Score"   value={MY_STATS.socialScore}   color="#3dac7a" />
            <ScoreBar label="Attendee Score" value={MY_STATS.attendeeScore} color="#c9a84c" />
            <ScoreBar label="Host Score"     value={MY_STATS.hostScore}     color="#8cb89a" last />
          </GlassCard>
        </div>

        {/* ── Badges ── */}
        <div>
          <SectionLabel>Badges</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {MY_STATS.badges.map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(26,92,69,0.40)",
                  border: "0.5px solid #c9a878",
                  borderRadius: 999,
                  paddingInline: 14,
                  paddingBlock: 7,
                }}
              >
                <span style={{ fontSize: 14 }}>✦</span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#c8e6d0",
                  }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Top Categories ── */}
        <div>
          <SectionLabel>Your Vibe</SectionLabel>
          <GlassCard style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {MY_STATS.topCategories.map((cat, i) => {
                const max = MY_STATS.topCategories[0].count;
                const pct = (cat.count / max) * 100;
                return (
                  <div key={cat.label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span style={{ fontSize: 13, color: "#d4b896" }}>
                        {cat.label}
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#c8e6d0",
                        }}
                      >
                        {cat.count} events
                      </span>
                    </div>
                    <div
                      style={{
                        height: 4,
                        background: "rgba(200,230,208,0.12)",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background:
                            i === 0
                              ? "#c9a878"
                              : i === 1
                              ? "#3dac7a"
                              : i === 2
                              ? "#c9a84c"
                              : "#8cb89a",
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* ── Recent Feedback ── */}
        <div>
          <SectionLabel>Recent Feedback</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {MY_STATS.recentFeedback.map((fb, i) => (
              <GlassCard key={i} style={{ padding: 16 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#f5ede0",
                      flex: 1,
                      marginRight: 8,
                    }}
                  >
                    {fb.event}
                  </span>
                  <div style={{ display: "flex", gap: 2 }}>
                    {Array.from({ length: fb.rating }).map((_, j) => (
                      <span key={j} style={{ fontSize: 12, color: "#c9a84c" }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#8cb89a",
                    fontStyle: "italic",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    lineHeight: 1.5,
                  }}
                >
                  "{fb.comment}"
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* ── Vibe Tags ── */}
        <div style={{ marginBottom: 8 }}>
          <SectionLabel>Soul Signals</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {MY_SOUL_CARD.vibeTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  color: "#c8e6d0",
                  background: "rgba(26,92,69,0.5)",
                  border: "0.5px solid #8cb89a",
                  borderRadius: 999,
                  paddingInline: 14,
                  paddingBlock: 6,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

/* ── Sub-components ── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        color: "#8cb89a",
        letterSpacing: 2,
        textTransform: "uppercase",
        marginBottom: 10,
        paddingInline: 4,
      }}
    >
      {children}
    </div>
  );
}

function StatCard({
  value,
  label,
  icon,
  accent,
}: {
  value: number | string;
  label: string;
  icon: string;
  accent: string;
}) {
  return (
    <div
      style={{
        background: "rgba(26,92,69,0.40)",
        border: "0.5px solid rgba(200,230,208,0.18)",
        borderRadius: 16,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: accent,
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />
      <span style={{ fontSize: 22 }}>{icon}</span>
      <span
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: "#f5ede0",
          fontFamily: "'Playfair Display', Georgia, serif",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: 12, color: "#8cb89a" }}>{label}</span>
    </div>
  );
}

function ScoreBar({
  label,
  value,
  color,
  last = false,
}: {
  label: string;
  value: number;
  color: string;
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span style={{ fontSize: 13, color: "#d4b896" }}>{label}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color }}>
          {value}
          <span style={{ fontSize: 11, color: "#8cb89a", fontWeight: 400 }}>
            /100
          </span>
        </span>
      </div>
      <div
        style={{
          height: 5,
          background: "rgba(200,230,208,0.12)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            background: color,
            borderRadius: 3,
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </div>
  );
}