"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/navigation/AppShell";
import { EVENTS, CATEGORIES } from "@/data/events";

const RECENT_SEARCHES = ["Rooftop events", "Music Ahmedabad", "Free events", "Tech meetup"];

export default function SearchPage() {
  const [query,          setQuery]          = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  const results = useMemo(() => {
    if (!query && activeCategory === "all") return [];
    return EVENTS.filter((e) => {
      const matchesQuery =
        !query ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.category.toLowerCase().includes(query.toLowerCase()) ||
        e.location.toLowerCase().includes(query.toLowerCase()) ||
        e.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCat =
        activeCategory === "all" ||
        e.category.toLowerCase() === activeCategory.toLowerCase();
      return matchesQuery && matchesCat;
    });
  }, [query, activeCategory]);

  const showResults  = query.length > 0 || activeCategory !== "all";
  const showEmpty    = showResults && results.length === 0;

  return (
    <AppShell>
      {/* Header */}
      <div style={{ paddingTop: 56, paddingInline: 24, paddingBottom: 16 }}>
        <h1
          style={{
            fontSize: 26,
            color: "#f5ede0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            marginBottom: 16,
          }}
        >
          Discover
        </h1>

        {/* Search input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(26,92,69,0.40)",
            border: "0.5px solid rgba(200,230,208,0.25)",
            borderRadius: 999,
            paddingInline: 18,
            paddingBlock: 13,
          }}
        >
          <span style={{ fontSize: 16, color: "#8cb89a" }}>🔍</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Events, people, vibes..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "#f5ede0",
              fontSize: 15,
              fontFamily: "inherit",
            }}
          />
          {query.length > 0 && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                color: "#8cb89a",
                fontSize: 18,
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Category pills */}
      <div
        style={{
          display: "flex",
          gap: 8,
          paddingInline: 24,
          overflowX: "auto",
          marginBottom: 24,
        }}
        className="scrollbar-hide"
      >
        {CATEGORIES.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                paddingInline: 14,
                paddingBlock: 7,
                borderRadius: 999,
                border: active ? "none" : "0.5px solid #8cb89a",
                background: active ? "#c9a878" : "rgba(26,92,69,0.5)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 13 }}>{cat.icon}</span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: active ? "#3A2A14" : "#c8e6d0",
                }}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      <div style={{ paddingInline: 24 }}>
        {/* Recent searches */}
        {!showResults && (
          <div style={{ marginBottom: 28 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#8cb89a",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Recent Searches
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {RECENT_SEARCHES.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    paddingBlock: 13,
                    borderBottom: "0.5px solid rgba(200,230,208,0.1)",
                    background: "none",
                    border: "none",
                    // borderBottom: "0.5px solid rgba(200,230,208,0.1)",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: 14, color: "#8cb89a" }}>🕐</span>
                  <span style={{ fontSize: 14, color: "#d4b896" }}>{s}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {showResults && !showEmpty && (
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#8cb89a",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              {results.length} Result{results.length !== 1 ? "s" : ""}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {results.map((evt) => (
                <button
                  key={evt.id}
                  onClick={() => router.push(`/events/${evt.id}`)}
                  style={{
                    display: "flex",
                    gap: 12,
                    background: "rgba(26,92,69,0.30)",
                    border: "0.5px solid rgba(200,230,208,0.12)",
                    borderRadius: 14,
                    overflow: "hidden",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    {evt.image ? (
                      <img
                        src={evt.image}
                        alt={evt.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#1a5c45",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 24,
                        }}
                      >
                        🎪
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 12px 12px 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        color: "#c8e6d0",
                        letterSpacing: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {evt.category}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#f5ede0",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {evt.title}
                    </span>
                    <span style={{ fontSize: 12, color: "#8cb89a" }}>
                      {evt.date} · {evt.location}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: evt.isFree ? "#3dac7a" : "#c9a84c",
                        fontWeight: 600,
                      }}
                    >
                      {evt.isFree ? "Free" : evt.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {showEmpty && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 60,
              gap: 12,
            }}
          >
            <span style={{ fontSize: 40 }}>🔍</span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#f5ede0",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              No results found
            </span>
            <span style={{ fontSize: 13, color: "#8cb89a", textAlign: "center" }}>
              Try a different search or category
            </span>
          </div>
        )}
      </div>
    </AppShell>
  );
}