import React from "react";

export function IelsFooter() {
  return (
    <footer
      style={{
        padding: "1rem",
        background: "#FFFFFF",
        color: "#6B7280",
        textAlign: "center",
        borderTop: "1px solid #E5E7EB",
        marginTop: "2rem",
      }}
    >
      © {new Date().getFullYear()} IELS Platform · All Rights Reserved
    </footer>
  );
}
