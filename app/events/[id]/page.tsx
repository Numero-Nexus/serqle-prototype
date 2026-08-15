"use client";

import { useRouter } from "next/navigation";
import AppShell from "@/components/navigation/AppShell";
import { CONVERSATIONS } from "@/data/conversations";

export default function ConversationsPage() {
  const router = useRouter();

  return (
    <AppShell>
      {/* Header */}
      <div style={{ paddingTop: 56, paddingInline: 24, paddingBottom: 16 }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 300,
            color: "#f5ede0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            marginBottom: 4,
          }}
        >
          Chats
        </h1>
        <p style={{ fontSize: 13, color: "#8cb89a" }}>
          {CONVERSATIONS.filter((c) => c.unreadCount > 0).length} unread
        </p>
      </div>

      {/* Conversation list */}
      <div style={{ paddingInline: 24, display: "flex", flexDirection: "column", gap: 0 }}>
        {CONVERSATIONS.map((conv) => (
          <button
            key={conv.id}
            onClick={() => router.push(`/chat/${conv.id}`)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingBlock: 14,
              borderBottom: "0.5px solid rgba(200,230,208,0.1)",
              background: "none",
              border: "none",
            //   borderBottom: "0.5px solid rgba(200,230,208,0.1)",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(26,92,69,0.6)",
                border: "1.5px solid #c9a878",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 700,
                color: "#c8e6d0",
                flexShrink: 0,
              }}
            >
              {conv.name.charAt(0)}
            </div>

            {/* Body */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 3,
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#f5ede0",
                  }}
                >
                  {conv.name}
                </span>
                <span style={{ fontSize: 11, color: "#8cb89a", flexShrink: 0 }}>
                  {conv.lastMessageAt}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    color: conv.unreadCount > 0 ? "#d4b896" : "#8cb89a",
                    fontWeight: conv.unreadCount > 0 ? 500 : 400,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    flex: 1,
                  }}
                >
                  {conv.lastMessage}
                </span>

                {/* Unread dot */}
                {conv.unreadCount > 0 && (
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#c9a878",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#1a1200",
                      flexShrink: 0,
                      marginLeft: 8,
                    }}
                  >
                    {conv.unreadCount}
                  </div>
                )}
              </div>

              {/* Archetype pill */}
              <span
                style={{
                  fontSize: 10,
                  color: "#8cb89a",
                  fontStyle: "italic",
                }}
              >
                {conv.archetype}
              </span>
            </div>
          </button>
        ))}
      </div>
    </AppShell>
  );
}