# Deployment Guide - Barber Therapy Frontend

Your Barber Therapy website is now ready for frontend-only deployment! Here's how to deploy it to popular hosting platforms.

## 🚀 Quick Deployment

### Option 1: Netlify (Recommended)

1. **Create Netlify Account**: Go to [netlify.com](https://netlify.com)

2. **Deploy from Git**:
   - Click "New site from Git"
   - Connect your GitHub/GitLab repository
   - Set build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `client/dist`
     - **Base directory**: `client`

3. **Configure Environment**:
   - Node version: 18 (auto-detected)
   - The `client/netlify.toml` file handles routing automatically

4. **Deploy**: Your site will be live at `https://your-site-name.netlify.app`

### Option 2: Vercel

1. **Create Vercel Account**: Go to [vercel.com](https://vercel.com)

2. **Import Project**:
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Vite configuration

3. **Configure Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Deploy**: Your site will be live at `https://your-project.vercel.app`

## 📁 Project Structure for Deployment

```
client/                    # Deploy this folder
├── src/                  # Source code
├── dist/                 # Built files (auto-generated)
├── package.json          # Dependencies & scripts
├── vite.config.ts        # Vite configuration
├── netlify.toml          # Netlify settings
├── vercel.json           # Vercel settings
└── README.md             # Documentation
```

## ⚙️ Build Configuration

The project includes optimized configurations:

- **Vite Config**: Optimized chunking and build settings
- **TypeScript**: Strict mode with path aliases
- **Tailwind**: Purged CSS for minimal bundle size
- **PostCSS**: Autoprefixer for browser compatibility

## 🌐 Custom Domain Setup

### Netlify
1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Configure DNS settings (A record or CNAME)
4. SSL certificate is automatically provisioned

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings
4. SSL certificate is automatically provisioned

## 📝 Environment Variables

This is a static site, so no server-side environment variables are needed. All configuration is done at build time.

If you need to customize the Calendly URL:
1. Edit `src/pages/booking.tsx`
2. Update the `data-url` attribute in the Calendly widget

## 🔧 Local Development

```bash
cd client
npm install
npm run dev
```

Your local site will be available at `http://localhost:3000`

## 📊 Performance

The optimized build includes:
- Code splitting for faster loading
- Minified CSS and JavaScript  
- Optimized image loading
- Proper caching headers
- Lighthouse score: 95+ expected

## 🚨 Troubleshooting

**Build Fails?**
- Check Node.js version (18+ required)
- Ensure all dependencies are installed
- Check for TypeScript errors

**Routing Issues?**
- Netlify: `_redirects` file handles SPA routing
- Vercel: `vercel.json` configures rewrites

**Calendly Not Loading?**
- Verify the Calendly URL in `booking.tsx`
- Check if external scripts are allowed

## 📞 Support

Your site is now ready for production! The static build removes all server dependencies while maintaining full functionality including:

✅ Responsive design  
✅ Dark theme with gold accents  
✅ Smooth scrolling navigation  
✅ Calendly booking integration  
✅ Contact forms and testimonials  
✅ Fast loading and SEO optimized