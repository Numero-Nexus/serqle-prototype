"use client";

import { useEffect, useRef } from "react";

export default function MandalaBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Base gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #0d3d2c 0%, #1a5c45 50%, #0d3d2c 100%)",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          paddingBottom: "120%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(26,92,69,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Mandala SVG */}
      <MandalaOrb />

      {/* Sparks */}
      <Sparks />
    </div>
  );
}

function MandalaOrb() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 320,
        height: 320,
        opacity: 0.18,
        animation: "spin 60s linear infinite",
      }}
    >
      <style>{`
        @keyframes spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translate(-50%,-50%) translateY(0); } 50% { transform: translate(-50%,-50%) translateY(-12px); } }
        @keyframes twinkle { 0%,100% { opacity: 0; } 50% { opacity: 1; } }
      `}</style>
      <svg viewBox="0 0 380 380" fill="none" style={{ width: "100%", height: "100%" }}>
        <circle cx="190" cy="190" r="170" stroke="#c8e6d0" strokeWidth="1"   opacity="0.35" />
        <circle cx="190" cy="190" r="148" stroke="#c9a84c" strokeWidth="0.8" opacity="0.25" />
        <circle cx="190" cy="190" r="120" stroke="#c9a878" strokeWidth="0.8" opacity="0.30" />
        <circle cx="190" cy="190" r="88"  stroke="#c9a84c" strokeWidth="0.8" opacity="0.22" />
        {Array.from({ length: 12 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 30} 190 190)`}>
            <ellipse cx="190" cy="50" rx="12" ry="28" fill={i % 2 === 0 ? "#c8e6d0" : "#c9a84c"} opacity={i % 2 === 0 ? 0.4 : 0.28} />
          </g>
        ))}
        <circle cx="190" cy="190" r="18" stroke="#c9a84c" strokeWidth="1" opacity="0.55" fill="none" />
        <circle cx="190" cy="190" r="10" fill="#c9a84c" opacity="0.75" />
        <circle cx="190" cy="190" r="4"  fill="#0d3d2c" />
      </svg>
    </div>
  );
}

// Replace the entire Sparks function with this:

const SPARK_DATA = [
  { id: 0,  x: "8%",  y: "12%", size: 2.1, delay: 0.0, dur: 2.8, color: "rgba(201,168,76,"   },
  { id: 1,  x: "23%", y: "34%", size: 1.7, delay: 0.5, dur: 3.2, color: "rgba(200,230,208,"  },
  { id: 2,  x: "67%", y: "8%",  size: 2.4, delay: 1.1, dur: 2.4, color: "rgba(240,230,180,"  },
  { id: 3,  x: "45%", y: "55%", size: 1.5, delay: 0.3, dur: 3.6, color: "rgba(201,168,76,"   },
  { id: 4,  x: "82%", y: "22%", size: 2.8, delay: 1.8, dur: 2.1, color: "rgba(200,230,208,"  },
  { id: 5,  x: "15%", y: "72%", size: 1.9, delay: 0.7, dur: 3.0, color: "rgba(240,230,180,"  },
  { id: 6,  x: "56%", y: "41%", size: 2.2, delay: 2.1, dur: 2.6, color: "rgba(201,168,76,"   },
  { id: 7,  x: "34%", y: "88%", size: 1.6, delay: 0.9, dur: 3.4, color: "rgba(200,230,208,"  },
  { id: 8,  x: "78%", y: "63%", size: 2.6, delay: 1.4, dur: 2.2, color: "rgba(240,230,180,"  },
  { id: 9,  x: "91%", y: "45%", size: 1.8, delay: 3.1, dur: 2.9, color: "rgba(201,168,76,"   },
  { id: 10, x: "12%", y: "48%", size: 2.3, delay: 0.2, dur: 3.7, color: "rgba(200,230,208,"  },
  { id: 11, x: "63%", y: "78%", size: 1.4, delay: 2.6, dur: 2.3, color: "rgba(240,230,180,"  },
  { id: 12, x: "47%", y: "19%", size: 2.9, delay: 1.0, dur: 3.1, color: "rgba(201,168,76,"   },
  { id: 13, x: "29%", y: "61%", size: 1.7, delay: 3.5, dur: 2.7, color: "rgba(200,230,208,"  },
  { id: 14, x: "74%", y: "33%", size: 2.0, delay: 0.6, dur: 3.5, color: "rgba(240,230,180,"  },
  { id: 15, x: "5%",  y: "82%", size: 2.5, delay: 1.9, dur: 2.0, color: "rgba(201,168,76,"   },
  { id: 16, x: "88%", y: "74%", size: 1.6, delay: 0.4, dur: 3.3, color: "rgba(200,230,208,"  },
  { id: 17, x: "38%", y: "27%", size: 2.1, delay: 2.8, dur: 2.5, color: "rgba(240,230,180,"  },
  { id: 18, x: "52%", y: "93%", size: 1.8, delay: 1.3, dur: 3.8, color: "rgba(201,168,76,"   },
  { id: 19, x: "71%", y: "52%", size: 2.7, delay: 0.8, dur: 2.2, color: "rgba(200,230,208,"  },
  { id: 20, x: "19%", y: "15%", size: 1.5, delay: 3.2, dur: 3.0, color: "rgba(240,230,180,"  },
  { id: 21, x: "43%", y: "70%", size: 2.3, delay: 1.6, dur: 2.8, color: "rgba(201,168,76,"   },
  { id: 22, x: "86%", y: "90%", size: 1.9, delay: 0.1, dur: 3.6, color: "rgba(200,230,208,"  },
  { id: 23, x: "61%", y: "38%", size: 2.4, delay: 2.4, dur: 2.4, color: "rgba(240,230,180,"  },
];

function Sparks() {
  return (
    <>
      {SPARK_DATA.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            backgroundColor: `${s.color}0.6)`,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  );
}