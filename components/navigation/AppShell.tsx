"use client";

import LiquidNavBar from "./LiquidNavBar";
import MandalaBackground from "../ui/MandalaBackground";

export default function AppShell({
  children,
  showNav = true,
}: {
  children: React.ReactNode;
  showNav?: boolean;
}) {
  return (
    <div
      style={{
        position:        "relative",
        minHeight:       "100dvh",
        backgroundColor: "#0d3d2c",
        overflowX:       "hidden",
      }}
    >
      <MandalaBackground />

      <div
        style={{
          position:      "relative",
          zIndex:        1,
          paddingBottom: showNav ? 100 : 0,
        }}
      >
        {children}
      </div>

      {showNav && <LiquidNavBar />}
    </div>
  );
}