"use client";

import { useState } from "react";
import AppShell from "@/components/navigation/AppShell";
import { NOTIFICATIONS, Notification } from "@/data/notifications";

const TYPE_ICONS: Record<string, string> = {
  new_message:    "💬",
  event_reminder: "📅",
  nearby_event:   "📍",
  serqlemate:     "👥",
  event_update:   "🎪",
  soul_card:      "✦",
};

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState<Notification[]>(NOTIFICATIONS);

  function markAllRead() {
    setNotifs((prev) => prev.map((n) => ({ ...n, isRead: true })));
  }

  function markRead(id: string) {
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  }

  const unreadCount = notifs.filter((n) => !n.isRead).length;

  return (
    <AppShell>
      {/* Header */}
      <div
        style={{
          paddingTop: 56,
          paddingInline: 24,
          paddingBottom: 16,
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
              marginBottom: 2,
            }}
          >
            Notifications
          </h1>
          <p style={{ fontSize: 13, color: "#8cb89a" }}>
            {unreadCount > 0 ? `${unreadCount} unread` : "All caught up ✓"}
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            style={{
              background: "none",
              border: "0.5px solid #c9a878",
              borderRadius: 999,
              paddingInline: 14,
              paddingBlock: 7,
              color: "#c9a878",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              marginTop: 4,
            }}
          >
            Mark all read
          </button>
        )}
      </div>

      {/* List */}
      <div style={{ paddingInline: 16 }}>
        {notifs.map((notif, i) => (
          <button
            key={notif.id}
            onClick={() => markRead(notif.id)}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              width: "100%",
              paddingBlock: 14,
              paddingInline: 8,
              background: notif.isRead
                ? "transparent"
                : "rgba(201,168,120,0.06)",
              border: "none",
              borderBottom: "0.5px solid rgba(200,230,208,0.1)",
              cursor: "pointer",
              textAlign: "left",
              borderRadius: i === 0 ? "12px 12px 0 0" : i === notifs.length - 1 ? "0 0 12px 12px" : 0,
              transition: "background 0.2s ease",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: notif.isRead
                  ? "rgba(26,92,69,0.4)"
                  : "rgba(201,168,120,0.15)",
                border: `0.5px solid ${notif.isRead ? "rgba(200,230,208,0.15)" : "#c9a878"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {TYPE_ICONS[notif.type] ?? "🔔"}
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 3,
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: notif.isRead ? 500 : 700,
                    color: notif.isRead ? "#d4b896" : "#f5ede0",
                    flex: 1,
                  }}
                >
                  {notif.title}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "#5A7A6A",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {notif.time}
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#8cb89a",
                  lineHeight: 1.45,
                }}
              >
                {notif.message}
              </p>
            </div>

            {/* Unread dot */}
            {!notif.isRead && (
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#c9a878",
                  flexShrink: 0,
                  marginTop: 6,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </AppShell>
  );
}