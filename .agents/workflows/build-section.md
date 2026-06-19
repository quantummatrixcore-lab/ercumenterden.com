# Workflow: build-section
# Trigger: /build-section [section-name]
# Example: /build-section insights-hero

## Steps
1. Read AGENTS.md and .agents/rules/design-system.md
2. Load elite-component SKILL automatically
3. Create component file: components/sections/[SectionName].tsx
4. Apply correct typography roles (Cormorant / Inter / JetBrains Mono)
5. Implement hover states per elite-component SKILL
6. Import component into app/page.tsx at correct position
7. Open browser, navigate to localhost:3000
8. Take screenshot of the section
9. Report: screenshot artifact + file path + any deviations from design system
