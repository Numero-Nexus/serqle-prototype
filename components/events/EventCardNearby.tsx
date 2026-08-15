"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Event } from "@/data/events";

export default function EventCardNearby({ item }: { item: Event }) {
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/events/${item.id}`)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingBlock: 10,
        borderBottom: "0.5px solid rgba(26,92,69,0.8)",
        cursor: "pointer",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          overflow: "hidden",
          background: "#0d3d2c",
          flexShrink: 0,
        }}
      >
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      {/* Date block */}
      <div style={{ textAlign: "center", minWidth: 30, flexShrink: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#c8e6d0", lineHeight: 1.1 }}>
          {item.day}
        </div>
        <div style={{ fontSize: 9, fontWeight: 600, color: "#8cb89a", letterSpacing: 0.6, textTransform: "uppercase" }}>
          {item.month}
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#f5ede0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.title}
        </span>
        <span style={{ fontSize: 11, color: "#8cb89a" }}>By {item.host}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ fontSize: 9 }}>📍</span>
          <span
            style={{
              fontSize: 10,
              color: "#8cb89a",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item.location} · {item.distance}
          </span>
        </div>
      </div>

      {/* Bookmark */}
      <button
        onClick={(e) => { e.stopPropagation(); setSaved((v) => !v); }}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 16,
          flexShrink: 0,
          paddingLeft: 4,
          color: saved ? "#c9a84c" : "#d4b896",
        }}
      >
        {saved ? "🔖" : "🔖"}
      </button>
    </div>
  );
}