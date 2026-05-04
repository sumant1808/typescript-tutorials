# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm test              # run all tests once (vitest)
npm run test:watch    # vitest in watch mode
npm run build         # compile TypeScript → out/
npm run e             # run current exercise via tt-cli
npm run s             # run current solution via tt-cli
```

Run a single test file:
```bash
npx vitest run src/01-number.test.ts
```

## Architecture

This is a TypeScript learning repo based on Matt Pocock's Beginners TypeScript course. TypeScript is compiled with `strict: true`, `rootDir: src`, `outDir: out`.

**Source layout:**
- `src/` — TypeScript exercises and practice files; tests are colocated (`.test.ts` next to the source)
- `src/practice.ts` — freeform practice scratch file
- `out/` — compiled JS output (do not edit)

**Test convention:** Tests live in `src/` alongside implementation. Vitest is the test runner; test and implementation can be in the same file (see `src/01-number.test.ts`).

## Design / Docs Conventions

**`sdd/`** — Spec-driven development (SDD) skills: markdown specs and instructions that drive Claude through structured development workflows (not production code):
- `sdd/codebase_reviewer/` — architecture review skills (deepening, interface design, shared vocabulary in `LANGUAGE.md`)
- `sdd/grill-with-docs/` — formats for ADRs (`ADR-FORMAT.md`) and domain context (`CONTEXT-FORMAT.md`)
- `sdd/prd_generator/` — PRD generation skill
- `sdd/design-mermaid/` — visual design context as Mermaid diagrams; developed using the `walkthrough` skill

**`prj_docs/`** — raw context data for the project (source-of-truth inputs, not derived artifacts):
- `prj_docs/requirements/CONTEXT.md` — domain glossary (populate lazily as terms emerge)
- `prj_docs/design/` — design artifacts

**ADRs** go in `docs/adr/` with sequential numbering (`0001-slug.md`). Create the directory lazily when the first ADR is needed. See `sdd/grill-with-docs/ADR-FORMAT.md` for the format and criteria.

**Architecture vocabulary** (from `sdd/codebase_reviewer/LANGUAGE.md`): use **module**, **interface**, **seam**, **adapter**, **depth**, **leverage**, **locality** — not "component," "service," "API," or "boundary."

Architecture improvement work targets `src/` only and follows the deepening process in `sdd/codebase_reviewer/improve-codebase-architecture.md`.
