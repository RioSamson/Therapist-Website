# Therapist Website

A collection of website ideas for a solo counsellor in Vancouver. The starting point was simple: help someone get a feel for the person they might talk to, without making them work to find the practical details.

The designs got a little more adventurous along the way. There are quiet editorial layouts, olive-green introductions, a painted cherry blossom scene, and a page full of draggable words and moving lines. There are fifteen concepts in the gallery: seven olive directions and eight other approaches.

## Take a look

Open `index.html` in a browser. Everything needed for the gallery is included, so it works offline. Choose **Explore concept** to open a design in a separate tab, then use the desktop and phone controls to compare layouts.

You can also serve the folder locally:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Working on a design

Each page lives in `concepts/`, alongside a small JSON file with its design notes. The files are self-contained, including fonts and illustration assets. They are a bit larger than a production site would be, but easy to open and share.

After editing a concept, rebuild the gallery:

```sh
node scripts/build.cjs
node scripts/check.cjs
```

No package installation is needed for those commands. The package lock records the version of Lenis bundled inside the more animated concepts so it can be checked with `npm audit`.

The research is in `research/notes.md`. The gallery uses the accompanying HTML report; update both when changing the research. Font and animation-library licenses are in `licenses/`.

## Still a design project

These are prototypes, not a live counselling service. Names, qualifications, fees, locations and contact information are placeholders. A real portrait and approved copy would need to replace them before launch. Contact previews do not send inquiries. Portrait pickers show a local preview in the browser; they do not upload the image.

Some of the landscape illustrations were generated with AI, then incorporated into the designs. They depict imagined scenes, not a real practice or its premises. The typography, SVG graphics and interactive elements are built into the pages.

## About the history

This repository was assembled from an existing local project. The earlier commits are **reconstructed snapshots**, grouped by the work they represent. Their author dates use recorded implementation times; their committer dates record the import. They are not a recovered, step-by-step Git history. See `HISTORY.md` for the dates and limits of that reconstruction.

Private conversation records, local tooling paths and client-specific references are not included.
