"use client";

export default function CategoryPill({
  label,
  icon,
  active,
  onPress,
}: {
  label: string;
  icon: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <button
      onClick={onPress}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingInline: 14,
        paddingBlock: 7,
        borderRadius: 999,
        border: active ? "none" : "0.5px solid #8cb89a",
        background: active ? "#c9a878" : "rgba(26,92,69,0.5)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "all 0.18s ease",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 13 }}>{icon}</span>
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: active ? "#3A2A14" : "#c8e6d0",
        }}
      >
        {label}
      </span>
    </button>
  );
}