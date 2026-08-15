"use client";

import { useState } from "react";
import AppShell from "@/components/navigation/AppShell";
import { ME } from "@/data/users";
import { MY_SOUL_CARD } from "@/data/soulCards";
import { MY_STATS } from "@/data/stats";
import GlassCard from "@/components/ui/GlassCard";

const SETTINGS_SECTIONS = [
  {
    title: "Preferences",
    items: [
      { icon: "🔔", label: "Notifications",      value: "On"          },
      { icon: "📍", label: "Location sharing", value: "Melbourne" },
      { icon: "◎",  label: "Event radius",       value: "10 km"       },
      { icon: "🌐", label: "Language",           value: "English"     },
    ],
  },
  {
    title: "Privacy",
    items: [
      { icon: "👁", label: "Profile visibility", value: "Public"      },
      { icon: "💬", label: "Who can message me", value: "Serqlemates" },
      { icon: "◈",  label: "Soul Card visible",  value: "Yes"         },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: "✉️", label: "Email",              value: ME.email      },
      { icon: "🔑", label: "Password",           value: "••••••••"    },
      { icon: "🗑", label: "Delete account",     value: ""            },
    ],
  },
];

export default function ProfilePage() {
  const [notifOn, setNotifOn] = useState(true);

  return (
    <AppShell>
      {/* Header */}
      <div style={{ paddingTop: 56, paddingInline: 24, paddingBottom: 20 }}>
        <h1
          style={{
            fontSize: 26,
            color: "#f5ede0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          Profile
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingInline: 16,
        }}
      >
        {/* Identity */}
        <GlassCard style={{ padding: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 16,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                background: "#0d3d2c",
                border: "2.5px solid #c9a878",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 700,
                color: "#c8e6d0",
                flexShrink: 0,
                position: "relative",
              }}
            >
              {ME.name.charAt(0)}
              {/* Edit badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "#c9a878",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  border: "2px solid #0d3d2c",
                }}
              >
                ✎
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#f5ede0",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  marginBottom: 2,
                }}
              >
                {ME.name}
              </div>
              <div style={{ fontSize: 13, color: "#8cb89a" }}>
                @{ME.username}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#c9a84c",
                  marginTop: 3,
                }}
              >
                📍 {ME.city}
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 8,
            }}
          >
            {[
              { value: MY_STATS.eventsAttended, label: "Attended" },
              { value: MY_STATS.eventsHosted,   label: "Hosted"   },
              { value: MY_STATS.serqlemates,    label: "Mates"    },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(13,61,44,0.5)",
                  borderRadius: 12,
                  padding: "10px 8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#f5ede0",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: "#8cb89a" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Soul Card Summary */}
        <GlassCard style={{ padding: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#8cb89a",
                  letterSpacing: 1.8,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                ◈ Soul Card
              </p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#f5ede0",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  marginBottom: 2,
                }}
              >
                {MY_SOUL_CARD.title}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {MY_SOUL_CARD.vibeTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      color: "#c8e6d0",
                      background: "rgba(13,61,44,0.6)",
                      border: "0.5px solid rgba(200,230,208,0.2)",
                      borderRadius: 999,
                      paddingInline: 8,
                      paddingBlock: 3,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(201,168,120,0.15)",
                border: "1px solid #c9a878",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              ✦
            </div>
          </div>
        </GlassCard>

        {/* Settings sections */}
        {SETTINGS_SECTIONS.map((section) => (
          <div key={section.title}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#8cb89a",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 8,
                paddingInline: 4,
              }}
            >
              {section.title}
            </p>
            <GlassCard style={{ overflow: "hidden", borderRadius: 16 }}>
              {section.items.map((item, i) => (
                <div key={item.label}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                    }}
                  >
                    <span style={{ fontSize: 17, width: 24, textAlign: "center" }}>
                      {item.icon}
                    </span>
                    <span
                      style={{
                        flex: 1,
                        fontSize: 14,
                        color:
                          item.label === "Delete account" ? "#E05C5C" : "#f5ede0",
                      }}
                    >
                      {item.label}
                    </span>
                    {item.value && (
                      <span style={{ fontSize: 13, color: "#8cb89a" }}>
                        {item.value}
                      </span>
                    )}
                    {item.label !== "Delete account" && (
                      <span style={{ fontSize: 13, color: "#5A7A6A" }}>›</span>
                    )}
                  </div>
                  {i < section.items.length - 1 && (
                    <div
                      style={{
                        height: "0.5px",
                        background: "rgba(200,230,208,0.1)",
                        marginLeft: 52,
                      }}
                    />
                  )}
                </div>
              ))}
            </GlassCard>
          </div>
        ))}

        {/* Sign out */}
        <button
          style={{
            width: "100%",
            paddingBlock: 14,
            borderRadius: 999,
            border: "0.5px solid rgba(224,92,92,0.4)",
            background: "rgba(224,92,92,0.08)",
            color: "#E05C5C",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: 8,
          }}
        >
          Sign Out
        </button>
      </div>
    </AppShell>
  );
}