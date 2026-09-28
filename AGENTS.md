# AGENTS.md

This document orients AI agents and developers working on this codebase.

## Project Overview

A single-page, in-browser-editable portfolio site for Rajat Srivastava (Director, Platform
Development — Agentic AI). The whole experience lives on one route (`/`): a hero, a "what I
bring" section with a stat bar, an insights/case-study grid, an about section, a services
section, and a contact section with a working Netlify Forms submission.

The defining feature is the **"Edit page" mode**: a floating button toggles `contentEditable`
on every text field on the page. Edits are held in React state, persisted to the browser's
`localStorage`, and can be exported/imported as a JSON file or reset back to the defaults.
There is no server-side persistence — this is a personal page the owner edits themselves,
in their own browser.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components (`src/components/ui`) |
| Forms | Netlify Forms (AJAX submission + static detection skeleton) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── contact.html      # Static hidden form so Netlify's build bot registers "contact"
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── ui/           # Card, Badge, Checkbox, HoverCard, Separator (shadcn-style)
│   │   ├── Editable.tsx      # <EditableText path={...}> — contentEditable text bound to site content
│   │   └── EditControls.tsx  # Floating "Edit page" / Export / Import / Reset control bar
│   ├── data
│   │   └── site-content.ts   # SiteContent type + defaultContent (all copy on the page)
│   ├── lib
│   │   ├── site-content-context.tsx  # Provider + hook: state, localStorage sync, path get/set
│   │   └── utils.ts                  # cn() helper
│   ├── routes
│   │   ├── __root.tsx    # Root layout, page <head> metadata
│   │   └── index.tsx     # The entire one-page site (sections + contact form)
│   └── styles.css        # Tailwind + CSS custom properties (oklch color tokens)
├── content/               # Unused leftover from the starter template (see note below)
├── content-collections.ts # Unused leftover from the starter template (see note below)
├── AGENTS.md
├── README.md
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

> **Note on `content/` and `content-collections.ts`**: the starter template this project was
> scaffolded from used Content Collections for a multi-page blog/resume/projects site. This
> project consolidated everything into a single editable page instead, so those directories
> and the markdown files inside them are no longer read by any route. They were left in place
> rather than removed to avoid disturbing the build pipeline; they can be deleted in a future
> cleanup along with the `@content-collections/*` dependencies.

## How the editable content system works

1. `src/data/site-content.ts` defines the `SiteContent` shape and the `defaultContent` object —
   this is the single source of truth for every string shown on the page.
2. `SiteContentProvider` (in `src/lib/site-content-context.tsx`) holds a `content` state object
   seeded from `defaultContent`, hydrates it from `localStorage` on mount, and writes it back on
   every change. It exposes `setValue(path, value)`, `addItem(path, template)` and
   `removeItem(path, index)`, all addressed by a `path` array like `['insights', 'items', 0, 'title']`.
3. `<EditableText path={[...]} as="h1" />` reads the current value at that path and renders it as
   a `contentEditable` element when edit mode is on, writing back on blur.
4. `EditControls` renders the floating "Edit page" button plus, while editing, buttons to export
   the current content as JSON, import a previously exported JSON file, or reset to defaults.

To change the wording or structure of a section, prefer editing `defaultContent` in
`src/data/site-content.ts` directly (this changes what new visitors see) rather than only using
the in-browser editor (which only changes what's stored in that one browser's `localStorage`).

## Conventions

- Components: PascalCase. Utilities/hooks: camelCase. Routes: kebab-case files.
- Tailwind utility classes for styling; `cn()` for conditional class merging.
- CSS variables for theme tokens live in `styles.css`.
- TypeScript strict mode; import paths use the `@/` alias for `src/*`.

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```
