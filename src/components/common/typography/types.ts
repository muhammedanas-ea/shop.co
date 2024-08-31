import React from "react";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface typographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  tag?: TypographyTag;
  className?: string;
}
