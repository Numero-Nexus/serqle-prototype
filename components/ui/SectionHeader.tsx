export default function SectionHeader({
  title,
  onViewAll,
}: {
  title: string;
  onViewAll?: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: 24,
        marginBottom: 12,
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: "#c8e6d0",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
      {onViewAll && (
        <button
          onClick={onViewAll}
          style={{
            background: "none",
            border: "none",
            fontSize: 12,
            fontWeight: 600,
            color: "#c9a84c",
            cursor: "pointer",
          }}
        >
          View all
        </button>
      )}
    </div>
  );
}