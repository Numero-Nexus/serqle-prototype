"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Event } from "@/data/events";

export default function EventCardBig({ item }: { item: Event }) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/events/${item.id}`)}
      style={{
        width: 180,
        borderRadius: 24,
        overflow: "hidden",
        background: "rgba(26,92,69,0.40)",
        border: "0.5px solid rgba(200,230,208,0.18)",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: 180, height: 130 }}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "#0d3d2c" }} />
        )}

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(6,30,20,0.42)",
          }}
        />

        {/* Heart */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked((v) => !v); }}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 28,
            height: 28,
            borderRadius: 14,
            background: "rgba(7,26,21,0.55)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          <span style={{ color: liked ? "#E05C5C" : "#d4b896" }}>
            {liked ? "♥" : "♡"}
          </span>
        </button>

        {/* Date badge */}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: 8,
            background: "#c9a878",
            borderRadius: 8,
            paddingInline: 7,
            paddingBlock: 3,
            minWidth: 34,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a0e", lineHeight: 1.2 }}>
            {item.day}
          </div>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#5a4020", letterSpacing: 0.6, textTransform: "uppercase" }}>
            {item.month}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 10, display: "flex", flexDirection: "column", gap: 3 }}>
        <span
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: "#c8e6d0",
            letterSpacing: 0.9,
            textTransform: "uppercase",
          }}
        >
          {item.category}
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#f5ede0",
            lineHeight: 1.35,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 2, marginTop: 3 }}>
          <span style={{ fontSize: 9 }}>📍</span>
          <span
            style={{
              fontSize: 10,
              color: "#8cb89a",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            {item.location}
          </span>
        </div>
      </div>
    </div>
  );
}