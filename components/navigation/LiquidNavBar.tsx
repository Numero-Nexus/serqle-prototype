"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { key: "/home",        icon: "⌂",  label: "Home"     },
  { key: "/chat",        icon: "💬", label: "Chat"     },
  { key: "/activity",   icon: "◎",  label: "Activity" },
  { key: "/stats",      icon: "◈",  label: "Stats"    },
  { key: "/profile",    icon: "◉",  label: "Profile"  },
];

export default function LiquidNavBar() {
  const pathname = usePathname();
  const router   = useRouter();

  const activeIdx = NAV_ITEMS.findIndex(
    (n) => pathname === n.key || pathname.startsWith(n.key + "/")
  );
  const safeIdx = activeIdx === -1 ? 0 : activeIdx;

  return (
    <div
      style={{
        position:  "fixed",
        bottom:    0,
        left:      "50%",
        transform: "translateX(-50%)",
        width:     "100%",
        maxWidth:  430,
        padding:   "0 12px 20px 12px",
        zIndex:    50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display:         "flex",
          alignItems:      "center",
          background:      "#1a5c45",
          borderRadius:    28,
          overflow:        "hidden",
          position:        "relative",
          height:          64,
          boxShadow:       "0 8px 32px rgba(0,0,0,0.4)",
          pointerEvents:   "all",
        }}
      >
        {/* Animated blob */}
        <motion.div
          animate={{ x: `${safeIdx * 100}%` }}
          transition={{ type: "spring", damping: 22, stiffness: 260, mass: 0.8 }}
          style={{
            position:      "absolute",
            top:           0,
            left:          0,
            width:         `${100 / NAV_ITEMS.length}%`,
            height:        "100%",
            zIndex:        0,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              margin:        "5px 8px",
              height:        "calc(100% - 10px)",
              borderRadius:  18,
              background:    "radial-gradient(ellipse at 50% 32%, #f8f0e3 0%, #e8d5b5 48%, #ccb48a 100%)",
              boxShadow:     "inset 0 4px 8px rgba(255,252,248,0.4)",
            }}
          />
        </motion.div>

        {/* Tabs */}
        {NAV_ITEMS.map((item, idx) => {
          const isActive = idx === safeIdx;
          return (
            <button
              key={item.key}
              onClick={() => router.push(item.key)}
              style={{
                flex:           1,
                height:         "100%",
                display:        "flex",
                flexDirection:  "column",
                alignItems:     "center",
                justifyContent: "center",
                background:     "none",
                border:         "none",
                cursor:         "pointer",
                position:       "relative",
                zIndex:         1,
                gap:            2,
                padding:        0,
              }}
            >
              <span
                style={{
                  fontSize:   18,
                  lineHeight: 1,
                  color:      isActive ? "#7a5530" : "rgba(255,255,255,0.38)",
                  transition: "color 0.16s ease",
                }}
              >
                {item.icon}
              </span>
              <span
                style={{
                  fontSize:     8,
                  letterSpacing: 0.3,
                  fontWeight:   isActive ? 700 : 500,
                  color:        isActive ? "#7a5530" : "rgba(255,255,255,0.38)",
                  transition:   "color 0.16s ease",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}