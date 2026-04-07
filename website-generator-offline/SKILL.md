---
name: website-generator-offline
description: Render a complete website preview directly in chat using an interactive webview, with offline-ready HTML/CSS/JS output.
metadata:
  homepage: https://github.com/lhabacuc/website-generator-offline-skill
---

# Website Generator Offline

Render and preview a website directly in the AI Edge Gallery chat, similar to virtual-piano behavior.

## Prompts / Triggers
- "renderiza um site no chat"
- "quero ver um site pronto aqui"
- "gera preview de landing page"
- "cria um website e mostra no chat"

## Instructions

Call the `run_js` tool with the following exact parameters:
- script name: `index.html`
- data: A JSON string with the following fields:
  - siteTitle: String. Main website name/title.
  - tagline: String. Short hero subtitle.
  - ctaText: String. Main call-to-action button label.
  - primaryColor: String. Hex color like `#0ea5e9`.
  - sections: Array of objects. Each object has:
    - title: String.
    - content: String.

If the user does not provide all fields, infer practical defaults and still call `run_js`.

After tool execution, summarize what was rendered and tell the user to tap the preview card to open the interactive webview.

## Constraints
- Keep generated structure practical and coherent.
- Use concise section content for mobile readability.
- Do not call `run_intent`.
