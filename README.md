# MIX Lab Med

The public medical research website for MIX Lab and collaborators, led by Yan Song.

[Website](https://synlp.github.io/MixLab-Med/) · [Team GitHub](https://github.com/synlp) · [Google Scholar](https://scholar.google.com/citations?user=MsRp7g0AAAAJ&hl=en)

The site presents a research summary, selected projects and a searchable collection of 32 research works. It links to 21 verified public repositories spanning implementations, datasets and literature resources. Publication, acceptance, preprint and public-manuscript statuses are distinguished.

## Contents

- `index.html` is the generated, ready-to-publish page.
- `data/publications.json` contains English research summaries and paper/project links.
- `src/index.html` contains the page template.
- `assets/` contains styles, interaction code, illustrations and attributed research figures.
- `scripts/build.mjs` generates `index.html` using Node.js, without additional packages.

## Update the collection

Edit `data/publications.json`, then run:

```sh
node scripts/build.mjs
```

Update the template or assets to change the design. Preview with a local static server:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Commit the generated `index.html` together with its source changes.

## GitHub Pages

Publish the root directory of the `main` branch using GitHub Pages. `.nojekyll` preserves this buildless static site. All site assets use relative paths compatible with the `/MixLab-Med/` project URL.

## Research figures and links

The optional method gallery reproduces diagrams from R2Gen, ChiMed-GPT and CT feature decomposition, with links to their original papers. The hero and project illustrations are schematic depictions. GitHub links distinguish implementations, datasets and literature resources; follow each repository for its release and data-access conditions. Links were checked on November 9, 2026.
