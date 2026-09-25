"use client";

// Se calcula en el navegador para que el año no quede fijo al momento del build.
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
