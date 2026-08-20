import React from "react";

export function IelsHeader({ user, onSignOut }) {
  return (
    <header
      style={{
        height: "64px",
        padding: "0 1.5rem",
        background: "#FFFFFF",
        color: "#1F2937",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E5E7EB",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      }}
    >
      {/* Left: Logo + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <img
          src="./src/assets/vite.svg"
          alt="IELS"
          style={{ height: "32px" }}
        />
        <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          IELS Platform
        </span>
      </div>

      {/* Right: User Menu */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontWeight: 500 }}>{user?.name}</span>

        <img
          src={user?.avatarUrl}
          alt="avatar"
          style={{
            height: "36px",
            width: "36px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #E5E7EB",
          }}
        />

        <button
          onClick={onSignOut}
          style={{
            background: "#F9FAFB",
            border: "1px solid #D1D5DB",
            padding: "6px 12px",
            borderRadius: "6px",
            color: "#1F2937",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
