# Deployment Guide

## GitHub Pages Deployment

Your portfolio is set up to work seamlessly with GitHub Pages. Follow these steps to deploy:

### Initial Setup

1. **Ensure your repository is public** (or you have GitHub Pro for private repo Pages)
   
2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Complete portfolio rebuild with modern design"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Navigate to **Pages** in the left sidebar
   - Under **Source**, select the `main` branch
   - Click **Save**
   - Your site will be available at `https://yourusername.github.io/gvriend.app`

### Custom Domain (grahamv.app)

Since you have a CNAME file already configured:

1. **DNS Configuration** (if not already done):
   - Go to your domain registrar
   - Add the following DNS records:
     ```
     Type: CNAME
     Name: www
     Value: grahamvriend.github.io
     
     Type: A (or ALIAS)
     Name: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153
     ```

2. **Verify CNAME file**:
   - Your CNAME file should contain: `grahamv.app`
   - This tells GitHub Pages which domain to serve

3. **Enable HTTPS**:
   - In GitHub Pages settings (Settings > Pages)
   - Check "Enforce HTTPS"
   - Wait a few minutes for the certificate to provision

### Testing

After deployment:

1. Visit your site at `https://grahamv.app`
2. Test on different devices and browsers
3. Check all links work correctly
4. Verify social media links
5. Test mobile responsiveness

### Troubleshooting

**Site not loading?**
- Wait 5-10 minutes after pushing changes
- Check GitHub Actions tab for build status
- Verify DNS settings are correct

**404 errors?**
- Ensure `index.html` is in the root directory
- Check that the repository is public
- Verify GitHub Pages is enabled

**Custom domain not working?**
- Check DNS propagation (can take up to 24 hours)
- Verify CNAME file is in the root directory
- Make sure DNS records are correctly configured

### Update Workflow

To update your portfolio:

1. Make changes to `index.html`, `styles.css`, or `script.js`
2. Test locally by opening `index.html` in your browser
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update [describe your changes]"
   git push origin main
   ```
4. Changes will be live in a few minutes

## Alternative Hosting Options

### Netlify

1. Sign up at [netlify.com](https://www.netlify.com)
2. Connect your GitHub repository
3. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
4. Configure custom domain in Netlify settings

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy settings:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `/`
4. Configure custom domain in Vercel settings

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
