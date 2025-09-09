"use client";

import { useEffect } from "react";

export const VersionSaver = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_VERSION) {
      localStorage.setItem("VERSION", process.env.NEXT_PUBLIC_VERSION);
    }
  }, []);

  return null;
}