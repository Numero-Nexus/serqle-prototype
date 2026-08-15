"use client";

import { useState } from "react";
import AppShell from "@/components/navigation/AppShell";
import { UPCOMING_EVENTS, ATTENDED_EVENTS, RECENT_ACTIVITY } from "@/data/activity";
import SectionHeader from "@/components/ui/SectionHeader";

const FILTERS = ["All", "Upcoming", "Attended", "Saved", "Past"];

export default function ActivityPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <AppShell>
      {/* ── Header ── */}
      <div
        style={{
          paddingTop: 56,
          paddingBottom: 14,
          paddingInline: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 26,
              color: "#f5ede0",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: -0.3,
              marginBottom: 2,
            }}
          >
            Activity
          </h1>
          <p style={{ fontSize: 13, color: "#8cb89a" }}>Your Serqle journey</p>
        </div>
        <button
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(26,92,69,0.5)",
            border: "0.5px solid rgba(200,230,208,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          🔔
        </button>
      </div>

      {/* ── Filter tabs ── */}
      <div
        style={{
          display: "flex",
          gap: 10,
          paddingInline: 24,
          overflowX: "auto",
          paddingBottom: 12,
          borderBottom: "0.5px solid rgba(200,230,208,0.1)",
          marginBottom: 20,
        }}
        className="scrollbar-hide"
      >
        {FILTERS.map((f) => {
          const active = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                paddingInline: 18,
                paddingBlock: 7,
                borderRadius: 20,
                border: `1px solid ${active ? "#c9a84c" : "rgba(200,230,208,0.18)"}`,
                background: "transparent",
                color: active ? "#c9a84c" : "#8cb89a",
                fontSize: 13,
                fontWeight: active ? 600 : 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.18s ease",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* ── Body ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          paddingInline: 16,
        }}
      >
        {/* Upcoming */}
        {(activeFilter === "All" || activeFilter === "Upcoming") && (
          <div>
            <SectionHeader title="Upcoming" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {UPCOMING_EVENTS.map((item) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Attended */}
        {(activeFilter === "All" || activeFilter === "Attended") && (
          <div>
            <SectionHeader title="Attended" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ATTENDED_EVENTS.map((item) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Recent Activity */}
        {activeFilter === "All" && (
          <div>
            <SectionHeader title="Recent Activity" />
            <div
              style={{
                background: "rgba(26,92,69,0.30)",
                border: "0.5px solid rgba(200,230,208,0.12)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {RECENT_ACTIVITY.map((item, i) => (
                <div key={item.id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "14px 14px",
                      gap: 12,
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: "rgba(26,92,69,0.6)",
                        border: "0.5px solid rgba(200,230,208,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 17,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#8cb89a",
                          lineHeight: 1.45,
                        }}
                      >
                        {item.text}{" "}
                        <span style={{ color: "#f5ede0", fontWeight: 700 }}>
                          {item.bold}
                        </span>
                        {item.suffix && (
                          <span style={{ color: "#8cb89a" }}> {item.suffix}</span>
                        )}
                      </p>
                      <p style={{ fontSize: 11, color: "#5A7A6A", marginTop: 2 }}>
                        {item.time}
                      </p>
                    </div>

                    {/* Right element */}
                    {item.right === "avatars" && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {[0, 1, 2].map((j) => (
                          <div
                            key={j}
                            style={{
                              width: 26,
                              height: 26,
                              borderRadius: "50%",
                              background: "rgba(26,92,69,0.8)",
                              border: "1.5px solid #0d3d2c",
                              marginLeft: j === 0 ? 0 : -8,
                              zIndex: 3 - j,
                            }}
                          />
                        ))}
                        <div
                          style={{
                            marginLeft: -8,
                            background: "rgba(26,92,69,0.8)",
                            borderRadius: 10,
                            paddingInline: 6,
                            paddingBlock: 2,
                            border: "0.5px solid rgba(200,230,208,0.15)",
                          }}
                        >
                          <span style={{ fontSize: 10, color: "#8cb89a", fontWeight: 600 }}>
                            {item.count}
                          </span>
                        </div>
                      </div>
                    )}

                    {item.right === "rating" && (
                      <div
                        style={{
                          background: "rgba(26,92,69,0.6)",
                          borderRadius: 10,
                          paddingInline: 10,
                          paddingBlock: 4,
                          border: "0.5px solid rgba(200,230,208,0.15)",
                        }}
                      >
                        <span style={{ fontSize: 13, color: "#c9a84c", fontWeight: 700 }}>
                          {item.rating} ⭐
                        </span>
                      </div>
                    )}

                    {(item.right === "image" || item.right === "avatar-single") && (
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 8,
                          background: "rgba(26,92,69,0.6)",
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </div>

                  {/* Divider */}
                  {i < RECENT_ACTIVITY.length - 1 && (
                    <div
                      style={{
                        height: "0.5px",
                        background: "rgba(200,230,208,0.1)",
                        marginInline: 14,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saved placeholder */}
        {activeFilter === "Saved" && (
          <EmptyState
            icon="🔖"
            title="No saved events"
            subtitle="Events you bookmark will appear here"
          />
        )}

        {/* Past placeholder */}
        {activeFilter === "Past" && (
          <div>
            <SectionHeader title="Past Events" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ATTENDED_EVENTS.map((item) => (
                <EventCard key={item.id} item={item} muted />
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

/* ── Event Card ── */
function EventCard({
  item,
  muted = false,
}: {
  item: (typeof UPCOMING_EVENTS)[0];
  muted?: boolean;
}) {
  return (
    <div
      style={{
        background: "rgba(26,92,69,0.30)",
        border: "0.5px solid rgba(200,230,208,0.12)",
        borderRadius: 14,
        flexDirection: "row",
        display: "flex",
        overflow: "hidden",
        opacity: muted ? 0.7 : 1,
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          width: 110,
          background: "rgba(26,92,69,0.5)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
        }}
      >
        🎪
      </div>

      {/* Info */}
      <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", gap: 4 }}>
        <span
          style={{
            fontSize: 11,
            color: "#2DC9A0",
            fontWeight: 600,
            letterSpacing: 0.5,
          }}
        >
          {item.date}
        </span>
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#f5ede0",
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </span>
        <span style={{ fontSize: 12, color: "#8cb89a" }}>📍 {item.location}</span>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 6,
          }}
        >
          <span
            style={{
              border: `1px solid ${item.tagColor}`,
              borderRadius: 20,
              paddingInline: 12,
              paddingBlock: 4,
              fontSize: 11,
              fontWeight: 600,
              color: item.tagColor,
            }}
          >
            {item.tag}
          </span>
          {/* Avatar stack */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {[0, 1, 2].map((j) => (
              <div
                key={j}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(26,92,69,0.8)",
                  border: "1.5px solid rgba(13,61,44,0.8)",
                  marginLeft: j === 0 ? 0 : -8,
                }}
              />
            ))}
            <span
              style={{
                marginLeft: 6,
                fontSize: 10,
                color: "#8cb89a",
                fontWeight: 600,
              }}
            >
              {item.attendeeCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Empty State ── */
function EmptyState({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBlock: 60,
        gap: 12,
      }}
    >
      <span style={{ fontSize: 40 }}>{icon}</span>
      <span
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#f5ede0",
          fontFamily: "'Playfair Display', Georgia, serif",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontSize: 13,
          color: "#8cb89a",
          textAlign: "center",
          maxWidth: 240,
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </span>
    </div>
  );
}