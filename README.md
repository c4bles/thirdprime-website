# Third Prime Technologies Website

A minimalist, mysterious single-page website for Third Prime Technologies Ltd.

## Features

- **Minimalist Design**: Dark, skunkworks-style aesthetic
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Next.js 14 and optimized for Vercel
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Accessible**: Clean typography and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Vercel

1. **Connect to Vercel**:
   - Push this code to a Git repository (GitHub, GitLab, or Bitbucket)
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and configure the build settings

2. **Manual Deployment**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

3. **Custom Domain**:
   - Add your domain (thirdprime.io) in Vercel dashboard
   - Update DNS records as instructed by Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and animations
├── public/
│   └── images/         # Logo files
├── tailwind.config.ts  # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## Design Philosophy

- **Less is more**: Minimal content creates intrigue
- **Dark aesthetic**: Black background with red accents
- **Mysterious tone**: "If you know, you know"
- **Mobile-first**: Responsive design for all devices

## Content

- **Logo**: Third Prime Technologies with "Complexity Decoded" tagline
- **Statement**: "Some complexity hides in plain sight. Some is invisible by nature."
- **Contact**: info@thirdprime.io
- **Subtle hints**: Cybersecurity, Wealth, Universe (on hover)

## Performance

- Static generation for fast loading
- Optimized images with Next.js Image component
- Minimal JavaScript for fast interactions
- SEO optimized with proper meta tags