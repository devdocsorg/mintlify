import React, { ReactNode } from "react";

interface CalloutProps {
  type?: "info" | "warning" | "error";
  children: ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ type = "info", children }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "warning":
        return "#fff3cd";
      case "error":
        return "#f8d7da";
      default:
        return "#cff4fc";
    }
  };

  const style: React.CSSProperties = {
    padding: "15px",
    margin: "10px 0",
    borderRadius: "4px",
    backgroundColor: getBackgroundColor(),
    border: "1px solid",
    borderColor:
      type === "warning" ? "#ffeeba" : type === "error" ? "#f5c6cb" : "#b6effb",
  };

  return <div style={style}>{children}</div>;
};

export default Callout;
