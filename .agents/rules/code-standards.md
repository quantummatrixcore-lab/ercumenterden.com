# Code Standards — ercumenterden.com

This document outlines standard programming guidelines for developers working on the repository.

## Rules
- **TypeScript:** Strict type checking enabled. Avoid using `any`. Declare proper interface types for all props.
- **Component Design:** Prefer functional components. Keep styling close to the Tailwind theme variables.
- **Client Components:** Use `"use client";` at the top of files that require browser APIs or state management.
- **Animation Principles:** Use clean CSS-only animations for visual enhancements. Always support accessibility variables (`prefers-reduced-motion`).
- **No JS Counters:** Never use Javascript-dependent animated count numbers to prevent initial render lag displaying '0'.
