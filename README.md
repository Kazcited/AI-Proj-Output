# Elon Musk — Animated Resume

A minimalist, monochrome resume site built with plain HTML, CSS and vanilla JavaScript. No framework, no build step, no API keys.

## Files

```
index.html     Structure and resume content
style.css      Styling, responsive layout, animation
script.js      Scene switching, scroll progress, parallax, reveals
assets/        Background images (add these; see assets/README.md)
```

## Add the images first

The six background images are **not included** (see `assets/README.md` for the exact filenames, sources and licence notes). Until you add them, each scene shows a monochrome CSS fallback, so the site still works.

## How the scrolling backgrounds work

- A fixed `.stage` layer holds six stacked `.scene` elements, one per image.
- Each `<section>` has a `data-scene` value. An `IntersectionObserver` watches a thin band across the middle of the viewport and activates the matching scene.
- Active scenes fade in over 1.6 s while the previous one fades out; scrolling up restores earlier scenes the same way.
- Desktop adds a slow image zoom and light parallax. Both are off on screens under 900 px, and for visitors with `prefers-reduced-motion`.

| Section | Scene |
|---|---|
| Hero | `hero-space.jpg` |
| Profile, Timeline | `tech-computing.jpg` |
| Tesla | `tesla.jpg` |
| SpaceX | `spacex.jpg` |
| Other ventures, Impact | `ventures.jpg` |
| Closing, References | `closing-space.jpg` |

## Preview locally

Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Vercel

1. Push this folder to a Git repository, with `index.html` at the root.
2. In Vercel choose **Add New → Project** and import the repository.
3. Set **Framework Preset** to **Other**. Leave the build command and output directory empty.
4. Deploy.

Or from the command line: `npx vercel` in this folder, then `npx vercel --prod`.

## Content accuracy

Dates and roles were written from established public record, and Musk's role at each company (founder, investor, chairman, CEO) is stated separately. Please verify against the linked sources in the footer before academic use, particularly for anything recent (xAI's corporate structure, Starship milestones, Neuralink progress).
