# Netlify Deployment Guide for SpringVox

This guide explains how to deploy your TanStack Start project to Netlify.

## Quick Setup

1. **Connect your repository to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab/Bitbucket account
   - Select this repository
   - Netlify will auto-detect the build settings from `netlify.toml`

2. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

## Configuration Overview

### Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `dist/client`
- **Node.js Version**: 20

### Deployment Options

#### Option 1: Client-Side SPA (Recommended - Current Setup)

This is the current configuration. Your app runs as a Single Page Application.

**Pros:**

- Simple, fast deployment
- Works great for marketing websites and SPAs
- No server-side processing needed

**Cons:**

- No server-side rendering
- API calls must go to external services

**When to use:** If your site doesn't need SSR, this is the best choice.

#### Option 2: Full-Stack with Edge Functions (Advanced)

For server-side rendering and API routes using Netlify Edge Functions.

**Setup:**

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Modify your build to output Edge Functions
3. Deploy with Netlify CLI: `netlify deploy`

**Pros:**

- Full-stack functionality
- Can use SSR
- API routes work on Netlify

**Cons:**

- More complex setup
- Requires additional configuration

#### Option 3: Alternative Platforms (Full Node.js Support)

If you need traditional Node.js server support:

- **Vercel** (recommended for Next.js-like projects)
- **Railway**
- **Render**
- **Fly.io**
- **AWS/DigitalOcean** (traditional hosting)

## Environment Variables

If your project needs environment variables (e.g., API endpoints):

1. In Netlify Dashboard:
   - Go to **Site settings** → **Build & deploy** → **Environment**
   - Add your variables here

2. Example variables:

   ```
   VITE_API_URL=https://api.example.com
   VITE_APP_NAME=SpringVox
   ```

3. In your code, access them:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## Build Artifacts

After building locally, you'll see:

```
dist/
├── client/          # Frontend SPA files (deployed to Netlify)
│   ├── assets/      # JS, CSS bundles
│   ├── index.html   # Entry point
│   └── [static files]
└── server/          # Server code (not used in SPA mode)
```

## Testing Before Deployment

### Test the production build locally:

```bash
npm run build
npm run preview
```

This starts a local server on `http://localhost:4173` serving the built files, exactly as Netlify will serve them.

## Troubleshooting

### Build fails on Netlify but works locally

- Check Node.js version matches (currently set to 20)
- Clear Netlify cache: Site settings → Builds & deploys → Clear cache
- Check environment variables are set in Netlify Dashboard

### Website shows blank page after deployment

- Check browser console for JavaScript errors
- Verify all static assets loaded correctly
- Check redirects configuration in `netlify.toml`

### 404 errors on page refresh

- This is normal for SPAs - the redirect rule in `netlify.toml` handles this
- If it still occurs, verify the `[[redirects]]` section is in `netlify.toml`

### Performance issues

- Check built file sizes (should see output during build)
- Enable compression in Netlify (usually automatic)
- Consider lazy-loading components

## Monitoring & Updates

Once deployed:

- Netlify auto-deploys on git push to main
- Check deployment logs in Netlify Dashboard
- Set up notifications for deployment failures

## Useful Netlify Features

- **Branch previews**: Automatic previews for pull requests
- **Rollbacks**: Easy rollback to previous deployments
- **Analytics**: Built-in analytics (free tier available)
- **Edge Functions**: Serverless functions at CDN edge
- **Forms**: Native form handling (if you add `netlify` attribute)

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [TanStack Start Documentation](https://tanstack.com/start/latest)
- Check build logs in Netlify Dashboard for specific errors
