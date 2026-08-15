"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/navigation/AppShell";
import SoulCardBanner from "@/components/home/SoulCardBanner";
import EventCardBig from "@/components/events/EventCardBig";
import EventCardNearby from "@/components/events/EventCardNearby";
import CategoryPill from "@/components/ui/CategoryPill";
import SectionHeader from "@/components/ui/SectionHeader";
import { EVENTS, CATEGORIES } from "@/data/events";
import { ME } from "@/data/users";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  const filtered = useMemo(() => {
    if (activeCategory === "all") return EVENTS;
    return EVENTS.filter(
      (e) => e.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const trending = filtered.filter((e) => e.isTrending);
  const nearby   = filtered.slice(0, 5);

  return (
    <AppShell>

      {/* ── Header ── */}
      <div
        style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          paddingInline:  24,
          paddingTop:     56,
          paddingBottom:  12,
        }}
      >
        {/* Wordmark */}
        <span
          style={{
            fontSize:    28,
            fontWeight:  900,
            color:       "#f5ede0",
            fontFamily:  "'Playfair Display', Georgia, serif",
            letterSpacing: -0.5,
          }}
        >
          Serqle
        </span>

        {/* Header actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>

          {/* Search */}
          <button
            onClick={() => router.push("/search")}
            style={{
              width:          36,
              height:         36,
              borderRadius:   "50%",
              background:     "rgba(26,92,69,0.5)",
              border:         "0.5px solid rgba(200,230,208,0.18)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              cursor:         "pointer",
              fontSize:       15,
            }}
          >
            🔍
          </button>

          {/* Bell */}
          <button
            onClick={() => router.push("/notifications")}
            style={{
              width:          36,
              height:         36,
              borderRadius:   "50%",
              background:     "rgba(26,92,69,0.5)",
              border:         "0.5px solid rgba(200,230,208,0.18)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              cursor:         "pointer",
              position:       "relative",
              fontSize:       15,
            }}
          >
            🔔
            {ME.notifCount > 0 && (
              <span
                style={{
                  position:     "absolute",
                  top:          6,
                  right:        6,
                  width:        8,
                  height:       8,
                  borderRadius: "50%",
                  background:   "#E05C5C",
                }}
              />
            )}
          </button>

          {/* Coin chip */}
          <div
            style={{
              display:       "flex",
              alignItems:    "center",
              gap:           5,
              background:    "rgba(26,92,69,0.5)",
              border:        "0.5px solid rgba(200,230,208,0.18)",
              borderRadius:  999,
              paddingInline: 12,
              paddingBlock:  6,
            }}
          >
            <span style={{ fontSize: 12, color: "#c9a84c" }}>✦</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#f5ede0" }}>
              {ME.coins}
            </span>
          </div>
        </div>
      </div>

      {/* ── Greeting ── */}
      <div style={{ paddingInline: 24, paddingTop: 8, marginBottom: 16 }}>
        <p style={{ fontSize: 13, color: "#8cb89a", marginBottom: 4 }}>
          Good evening, {ME.name} ·{" "}
          <span style={{ color: "#c9a84c" }}>📍 {ME.city}</span>
        </p>
        <p
          style={{
            fontSize:    22,
            fontWeight:  700,
            color:       "#f5ede0",
            fontFamily:  "'Playfair Display', Georgia, serif",
            lineHeight:  1.3,
          }}
        >
          What's calling you tonight?
        </p>
      </div>

      {/* ── Quick links row ── */}
      <div
        style={{
          display:    "flex",
          gap:        8,
          paddingInline: 24,
          marginBottom:  16,
          overflowX:  "auto",
        }}
        className="scrollbar-hide"
      >
        {[
          { label: "Serqlemates", icon: "👥", href: "/serqlemates"   },
          { label: "Soul Card",   icon: "✦",  href: "/soul"          },
          { label: "Discover",    icon: "🔍", href: "/search"        },
          { label: "Notifs",      icon: "🔔", href: "/notifications" },
        ].map((link) => (
          <button
            key={link.href}
            onClick={() => router.push(link.href)}
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            6,
              paddingInline:  14,
              paddingBlock:   8,
              borderRadius:   999,
              background:     "rgba(26,92,69,0.4)",
              border:         "0.5px solid rgba(200,230,208,0.18)",
              color:          "#c8e6d0",
              fontSize:       12,
              fontWeight:     500,
              cursor:         "pointer",
              whiteSpace:     "nowrap",
              flexShrink:     0,
              transition:     "background 0.18s ease",
            }}
          >
            <span style={{ fontSize: 13 }}>{link.icon}</span>
            <span>{link.label}</span>
          </button>
        ))}
      </div>

      {/* ── Soul Card ── */}
      <div style={{ marginBottom: 24 }}>
        <SoulCardBanner />
      </div>

      {/* ── Category Pills ── */}
      <div
        style={{
          display:       "flex",
          flexDirection: "row",
          gap:           8,
          paddingInline: 24,
          overflowX:     "auto",
          marginBottom:  24,
        }}
        className="scrollbar-hide"
      >
        {CATEGORIES.map((cat) => (
          <CategoryPill
            key={cat.id}
            label={cat.label}
            icon={cat.icon}
            active={activeCategory === cat.id}
            onPress={() => setActiveCategory(cat.id)}
          />
        ))}
      </div>

      {/* ── Trending Now ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader title="Trending Now" onViewAll={() => {}} />
        <div
          style={{
            display:       "flex",
            flexDirection: "row",
            gap:           12,
            paddingInline: 24,
            overflowX:     "auto",
            paddingBottom: 4,
          }}
          className="scrollbar-hide"
        >
          {(trending.length > 0 ? trending : EVENTS.slice(0, 4)).map((evt) => (
            <EventCardBig key={evt.id} item={evt} />
          ))}
        </div>
      </div>

      {/* ── Nearby Events ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader title="Nearby Events" onViewAll={() => {}} />
        <div style={{ paddingInline: 24 }}>
          {(nearby.length > 0 ? nearby : EVENTS.slice(0, 5)).map((evt) => (
            <EventCardNearby key={evt.id} item={evt} />
          ))}
        </div>
      </div>

      {/* ── Recommended for you ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader title="For You" onViewAll={() => {}} />
        <div
          style={{
            display:       "flex",
            flexDirection: "row",
            gap:           12,
            paddingInline: 24,
            overflowX:     "auto",
            paddingBottom: 4,
          }}
          className="scrollbar-hide"
        >
          {EVENTS.filter((e) => e.isFeatured).map((evt) => (
            <EventCardBig key={evt.id} item={evt} />
          ))}
        </div>
      </div>

      {/* ── Find people ── */}
      <div style={{ paddingInline: 24, marginBottom: 12 }}>
        <button
          onClick={() => router.push("/serqlemates")}
          style={{
            width:          "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            background:     "rgba(26,92,69,0.40)",
            border:         "0.5px solid rgba(200,230,208,0.18)",
            borderRadius:   20,
            paddingInline:  20,
            paddingBlock:   16,
            cursor:         "pointer",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <p
              style={{
                fontSize:   14,
                fontWeight: 700,
                color:      "#f5ede0",
                marginBottom: 3,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Find your Serqlemates
            </p>
            <p style={{ fontSize: 12, color: "#8cb89a" }}>
              Discover people who vibe like you
            </p>
          </div>
          <div
            style={{
              width:          40,
              height:         40,
              borderRadius:   "50%",
              background:     "rgba(201,168,120,0.15)",
              border:         "1px solid #c9a878",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              fontSize:       18,
              flexShrink:     0,
            }}
          >
            👥
          </div>
        </button>
      </div>

    </AppShell>
  );
}