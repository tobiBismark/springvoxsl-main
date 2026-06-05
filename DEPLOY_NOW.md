# Step-by-Step: Deploy to Netlify in 5 Minutes

Follow these exact steps to deploy your SpringVox site to Netlify.

## Step 1: Prepare Your Code (2 minutes)

```bash
# Navigate to your project
cd /home/water/Downloads/springvoxsl-main

# Test the build locally
npm run build

# Verify build output exists
ls -la dist/client/

# Test preview (optional)
npm run preview
```

✅ **Status**: Your code builds successfully locally

## Step 2: Push Code to GitHub (2 minutes)

```bash
# Commit your changes
git add .
git commit -m "Add Netlify deployment configuration"

# Push to GitHub
git push origin main
```

✅ **Status**: Code is on GitHub

## Step 3: Connect to Netlify (1 minute)

1. Go to **https://app.netlify.com/start**
2. Click **"Connect to Git"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select this repository: `springvoxsl-main`

✅ **Status**: Repository connected

## Step 4: Review Build Settings (30 seconds)

Netlify automatically reads from `netlify.toml` and `.nvmrc`:

- **Build command**: `npm run build` ✓
- **Publish directory**: `dist/client` ✓
- **Node.js version**: `20` ✓

**No changes needed!** Netlify auto-detected everything.

If settings don't show correctly:

- Click **"Edit settings"**
- Ensure these values match the above
- Click **"Save"**

✅ **Status**: Build settings configured

## Step 5: Deploy! (Automatic)

1. Click **"Deploy site"** or **"Save & Deploy"**
2. Wait for build to complete (usually 2-5 minutes)
3. Netlify shows your deployment URL

```
✨ Your site is now live!
Example: https://your-site-name.netlify.app
```

✅ **Status**: Site deployed successfully

## Step 6: Verify Deployment (1 minute)

1. Click the deployment URL
2. Test:
   - [ ] Homepage loads
   - [ ] Navigation works
   - [ ] Pages are accessible
   - [ ] No blank page or errors
   - [ ] Mobile view works

```bash
# Or test from terminal
curl -s https://your-site-name.netlify.app | head -20
```

✅ **Status**: Deployment verified

---

## 🎉 Done! Your Site is Live!

### What Happens Next:

- **Auto-deploys**: Every push to `main` auto-deploys
- **Preview deploys**: Each pull request gets a preview URL
- **Branch deploys**: Different branches get their own URLs

### Useful URLs:

- **Production**: `https://your-site-name.netlify.app`
- **Netlify Dashboard**: `https://app.netlify.com/teams/your-team/sites`
- **Site Settings**: `https://app.netlify.com/sites/your-site-name/settings`
- **Deployment Logs**: `https://app.netlify.com/sites/your-site-name/deploys`

---

## If Something Goes Wrong

### Build Failed?

1. Check Netlify build logs
2. Run `npm run build` locally
3. Look for error messages
4. Common issues:
   - Missing environment variables
   - Node.js version mismatch
   - Syntax errors in code

**Fix**: Commit your fix and push again. Netlify rebuilds automatically.

### Site Shows Blank Page?

1. Check browser console (F12 → Console tab)
2. Look for JavaScript errors
3. Check Network tab for failed requests
4. Verify `netlify.toml` has correct redirect rules

**Fix**: Check NETLIFY_DEPLOYMENT.md → Troubleshooting section

### Want a Custom Domain?

1. In Netlify Dashboard: **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `springvox.com`)
4. Follow DNS configuration steps
5. HTTPS is automatic!

---

## Next Steps (Optional)

1. **Set up custom domain**
   - Netlify Dashboard → Domain management

2. **Enable Branch deploys**
   - Netlify Dashboard → Deploy settings → Branch deploys

3. **Configure Environment Variables**
   - Netlify Dashboard → Build & deploy → Environment

4. **Set up monitoring**
   - Netlify Analytics (free)
   - Error tracking
   - Performance monitoring

5. **Use Netlify CLI for local testing**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

---

## Support Resources

- **Documentation**: Read `NETLIFY_DEPLOYMENT.md`
- **Checklist**: Review `DEPLOYMENT_CHECKLIST.md`
- **Summary**: Check `NETLIFY_SETUP_SUMMARY.md`
- **Netlify Help**: https://docs.netlify.com
- **TanStack Start**: https://tanstack.com/start

---

## Deployment Checklist Summary

```bash
# Before you deploy, run these commands:

# 1. Build locally
npm run build                    # ✓ Should complete without errors

# 2. Preview the build
npm run preview                  # ✓ Should look correct

# 3. Commit changes
git add .
git commit -m "Add Netlify config"

# 4. Push to GitHub
git push origin main

# 5. Go to https://app.netlify.com
#    Connect repository → Deploy → Done! 🚀
```

---

**Estimated Time**: 5-10 minutes total
**Next Deploy**: Automatic on every push to main
**Rollback**: One click in Netlify Dashboard
