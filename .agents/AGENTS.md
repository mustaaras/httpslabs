# Workspace Rules & Brand Guidelines

## Logo Typography Guidelines
- **Logo Name**: `httpsLabs`
- **Icon & Spacing**: 40x40 icon, gap `0.45rem`, `font-size: 1.23rem`
- **`https` Portion**: Extra bold (`font-weight: 800`), solid primary text color (`var(--text-primary)`).
- **`Labs` Portion**: Regular weight (`font-weight: 400`), 72% opacity (`color: var(--text-primary); opacity: 0.72;`).
- **Clean Design**: No underlines, no inner loop fills, clean contrast typography.

## Video Autoplay & iOS Compatibility Guidelines
- **Streaming Method**: Do NOT serve background or hero video files (like `.mp4`) directly as static files from the `/public` folder.
- **API Stream Requirement**: Always stream video files through a Next.js API Route Handler (e.g., `/api/video`) that implements full HTTP Range Requests (`206 Partial Content`) with correct `Content-Range` and `Accept-Ranges` headers.
- **Autoplay Requirements**: Ensure any `<video>` element has the JSX attributes `autoPlay muted loop playsInline preload="auto"` and programmatically sets `.muted = true` / calls `.play()` inside a `useEffect` hook to bypass iOS Safari autoplay restrictions.
- **Low Power Mode Fallback**: Always check if the `play()` promise succeeds. If blocked (e.g., under Low Power Mode), catch the error and fall back gracefully to displaying the static poster image (e.g., `/hero-poster.jpg`).

