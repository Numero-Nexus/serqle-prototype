"use client";

import { useState } from "react";
import AppShell from "@/components/navigation/AppShell";
import { CONTACTS } from "@/data/users";

export default function SerqlematesPage() {
  const [contacts, setContacts] = useState(CONTACTS);
  const [tab,      setTab]      = useState<"connected" | "discover">("connected");

  function toggleConnect(id: string) {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isConnected: !c.isConnected } : c
      )
    );
  }

  const connected = contacts.filter((c) => c.isConnected);
  const discover  = contacts.filter((c) => !c.isConnected);

  return (
    <AppShell>
      {/* Header */}
      <div style={{ paddingTop: 56, paddingInline: 24, paddingBottom: 16 }}>
        <h1
          style={{
            fontSize: 26,
            color: "#f5ede0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            marginBottom: 4,
          }}
        >
          Serqlemates
        </h1>
        <p style={{ fontSize: 13, color: "#8cb89a" }}>
          {connected.length} connected
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          paddingInline: 24,
          gap: 0,
          marginBottom: 20,
          borderBottom: "0.5px solid rgba(200,230,208,0.12)",
        }}
      >
        {(["connected", "discover"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              paddingBlock: 12,
              background: "none",
              border: "none",
              borderBottom: `2px solid ${tab === t ? "#c9a878" : "transparent"}`,
              color: tab === t ? "#c9a878" : "#8cb89a",
              fontSize: 13,
              fontWeight: tab === t ? 700 : 500,
              cursor: "pointer",
              textTransform: "capitalize",
              transition: "all 0.18s ease",
            }}
          >
            {t === "connected" ? "Connected" : "Discover"}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          paddingInline: 16,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {(tab === "connected" ? connected : discover).map((person) => (
          <div
            key={person.id}
            style={{
              background: "rgba(26,92,69,0.40)",
              border: "0.5px solid rgba(200,230,208,0.18)",
              borderRadius: 20,
              padding: 16,
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "#0d3d2c",
                border: "2px solid #c9a878",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 700,
                color: "#c8e6d0",
                flexShrink: 0,
              }}
            >
              {person.name.charAt(0)}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#f5ede0",
                  marginBottom: 2,
                }}
              >
                {person.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#c9a84c",
                  fontStyle: "italic",
                  marginBottom: 2,
                }}
              >
                {person.archetype}
              </div>
              <div style={{ fontSize: 12, color: "#8cb89a", marginBottom: 8 }}>
                📍 {person.city}
              </div>

              {/* Trait pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {person.traits.map((trait) => (
                  <span
                    key={trait}
                    style={{
                      fontSize: 10,
                      color: "#c8e6d0",
                      background: "rgba(13,61,44,0.6)",
                      border: "0.5px solid rgba(200,230,208,0.2)",
                      borderRadius: 999,
                      paddingInline: 9,
                      paddingBlock: 3,
                    }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect button */}
            <button
              onClick={() => toggleConnect(person.id)}
              style={{
                paddingInline: 14,
                paddingBlock: 8,
                borderRadius: 999,
                border: person.isConnected
                  ? "0.5px solid #3dac7a"
                  : "0.5px solid #c9a878",
                background: person.isConnected
                  ? "rgba(61,172,122,0.15)"
                  : "rgba(201,168,120,0.15)",
                color: person.isConnected ? "#3dac7a" : "#c9a878",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {person.isConnected ? "✓ Connected" : "+ Connect"}
            </button>
          </div>
        ))}

        {/* Empty state for discover */}
        {tab === "discover" && discover.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 60,
              gap: 12,
            }}
          >
            <span style={{ fontSize: 40 }}>👥</span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#f5ede0",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              You know everyone here
            </span>
            <span style={{ fontSize: 13, color: "#8cb89a" }}>
              More people coming soon
            </span>
          </div>
        )}
      </div>
    </AppShell>
  );
}