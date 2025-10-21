# Hostinger Auto-Deployment Setup Guide

This guide explains how to automatically deploy your Next.js portfolio to Hostinger on every GitHub commit.

## Prerequisites

- GitHub repository with your code
- Hostinger hosting account
- FTP access to your Hostinger account

## Setup Instructions

### 1. Get Hostinger FTP Credentials

1. Log into your **Hostinger control panel** (hPanel)
2. Navigate to **Files** → **FTP Accounts**
3. Note down:
   - **FTP Server/Hostname** (e.g., `ftp.yourdomain.com` or `ftp.hostinger.com`)
   - **FTP Username** (usually your account username)
   - **FTP Password** (create one if needed)
   - **Deployment Path** (usually `/public_html` or `/domains/yourdomain.com/public_html`)

### 2. Configure GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

   - **Name:** `FTP_SERVER`  
     **Value:** Your FTP hostname (e.g., `ftp.yourdomain.com`)

   - **Name:** `FTP_USERNAME`  
     **Value:** Your FTP username

   - **Name:** `FTP_PASSWORD`  
     **Value:** Your FTP password

   - **Name:** `NEXT_PUBLIC_SENTRY_DSN` (if using Sentry)  
     **Value:** Your Sentry DSN

### 3. Update Workflow File (if needed)

The workflow file is located at `.github/workflows/deploy.yml`. Update these settings if needed:

- **Branch name:** Change `main` to `master` if that's your default branch
- **Server directory:** Update `server-dir: /public_html/` to match your hosting path
- **Node version:** Currently set to Node 20

### 4. How It Works

Once configured, the deployment process automatically:

1. **Triggers** on every push to the `main` branch
2. **Checks out** your code
3. **Installs** dependencies
4. **Builds** your Next.js app as a static export
5. **Deploys** the built files to Hostinger via FTP

### 5. Test the Deployment

1. Make a small change to your code
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Test auto-deployment"
   git push origin main
   ```
3. Go to your GitHub repository → **Actions** tab
4. Watch the deployment workflow run
5. Check your Hostinger site to see the changes

## Troubleshooting

### Build Fails
- Check the **Actions** tab in GitHub for error logs
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### FTP Connection Fails
- Double-check FTP credentials in GitHub Secrets
- Verify FTP server hostname is correct
- Ensure your Hostinger account has FTP access enabled

### Site Not Updating
- Check the `server-dir` path in the workflow file
- Verify files are being uploaded to the correct directory
- Clear your browser cache

### Static Export Issues
- Some Next.js features don't work with static export (e.g., API routes, ISR)
- Check Next.js documentation for [static export limitations](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## Alternative: Manual Deployment

If you prefer manual deployment:

```bash
npm run build
```

Then upload the contents of the `out/` folder to your Hostinger hosting via FTP.

## Notes

- The workflow uses static export (`output: 'export'`) which is required for Hostinger
- Images are set to `unoptimized: true` for compatibility
- Deployment typically takes 2-5 minutes
- Only successful builds are deployed

## Support

For issues with:
- **GitHub Actions:** Check the Actions tab for logs
- **Hostinger:** Contact Hostinger support
- **Next.js Build:** Check Next.js documentation
