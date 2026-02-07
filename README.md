# Readocs

A lightweight, browser-based Markdown editor with live preview. Write Markdown on the left, see the rendered output on the right in real time.

## Features

- **Live Preview** — See your Markdown rendered instantly as you type
- **Syntax Highlighting** — CodeMirror-powered editor with Markdown syntax highlighting
- **Formatting Toolbar** — Quick-access buttons for bold, italic, headings, links, lists, quotes, and inline code
- **Templates** — 8 pre-built Markdown templates (Open Source, API, CLI, Web App, Mobile App, etc.) to kickstart your documentation
- **Document Stats** — Real-time word, character, and line count
- **Download** — Export your document as a `.md` file with a custom filename
- **Persistent Storage** — Your work is automatically saved to `localStorage` and restored on reload

## Run Locally

Clone the project

```bash
  git clone https://github.com/radriann21/readocs.git
```

Go to the project directory

```bash
  cd readocs
```

Install dependencies

```bash
  pnpm install
```

Start the development server

```bash
  pnpm dev
```

Build for production

```bash
  pnpm build
```

## Project Structure

```
src/
├── app/                  # App entry component
├── features/
│   ├── editor/           # Editor panel (CodeMirror, Toolbar, Header, Templates)
│   ├── header/           # Top navigation bar (title input, download button)
│   └── preview/          # Live Markdown preview panel
├── shared/
│   ├── layouts/          # MainLayout, EditorLayout
│   ├── model/            # Zustand store, types
│   └── utils/            # Helper functions (getSelection, templates)
└── styles/               # Global CSS (Tailwind)
```

## Tech Stack

**Client:** React 19, TypeScript, TailwindCSS 4, Zustand

**Editor:** CodeMirror 6 (via @uiw/react-codemirror)

**Markdown:** react-markdown, remark-gfm, rehype-starry-night, rehype-raw, rehype-sanitize

**Build:** Vite 7, SWC

## Authors

- [@radriann21](https://www.github.com/radriann21)
