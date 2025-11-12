# Quick Guide: Deploy to Vercel

## 🚀 Quick Deployment Steps

### 1. Push Changes to GitHub
```bash
git add .
git commit -m "Add Vercel configuration"
git push origin main
```

### 2. Deploy via Vercel Dashboard

1. **Go to https://vercel.com** and sign in with GitHub

2. **Click "Add New" → "Project"**

3. **Import your repository**: `gururaghav2925/Task`

4. **Configure Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `client` ⚠️ **IMPORTANT!**
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Add Environment Variables**:
   - `VITE_APP_BASE_URL` = `https://taskify-jhhu.onrender.com`
   - `VITE_APP_FIREBASE_API_KEY` = Your Firebase API key

6. **Click "Deploy"**

### 3. Update Backend CORS

After deployment, you'll get a Vercel URL (e.g., `https://your-app.vercel.app`).

**Update your backend CORS** (on Render):

In `server/index.js`, add your Vercel URL:

```javascript
origin: [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://your-vercel-app.vercel.app", // Add your Vercel URL here
  "https://taskify-lyart-five.vercel.app"
],
```

Then redeploy your backend on Render.

### 4. Verify Deployment

1. Visit your Vercel deployment URL
2. Test login functionality
3. Check browser console for errors

## 📝 Notes

- **Root Directory**: Must be set to `client` in Vercel settings
- **Backend**: Already deployed on Render at `https://taskify-jhhu.onrender.com`
- **Environment Variables**: Must start with `VITE_` to work in Vite
- **Auto-deployment**: Vercel will auto-deploy on every push to main branch

## 🔧 Troubleshooting

**Build fails?**
- Check Vercel build logs
- Ensure root directory is set to `client`
- Verify all dependencies are in `package.json`

**API calls fail?**
- Verify backend URL in environment variables
- Check CORS configuration on backend
- Ensure backend is running

**404 errors on routes?**
- The `vercel.json` should handle this with rewrites
- Make sure `vercel.json` is in the root directory

## 🎯 Alternative: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Navigate to client
cd client

# Deploy
vercel

# For production
vercel --prod
```

---

**Need help?** Check the full deployment guide in `DEPLOYMENT.md`

