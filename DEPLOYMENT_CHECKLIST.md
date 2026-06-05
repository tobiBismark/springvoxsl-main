# Pre-Deployment Checklist

Use this checklist before deploying to Netlify to ensure everything is ready.

## Code Quality

- [ ] Run `npm run lint` - no errors or critical warnings
- [ ] Run `npm run build` locally - builds successfully
- [ ] Run `npm run preview` - site loads correctly locally
- [ ] Test all routes by navigating through the site
- [ ] Check browser console - no errors or warnings
- [ ] Test on mobile/tablet - responsive design works

## Build Configuration

- [ ] `netlify.toml` exists with correct configuration
- [ ] `.nvmrc` specifies Node.js 20
- [ ] `package.json` build scripts work correctly
- [ ] `.gitignore` includes `node_modules` and `dist`

## Environment Variables

- [ ] Identify all environment variables needed (if any)
- [ ] List them in `NETLIFY_DEPLOYMENT.md`
- [ ] Add them to Netlify Dashboard before deployment
- [ ] Test with env vars set locally

## Repository Setup

- [ ] Code is committed and pushed to main branch
- [ ] Branch is public or you have access
- [ ] GitHub/GitLab/Bitbucket connection is ready

## Netlify Setup

- [ ] Have a Netlify account (free tier available)
- [ ] Repository is connected to Netlify
- [ ] Build settings are auto-detected from `netlify.toml`
- [ ] Environment variables are added (if needed)

## Deployment

- [ ] Click "Deploy site" in Netlify
- [ ] Monitor the build process in Netlify Dashboard
- [ ] Wait for deployment to complete (usually 2-5 minutes)
- [ ] Check the deployment status
- [ ] Visit the deployment URL to verify

## Post-Deployment

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify links work
- [ ] Check form submissions (if any)
- [ ] Review browser console for errors
- [ ] Test with different browsers
- [ ] Check Core Web Vitals (Netlify Analytics)

## Optional - Advanced Features

- [ ] Set up custom domain (if not using netlify.app)
- [ ] Enable HTTPS (automatic with Netlify)
- [ ] Set up branch deploys for pull requests
- [ ] Enable form handling if using Netlify forms
- [ ] Set up monitoring/alerts

## Troubleshooting

If anything fails:

1. Check Netlify build logs for error messages
2. Run `npm run build` locally to reproduce the issue
3. Verify `.nvmrc` and Node.js versions match
4. Check all environment variables are set
5. Review GitHub Actions workflow results
6. Clear Netlify cache and rebuild

## Useful Commands

```bash
# Test locally before deployment
npm run build
npm run preview

# Check build with verbose output
npm run build -- --debug

# Format code
npm run format

# Lint code
npm run lint
```

## Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **TanStack Start Docs**: https://tanstack.com/start/latest
- **GitHub Actions**: https://github.com/features/actions
- **Deployment Status**: Check your Netlify Dashboard
