---
name: website-generator-offline
description: Generate complete static websites (HTML, CSS, optional JS) that work fully offline with no external dependencies.
metadata:
  homepage: https://github.com/lhabacuc/website-generator-offline-skill
---

# Website Generator Offline

This is a text-only Agent Skill for Google AI Edge Gallery.

## When to trigger
Use this skill when the user asks for:
- a static website or landing page;
- HTML/CSS/JS that must run offline;
- no frameworks, no CDN, no external APIs;
- a ready-to-open local site package.

## Constraints
- Output must be fully offline-first.
- Do not reference external URLs for scripts, styles, fonts, images, or APIs.
- Do not call `run_js`.
- Do not call `run_intent`.
- Prefer small, readable files and semantic HTML.

## Output format
Always provide:
1. A short visual direction (2-4 lines).
2. Complete file contents for:
   - `index.html`
   - `styles.css`
   - `script.js` (only if interaction is needed)
3. A simple local test instruction (open `index.html` directly).

## Quality checklist
Before finalizing, verify:
- no external dependencies are used;
- layout is responsive (mobile-first);
- basic accessibility is present (labels, alt text, visible focus);
- internal links and interactions are coherent;
- the output can run via `file://` without breaking.

## Behavior
- Ask only essential clarification if user requirements are missing.
- If requirements are clear, generate immediately.
- Use realistic content unless user asks for placeholders.
- Keep responses practical and implementation-ready.
