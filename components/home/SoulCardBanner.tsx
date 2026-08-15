import { MY_SOUL_CARD } from "@/data/soulCards";
import { ME } from "@/data/users";
import GlassCard from "@/components/ui/GlassCard";

export default function SoulCardBanner() {
  const card = MY_SOUL_CARD;

  return (
    <GlassCard
      style={{
        marginInline: 24,
        padding: 20,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orbs */}
      <div
        style={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 110,
          height: 110,
          borderRadius: "50%",
          background: "#c9a878",
          opacity: 0.10,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -20,
          left: -20,
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: "#c9a84c",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#c8e6d0", letterSpacing: 1.6 }}>
          ✦  YOUR SOUL CARD
        </span>
        <span
          style={{
            fontSize: 10,
            color: "#c8e6d0",
            fontWeight: 600,
            background: "#0d3d2c",
            border: "0.5px solid #c9a878",
            borderRadius: 999,
            paddingInline: 10,
            paddingBlock: 3,
          }}
        >
          Active
        </span>
      </div>

      {/* Identity row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
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
          {ME.name.charAt(0).toUpperCase()}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#f5ede0",
              fontFamily: "system-ui",
              marginBottom: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {card.title}
          </div>
          <div style={{ fontSize: 12, color: "#8cb89a" }}>{card.subtitle}</div>
        </div>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: 13,
          color: "#d4b896",
          lineHeight: 1.55,
          marginBottom: 12,
          fontStyle: "italic",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {card.tagline}
      </p>

      {/* Vibe tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {card.vibeTags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11,
              color: "#c8e6d0",
              background: "#0d3d2c",
              border: "0.5px solid #8cb89a",
              borderRadius: 999,
              paddingInline: 10,
              paddingBlock: 4,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}