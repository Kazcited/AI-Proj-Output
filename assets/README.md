# Assets

**No image files are included yet.** The environment this project was built in had no internet access, so photographs could not be downloaded or licence-checked. The site works without them (each scene falls back to a monochrome CSS background) and picks the images up automatically once you add files with these exact names.

| File | Used in | What to look for |
|---|---|---|
| `hero-space.jpg` | Hero | Dark Earth horizon or starfield; keep the left half dark for text |
| `tech-computing.jpg` | Profile and timeline | Circuitry, server racks, or a code-on-screen close-up |
| `tesla.jpg` | Tesla | Clean side profile, studio shot, or car on a dark road |
| `spacex.jpg` | SpaceX | Falcon 9 on the pad, in flight, or a booster landing |
| `ventures.jpg` | Other ventures and impact | Robotics, neural technology, or tunnel infrastructure |
| `closing-space.jpg` | Closing and references | Dark starfield or faint planetary limb |

## Where to source them (check each licence before use)

- **NASA Image and Video Library**: https://images.nasa.gov/ — NASA media is generally not copyrighted, but check the usage guidelines at https://www.nasa.gov/nasa-brand-center/images-and-media/. Good for `hero-space.jpg`, `closing-space.jpg` and ISS or Dragon scenes.
- **SpaceX on Flickr**: https://www.flickr.com/photos/spacex/ — many SpaceX images are marked CC0 (public domain). Confirm the licence shown on each photo page. Good for `spacex.jpg`.
- **Wikimedia Commons**: https://commons.wikimedia.org/ — search "Tesla Model S", "Falcon 9", "data center". Licences vary (CC0, CC BY, CC BY-SA); CC BY and CC BY-SA require attribution, so add credits to the footer.
- **Unsplash** (https://unsplash.com/) and **Pexels** (https://www.pexels.com/): free licences, good for `tech-computing.jpg` and `ventures.jpg`. Tesla images from these sites may contain trademarks; review their terms.

## Preparing the files

- Resize to about 2400 px on the long edge and export at quality 70–80. Aim for under 400 KB each.
- The CSS applies a grayscale filter, so colour originals are fine.
- Keep the important subject on the right half for desktop; the text sits on the left.
- Optional WebP: `cwebp -q 75 tesla.jpg -o tesla.webp`, then change the `src` in `index.html`.

If you use images that require attribution, add the credit to the footer's `.credits` paragraph.
