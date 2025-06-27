"use client";

import { m } from "framer-motion";

export default function Tamplate({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      style={{ width: "100%", minHeight: "100dvh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.35 }}
    >
      {children}
    </m.div>
  );
}
