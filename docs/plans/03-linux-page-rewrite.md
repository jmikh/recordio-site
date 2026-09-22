# Plan 03: Rewrite /for/linux/

Read `docs/plans/00-shared-context.md` first.

## Why
`/for/linux/` is the only page with a real non-brand impression base: 550 impressions in 90 days, position 21, 0.9% CTR, for 30+ query variants ("best screen recorder for linux", "best screen recorder for ubuntu", "linux screen capture video", "record screen ubuntu"). It currently has a tag, an H1 and one 40-word subheadline of Linux-specific copy; everything else is the homepage's shared components. It does not deserve to rank and Google agrees.

## Deliverable
Rewrite `src/pages/for/linux.astro` (and add small components under `src/components/platform/` where a section is reusable by Plans 04 and 05) so that at least 1,000 words are Linux-specific. Keep the title and description already set: "Best Screen Recorder for Linux and Ubuntu | Recordio".

## Sections, in order
1. `PlatformHero` as today; tighten the subheadline to name distros.
2. **Works on any distro**: Ubuntu, Fedora, Debian, Arch, Pop!_OS, Linux Mint, openSUSE. Requirements: Chrome, Chromium, Edge or Brave. Nothing to install with apt, snap or flatpak beyond the browser. One sentence on the team angle: a Linux engineer and a Mac PM record into the same team library.
3. **Wayland and X11**: tab and window capture through the browser work on both; auto zoom and spotlight need tab capture because they read the page DOM. Full-screen capture on Wayland goes through the desktop portal (xdg-desktop-portal with PipeWire). **Confirm the exact behaviour with John before publishing this section**; write it with a `<!-- VERIFY -->` comment and keep claims minimal.
4. **Recordio vs OBS vs SimpleScreenRecorder vs Kazam**: a 4-column table (capture target, setup, auto zoom, captions, share link, team library, price). Those tools capture raw files and have no zoom, captions or sharing; OBS needs scene setup. Position Recordio for product walkthroughs, not gaming or streaming. Link `/compare/obs/`.
5. **Record a product walkthrough on Ubuntu in four steps**: install the extension, sign in with a free account, choose the tab, record, share the link. Include a screenshot of the extension popup on GNOME (ask John for the image; use a placeholder path `/assets/platform/linux-gnome-popup.webp` with a `<!-- ASSET NEEDED -->` comment).
6. **Audio on Linux**: microphone via the browser's PipeWire or PulseAudio device; system audio when recording a tab. Keep to two paragraphs.
7. **Linux FAQ** (5 questions: Wayland, audio, root access, distro support, offline use) rendered by `FAQ.tsx` with page-specific items via `BaseLayout`'s `faqItems` prop (see Plan 01; add the prop here if it has not landed). Replace the homepage FAQ on this page.
8. Keep `Pricing`; drop the shared `Testimonials` unless a quote is from a Linux user.
9. Related links: `/for/`, `/for/chrome/`, `/for/windows/`, `/for/mac/`, `/compare/obs/`, `/blog/best-screen-recorders-2026/`.

## Also
- Add a `BreadcrumbList` (Home > Platforms > Linux).
- Add the same "distros" and "four steps" components in a form Plan 04 (Chromebook) can reuse with different props.

## Acceptance
Build passes; page has 1,000+ Linux-specific words, one H1, page-specific FAQPage JSON-LD, at least 6 internal links, and every claim marked VERIFY is either confirmed or removed before John deploys.
