# Rajat Srivastava — Portfolio

A single-page, personal portfolio site for Rajat Srivastava, Director of Platform Development
focused on Agentic AI. It's modeled after a consulting-style personal site: a hero introduction,
a "what I bring" section with a stat bar, an insights/case-study grid, an about section,
services, and a contact section with a working form.

The whole page is **editable directly in the browser**. Click "Edit page" (bottom-right corner)
to turn every heading, paragraph, card, and stat into an editable text field. Edits save
automatically to your browser's local storage, and you can:

- **Export** your edits as a JSON file (a backup you can keep or move to another browser)
- **Import** a previously exported JSON file
- **Reset** back to the original placeholder content

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) on Vite 7
- Tailwind CSS 4, with a small set of Radix UI-based components
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact form — no backend code required
- Content lives in `src/data/site-content.ts` and is edited either there (for the default,
  public-facing copy) or live on the page (per-browser, via local storage)

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Updating your info

There are two ways to put in your own details:

1. **On the page itself** — click "Edit page", edit any text in place, and it's saved to your
   browser automatically. Use "Export" to download a JSON backup of your edits.
2. **In the source** — edit `defaultContent` in `src/data/site-content.ts` and redeploy. This is
   what every visitor sees by default, regardless of their own browser's local edits.

See `AGENTS.md` for a fuller architecture description.
