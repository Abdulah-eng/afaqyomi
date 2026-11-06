# AFAQYOMI Website — Production Deployment Guide
**Domain:** [www.afaqyomi.com](https://www.afaqyomi.com)

This guide explains how to deploy the newly redesigned AFAQYOMI website to your live domain.

---

## What Has Been Prepared

1. **Production Build Verified:**
   - The deployable production build has been created and verified at:
     `artifacts/afaqyomi-studio/dist/public`
   - Pre-configured with clean asset chunking, SEO metadata, JSON-LD structured data, new official logo (`logo.jpeg`), and the full suite of 50 services.

2. **Pre-configured Vercel Configuration (`vercel.json`):**
   ```json
   {
     "buildCommand": "pnpm --filter @workspace/afaqyomi-studio build",
     "outputDirectory": "artifacts/afaqyomi-studio/dist/public",
     "installCommand": "pnpm install --no-frozen-lockfile",
     "framework": "vite",
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

---

## Deployment Options

Choose the method that matches your current setup:

### Option 1: GitHub + Vercel (Recommended & Automated)

If your website is connected to GitHub and Vercel, any push to your main branch will automatically trigger a production build and update `www.afaqyomi.com`.

1. **Initialize Git and commit the updated code:**
   ```powershell
   git init
   git add .
   git commit -m "Complete AFAQYOMI website redesign with 50 services, new logo, and animated showcase"
   ```

2. **Connect to your GitHub repository and push:**
   ```powershell
   git branch -M main
   # If setting up for the first time:
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/afaqyomi-website.git
   git push -u origin main

   # Or if the remote already exists:
   git push origin main
   ```

3. **In your Vercel Dashboard:**
   - If not imported yet, click **Add New → Project** and select your GitHub repository.
   - Leave the Root Directory as `./` (the root of the project).
   - Vercel automatically detects `vercel.json` with the correct build command and output directory (`artifacts/afaqyomi-studio/dist/public`).
   - Under **Project Settings → Domains**, ensure `afaqyomi.com` and `www.afaqyomi.com` are added and point to your project.
   - Within 1–2 minutes, your live site will be deployed and active.

---

### Option 2: Deploy Directly with Vercel CLI (Fastest, No GitHub Needed)

You can deploy directly to your Vercel production domain from your terminal:

1. Open PowerShell in this project directory:
   ```powershell
   npx vercel --prod
   ```

2. Follow the interactive prompts:
   - **Set up and deploy?** Press `Y` (Yes)
   - **Which scope?** Choose your Vercel account
   - **Link to existing project?**
     - If you already have the AFAQYOMI project in Vercel: choose `Y` and select it.
     - If it's a new project: choose `N` and name it (e.g., `afaqyomi-website`).
   - The CLI will upload your files, execute the build, and attach your production domain `www.afaqyomi.com`.

---

### Option 3: Direct Static File Upload (cPanel / Hostinger / Netlify Drop / Apache)

If your live domain is hosted on traditional web hosting (cPanel, Hostinger, Apache, Nginx, or Netlify Drop):

1. **Rebuild fresh production assets (already built):**
   ```powershell
   pnpm run build
   ```

2. **Locate the production output folder:**
   ```
   artifacts/afaqyomi-studio/dist/public
   ```

3. **Upload the files:**
   - Upload all files and folders inside `artifacts/afaqyomi-studio/dist/public` (including `index.html`, `assets/`, `media/`, `logo.jpeg`) directly into your server's `public_html` or web root directory.
   - **SPA Routing Note:** For Apache/cPanel, ensure an `.htaccess` file is present in `public_html` to handle client-side routing:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

---

## Domain DNS Configuration Reference

For `afaqyomi.com` pointing to Vercel:
- **A Record:** Host `@` → `76.76.21.21`
- **CNAME Record:** Host `www` → `cname.vercel-dns.com`
- *Note:* Do not remove existing MX or TXT records to keep your business emails working.
