import React from "react";

export default function CapPackageLink(props: { children: React.ReactNode }) {
  return (
    <a href="/docs/packages/cap/overview">
      {props.children}
    </a>
  );
}
